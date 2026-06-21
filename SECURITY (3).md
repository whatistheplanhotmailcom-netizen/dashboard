# CISO Workspace — Security design (v1)

This documents what v1 secures, what it deliberately does not (and why), and how the architecture reaches a hardened hosted deployment **without rebuilding the foundation**.

## 1. Scope and threat model

- **Deployment:** single-user, local-first. Runs from a static file (locally or GitHub Pages). No backend, no network calls in v1.
- **Asset:** the GRC working data (documents/policies, vendors/DPAs, risks, projects, tasks, JML, compliance tags, evidence references, activity log).
- **Trust boundary:** the device and browser are trusted. The data **at rest** (in IndexedDB / local storage) is the asset we protect against device loss, casual inspection, and backup leakage.
- **Out of scope for v1:** a malicious operator on the same trusted device (they control the runtime and can read decrypted state in memory), and any multi-user / remote-access concern (there is no server to attack).

## 2. The honest boundary — client-only vs hosted

A static, client-only app **cannot** provide real authentication, authorization, or a tamper-proof audit trail. Those are server-enforced boundaries. v1 therefore implements each control as *what it genuinely is* on the client, and exposes the rest as **seams** a backend fills later.

| Requirement | v1 — local-first (real today) | Hosted phase (when online) |
|---|---|---|
| Authentication | Passphrase unlocks **client-side encryption at rest** (minimum 14 characters, strength-gated). This is data protection, **not** an access gate. | Server sessions + MFA; the unlock passphrase can remain as a second factor for client encryption. |
| Session / lock | 15-minute idle auto-lock, plus manual lock. Locking discards the decryption key and **clears the rendered workspace from the DOM** (records, panels, staging) and returns to a bare unlock screen — no decrypted content lingers in a hidden view. While unlocked, the app is a routed multi-view UI (`#/dashboard`, `#/records`, `#/vendors`, `#/risks`, `#/tasks`, `#/settings`); the unlock screen is the only thing rendered when locked. | Server session lifecycle, token expiry, and revocation via the same lock path. |
| Encryption at rest | AES-GCM-256; key via PBKDF2-SHA-256, **600,000 iterations** (current OWASP), random 16-byte salt, fresh 12-byte IV per write. **KDF parameters stored in vault metadata (versioned)** so they can be raised later without breaking existing vaults. Verified: round-trip, wrong-passphrase rejection, no IV reuse. | Same, plus server-side encryption + managed keys (KMS). |
| Authorization / least privilege | Single-user; `Authz.can(action, record)` returns true but is **called at every create / update / delete / read / import / export site**, so the seam is live, not decorative. | Server-enforced RBAC through the same `Authz` interface — same call sites, no rewrite. |
| Audit logging | Append-only local activity log. Trustworthy only to the extent the device is trusted. | Immutable, signed, server-side audit through the same `Audit` sink. |
| Input validation | Schema validation on every write (`Schema.validate`). | Same client checks **plus** server-side validation (never trust the client). |
| Output handling (XSS) | All rendered values HTML-escaped; no `innerHTML` of raw input; CSP forbids external/script injection. | Same, plus templating/auto-escaping on the server. |
| Safe file handling | Imports parsed as **untrusted text**, never executed, escaped on display, held in a **staging area** until reviewed and committed; fields length-clamped and type-checked on commit. **Import is size-limited (25 MB) in v1.** | Plus server-side AV/content scanning, content-type enforcement, sandboxed parsing, and streamed/chunked large-file handling. |
| Backups | **Encrypted by default** — export is `{ kdf, salt, payload(iv+ct) }` (AES-GCM, no plaintext). Restore decrypts with the **backup passphrase**, using the backup envelope's embedded salt + KDF parameters (independent of the current vault), then **stages** records for review rather than merging blindly. | Automated server backups + tested restore. |
| Secure headers | `<meta>` CSP: `default-src 'none'`, no external origins, `base-uri 'none'`, `form-action 'none'`; `referrer: no-referrer`. | Full header set via host/server: strict CSP with nonces, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors 'none'`. |

### Known v1 compromises (removed when hosted)
- **`script-src 'unsafe-inline'`** is required only because v1 is a single self-contained file. The hosted/multi-file build moves all JS to external files and uses a strict CSP with per-response nonces.
- **`frame-ancestors`** cannot be set via `<meta>` (ignored by spec); it is enforced by host headers in the hosted phase.
- The passphrase is **unrecoverable** by design — losing it means losing the vault. Keep an exported backup.

## 3. OWASP ASVS posture

v1 targets the ASVS controls that are achievable client-side: **V6 (Stored Cryptography)** — strong KDF, authenticated encryption, fresh IVs; **V5 (Validation, Sanitization & Encoding)** — input validation + output escaping; **V7 (Error Handling & Logging)** — activity logging, no sensitive data in errors; **V12/V13 (File & API)** — untrusted-file staging, no eval.

Server-dependent chapters — **V2 (Authentication)**, **V3 (Session)**, **V4 (Access Control)**, **V9 (Communications)** — are explicitly deferred to the hosted phase and represented by the `Authz`, `Audit`, and `Store` seams so they slot in without redesign.

## 4. Architecture seams (the no-rebuild path)

The code is organized as independent modules with narrow interfaces. Going online = implementing three interfaces against a backend; the domain logic (`Repo`, `Schema`) and UI are unchanged.

- `Vault` — crypto (encrypt/decrypt, key derivation). Unchanged when hosted; can add server-key wrapping.
- `Store` — persistence: `get(id)` / `put(rec)` / `clearAll()`. **Swap IndexedDB for an authenticated API client** with the same three methods.
- `Authz` — `can(action, record)`. No-op now; **server RBAC** later, same call sites.
- `Audit` — `log(action, detail)`. Local now; **server audit sink** later.
- `Schema` — record types, validation rules, compliance frameworks (shared client + server).
- `Repo` — CRUD over state, independent of where state is stored.

**Path:** single file (v1, runnable now) → split into a modular static PWA (external JS, strict CSP, service worker, large-file evidence vault) → add a backend implementing `Store`/`Authz`/`Audit` for real auth, RBAC, immutable audit, and availability. No layer is thrown away.

## 5. Data model (linked + compliance-tagged from day one)

Every record carries two cross-cutting fields so relationships and compliance exist from v1 (deferring them is the costly rework):

- `complianceRefs[]` — `{ fw, ref }` against PDPL, CMA, NCA ECC, ISO 27001, or Internal controls.
- `links[]` — ids of related records (risk ↔ control ↔ policy ↔ vendor ↔ task ↔ project), shown bidirectionally.

The full compliance-coverage **matrix** (gaps, heatmap) is a v2 view over these same fields — the relationships are already captured.
