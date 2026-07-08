# Aegis — Secure Workspace

A self-contained, fully-offline **encrypted dashboard**. The entire app is a
single [`index.html`](./index.html) — no build step, no framework, no CDN, no
network access at runtime.

## Open the app

👉 [**index.html**](./index.html)

Open it directly in a browser, or serve the folder locally (recommended, so
IndexedDB works on a stable origin):

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

## What it does

- **Encrypted vault** — pick a passphrase; a 256-bit AES-GCM key is derived
  with PBKDF2-SHA-256 (600,000 iterations). Everything is encrypted in the
  browser and stored locally (IndexedDB, with a localStorage fallback).
  Nothing is uploaded.
- **Records** — track risks, vendors, tasks, projects, documents and notes,
  each with status, severity, due date, owner, tags and notes.
- **Dashboard** — a "needs attention" view (overdue / blocked / high-severity),
  headline stats, and risk / due-date / activity panels.
- **Activity log** — an append-only, hash-chained audit trail with an
  integrity check and CSV export.
- **Backup & restore** — export an encrypted backup file and import it back.
- **Auto-lock** — the key is discarded after 15 minutes idle or on manual lock.

## Security

This is **data-at-rest encryption**, not an access-control gate. See
[`SECURITY.md`](./SECURITY.md) for the threat model and design notes.
