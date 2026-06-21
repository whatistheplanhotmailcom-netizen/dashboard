# CISO Workspace — v1 (secure foundation)

A local-first, encrypted GRC workspace. v1 is the **secure spine**: an encryption-at-rest vault, a swappable storage layer, the linked-record + compliance-tagging data model, validation, an activity log, untrusted-import staging, and JSON backup. It runs entirely on your device with **no network calls**.

See `SECURITY.md` for the full control map and the no-rebuild path to hosting.

## Run it

It is a single self-contained file (`index.html`).

- **Quickest:** open `index.html` in a browser. For full local-storage persistence, serve it rather than opening via `file://`:
  - `npx serve` (or `python3 -m http.server`) in this folder, then open the shown URL.
- **Deploy (private):** drop `index.html` in a GitHub Pages repo, exactly like your Road Alert PWA. Storage uses IndexedDB, with a local-storage fallback.

## First run

1. Open the app and **set a passphrase** — this creates your encrypted vault (AES-GCM-256, PBKDF2 600k).
2. The passphrase is **unrecoverable**. If you lose it, the vault cannot be decrypted. Export a **Backup** and keep it safe.
3. The vault auto-locks after 15 minutes idle; "Lock" locks it immediately.

## What you can do in v1

- Create / edit / delete records of any type (document, vendor, risk, project, task, person, note).
- Tag any record against **PDPL / CMA / NCA ECC / ISO 27001 / Internal** with a control reference.
- **Link** records to each other; links show bidirectionally ("referenced by").
- Filter by type, framework, or search; sort surfaces overdue/dated items first.
- Review the **activity log**; **Backup** (encrypted by default — keep the file *and* the passphrase; restore needs the same passphrase); **Restore** — imported records land in a **staging** area (untrusted) for review before they commit.

## Roadmap

- **Stage 1 (this build)** — secure foundation: vault, storage seam, linked + compliance-tagged data model, validation, activity log, import staging, JSON backup.
- **Stage 2** — the polished workspace UI on top of this spine: dashboard with the pending zone, the Risk / Projects / Tasks panels, calendar, JML on/off-boarding checklists, the compliance-coverage matrix view, and rich import/export (PDF, DOCX, XLSX, CSV) with the untrusted-file pipeline.
- **Stage 3** — PWA install + offline service worker, large-file **evidence vault** (per-file encrypted blobs), and split into a modular codebase with strict CSP.
- **Stage 4 (optional, when you want availability)** — backend implementing the `Store` / `Authz` / `Audit` seams: real authentication, RBAC, immutable audit, multi-device. No rebuild of the foundation.

No live production integrations (Entra, EDR, SIEM, ClickUp, Drive) at any stage unless you decide otherwise — the value is centralized management, file import/export, linked records, and staying on top of obligations.
