# COSMOS Music + Adaptive Audio Research

**Open-source adaptive music software for voice, phone motion, optional pulse timing, Python tooling, and classroom study.**

Created by **Cory Shane Davis / NavisWORLD**.

> **Start with the current product:** [`COSMOS_MUSIC_SUITE/`](./COSMOS_MUSIC_SUITE/)
>
> Foundational CST research deposit: **[DOI 10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**

## What this repository contains

| Area | What it is | Where to go |
|---|---|---|
| **COSMOS Music Suite** | Current installable PWA / Capacitor mobile app | [`COSMOS_MUSIC_SUITE/`](./COSMOS_MUSIC_SUITE/) |
| **Python companion** | 12-channel state, pitch, harmony, pulse timing, MIDI and local server tools | [`COSMOS_MUSIC_SUITE/python/`](./COSMOS_MUSIC_SUITE/python/) |
| **Student + teacher material** | Labs, classroom plan, architecture and install guides | [`COSMOS_MUSIC_SUITE/docs/`](./COSMOS_MUSIC_SUITE/docs/) |
| **Research / validation history** | Earlier reports and engineering notes retained for traceability | [`docs/research/`](./docs/research/) |
| **Legacy experiments** | Earlier simulations, demos and exploratory AI tests | [`archive/`](./archive/) |

## Current application

The maintained application is a local-first adaptive instrument with three operating modes:

- **Play Along** — microphone analysis drives pitch-aware accompaniment.
- **Conductor** — voice and device motion shape harmony, rhythm and timbre.
- **Bio** — manual, camera-derived or native pulse timing can influence musical phrasing.

The active mobile runtime lives in `COSMOS_MUSIC_SUITE/app/` and uses normal readable JavaScript modules. The browser microphone is used for analysis rather than direct speaker feedback.

### Signal path

```text
voice ───> pitch / energy / phrase features ─┐
motion ──> acceleration / tilt / rotation ───┼─> 12-channel performance state
pulse ───> BPM / phase / stability ──────────┘             │
                                                           v
                                            harmony / rhythm / timbre
                                                           │
                                                           v
                                                 Web Audio synthesis
```

The 12-channel vector is an **operational music-control representation inspired by CST**. It should not be presented as proof of consciousness, medical sensing, or literal higher-dimensional physics. Camera PPG is an approximate expressive input, not a medical heart-rate monitor.

## Quick start

```bash
cd COSMOS_MUSIC_SUITE
npm install
npm run build
npm run serve
```

Python:

```bash
cd COSMOS_MUSIC_SUITE/python
python -m pip install -e .
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .25 --bpm 72 --pulse-stability .8
```

Mobile build instructions: [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md)

## Documentation paths

- [Project map](./PROJECT_MAP.md)
- [Music suite architecture](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md)
- [Student guide](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md)
- [Teacher guide](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md)
- [Research links and claim boundaries](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md)
- [Historical research index](./docs/README.md)
- [Legacy archive index](./archive/README.md)

## Research lineage

- CST Zenodo DOI: https://doi.org/10.5281/zenodo.17574447
- QC67_cosmo: https://huggingface.co/phera-ra/QC67_cosmo
- COSMOS: https://github.com/NavisWORLD/Cosmos
- CST theory repository: https://github.com/NavisWORLD/The-theory-of-CST
- 12D Hebbian transformer: https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

## Repository philosophy

**Current product code stays obvious. Historical work stays available, but out of the way.**

Old demos, exploratory consciousness tests, superseded implementation notes and prior PR instructions are retained under `archive/` for provenance. They are not the recommended entry point and should not be confused with validated current behavior.

## License

GPL-3.0-only. See [`LICENSE`](./LICENSE) and the suite's contribution / governance documents.

Copyright © 2026 Cory Shane Davis.
