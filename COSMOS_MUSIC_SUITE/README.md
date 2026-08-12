# COSMOS Music — Adaptive Bio Instrument Suite

**Voice + iPhone/Android motion + optional camera pulse → adaptive music.**

Created by **Cory Shane Davis / NavisWORLD** as the music-technology branch of the COSMOS / Davis Cosmic Synapse Theory (CST) engineering lineage.

> Foundational research deposit: **DOI [10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**

## What ships here

| Component | Purpose |
|---|---|
| `app/COSMOS_PLAY_ALONG.html` | Sing and the local band estimates pitch/energy/phrasing and accompanies you. |
| `app/COSMOS_MUSIC_CONDUCTOR.html` | Full adaptive conductor using voice + motion + optional bio timing. |
| `app/COSMOS_QUANTUM_BIO_INSTRUMENT.html` | Pulse-led instrument with camera PPG/manual/native-heart bridge path. |
| `app/index.html` | Mobile launcher. |
| `app/manifest.webmanifest` + `sw.js` | Installable/offline-capable PWA shell. |
| `python/` | Testable Python CST-state, pitch, harmony, beat, MIDI and local server reference. |
| `docs/STUDENT_GUIDE.md` | Hands-on learner guide and labs. |
| `docs/TEACHER_GUIDE.md` | Eight-session teaching plan, assessment and answer guidance. |
| `native/ios-healthkit/` | Optional native HealthKit reference plugin for signed iOS builds. |
| `.github/workflows/` | Validation, PWA Pages deployment, Android APK build and iOS project packaging. |

## Install it on a phone

### PWA — no app store required
Host `app/` over HTTPS. On **iPhone**, open the site and use **Share → Add to Home Screen**. On **Android**, choose **Install app / Add to Home screen**. The manifest and service worker are already included.

### Native Android
```bash
npm install
npm run native:android
cd android
./gradlew assembleDebug
```
The GitHub Actions workflow also produces a downloadable debug APK artifact on manual run or a `v*` tag.

### Native iPhone
```bash
npm install
npm run native:ios
```
Open the generated iOS project in Xcode on macOS. Physical-device distribution requires Apple code signing/provisioning; signing credentials are intentionally **not** stored in this open-source repository. The PWA remains directly installable without signing.

## How the instrument works

```text
singing ─────────> pitch / energy / phrase analysis ─┐
phone motion ────> acceleration / orientation ───────┼─> 12-channel performance state
pulse input ─────> BPM / phase / stability ──────────┘          │
                                                               v
                                                    harmony / rhythm / timbre
                                                               │
                                                               v
                                                       Web Audio synthesis
```

The 12 channels are voice energy, pitch lock, phrase flux, tempo coherence, motion energy, X/Y tilt, rotation flux, pulse phase, pulse stability, harmonic tension and short-term synaptic memory.

**Scientific boundary:** the 12-state vector is an operational music-control representation inspired by CST/dyn12. It is not a medical claim, proof of consciousness, or proof of literal higher-dimensional physics. Camera PPG is an approximate expressive signal, not a medical heart-rate monitor.

## Python quick start
```bash
cd python
python -m pip install -e .
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .25 --bpm 72 --pulse-stability .8
cosmos-music midi --key C --mode major --bpm 72 --out demo.mid
cosmos-music serve --app ../app --port 8080
```

## Validate
```bash
python -m compileall python/src
PYTHONPATH=python/src pytest -q python/tests
node scripts/check-html.mjs
```

## Research lineage
- CST Zenodo DOI: https://doi.org/10.5281/zenodo.17574447
- QC67_cosmo: https://huggingface.co/phera-ra/QC67_cosmo
- Findings ledger: https://huggingface.co/phera-ra/QC67_cosmo/blob/main/FINDINGS.md
- COSMOS: https://github.com/NavisWORLD/Cosmos
- CST theory: https://github.com/NavisWORLD/The-theory-of-CST
- 12D Hebbian transformer: https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

See `docs/RESEARCH_LINKS.md` for claim and citation boundaries.

## Open source
The repository uses **GPL-3.0-only**, matching the existing music-engine repository. Contributions are welcome under `OPEN_SOURCE_AGREEMENT.md` and `CONTRIBUTING.md`. No API keys, Apple signing certificates, raw private recordings or personal health records belong in the repository.

Copyright © 2026 Cory Shane Davis.
