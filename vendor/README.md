# Vendored third-party libraries

These files are committed into the repo on purpose so the app stays fully
offline — no CDN, no network fetch at runtime.

## pdf-lib.min.js
- Package: pdf-lib
- Version: 1.17.1 (pinned)
- Source: https://registry.npmjs.org/pdf-lib/-/pdf-lib-1.17.1.tgz (dist/pdf-lib.min.js, UMD build)
- License: MIT
- SHA-256: 0f9a5cad07941f0826586c94e089d89b918c46e5c17cf2d5a3c6f666e3bc694f
- Modified: NO — byte-for-byte the published artifact.
- Used by: the Forms feature (#/forms) to read fillable AcroForm fields from
  uploaded PDFs. Loaded lazily, in the main thread, with no web worker, so the
  strict Content-Security-Policy is preserved. PDFs are parsed as untrusted
  data and never executed.
