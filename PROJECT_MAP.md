# Project Map

This repository is organized so a new visitor can distinguish the **maintained application** from **research history** and **legacy experiments** immediately.

## 1. Current product

### `COSMOS_MUSIC_SUITE/`
The maintained open-source music product.

```text
COSMOS_MUSIC_SUITE/
├── app/                  # PWA / mobile web runtime
│   ├── index.html
│   ├── src/              # readable modular JavaScript
│   ├── icons/
│   ├── manifest.webmanifest
│   └── sw.js
├── python/               # Python companion package + tests
├── native/               # optional native bridges / references
├── docs/                 # architecture, install, research and teaching guides
├── scripts/              # build and native packaging helpers
├── package.json
├── capacitor.config.ts
├── CITATION.cff
└── README.md
```

Use this directory for development, installation, teaching and contributions.

## 2. Repository documentation

### `docs/research/`
Historical validation reports and analysis documents that used to crowd the repository root. They are retained for traceability and should be read as dated research artifacts, not automatic proof of every present-day product claim.

### `docs/developer/`
Older integration snippets and developer-oriented notes that remain useful as references.

## 3. Archive

### `archive/legacy-demos/`
Earlier simulation and visualization branches of the project.

### `archive/experiments/`
Exploratory AI / consciousness-named experiments and test scripts. These names reflect their historical experimental framing; they are not presented as consciousness validation.

### `archive/legacy-music/`
Older music-project ancestry superseded by `COSMOS_MUSIC_SUITE/`.

### `archive/project-notes/`
Superseded PR prompts and implementation instructions retained only for provenance.

## 4. Automation

### `.github/workflows/`
CI for the current COSMOS Music Suite:

- validation
- PWA packaging / Pages deployment
- Android debug APK build
- iOS project packaging

## Recommended reading order

1. [`README.md`](./README.md)
2. [`COSMOS_MUSIC_SUITE/README.md`](./COSMOS_MUSIC_SUITE/README.md)
3. [`COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md)
4. [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md)
5. Student or teacher guide if using the project educationally
6. Research / archive material only when you want historical context
