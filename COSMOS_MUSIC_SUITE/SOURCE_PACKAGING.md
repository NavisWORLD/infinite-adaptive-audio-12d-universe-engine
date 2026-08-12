# Source Packaging

The authoritative COSMOS Music application is the readable modular runtime under:

```text
app/
├── index.html
├── styles.css
├── manifest.webmanifest
├── sw.js
├── icons/
└── src/
    ├── app.js
    ├── audio.js
    ├── sensors.js
    └── state.js
```

`npm run build` copies this runtime into `dist/` for PWA and Capacitor packaging.

## Legacy transport history

Earlier publication attempts stored large standalone HTML instruments as gzip / base64 transport pieces. Those transport files are no longer part of the active application tree because they were redundant, harder to review and caused integrity failures in CI.

Their history remains recoverable through Git commits. The maintained product no longer needs them to build, run or package for mobile.

## Why this structure

- human-readable source in normal files
- smaller and easier code review
- deterministic PWA / Capacitor packaging
- no binary reconstruction step
- clearer separation between maintained product and historical ancestry
