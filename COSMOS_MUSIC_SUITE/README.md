# COSMOS Music — Adaptive Bio Instrument Suite

**Voice + phone motion + optional pulse timing → an adaptive local music instrument.**

Created by **Cory Shane Davis / NavisWORLD** as the maintained music-technology application in this repository.

> Foundational CST research deposit: **[DOI 10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**

## Start here

| Path | Purpose |
|---|---|
| [`app/`](./app/) | Installable PWA / mobile runtime |
| [`app/src/`](./app/src/) | Readable JavaScript audio, sensor, state and controller modules |
| [`python/`](./python/) | Python state, pitch, harmony, pulse, MIDI and server toolkit |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | Engineering architecture |
| [`docs/MOBILE_INSTALL.md`](./docs/MOBILE_INSTALL.md) | iPhone / Android installation and packaging |
| [`docs/API_AND_PYTHON.md`](./docs/API_AND_PYTHON.md) | Python and local API usage |
| [`docs/STUDENT_GUIDE.md`](./docs/STUDENT_GUIDE.md) | Hands-on learner guide |
| [`docs/TEACHER_GUIDE.md`](./docs/TEACHER_GUIDE.md) | Classroom plan and assessment guidance |
| [`docs/RESEARCH_LINKS.md`](./docs/RESEARCH_LINKS.md) | Research lineage and claim boundaries |
| [`native/`](./native/) | Optional native bridge references |

## The three modes

### Play Along
Use the microphone as an analysis input. Pitch, energy and phrase movement influence accompaniment while microphone audio is not routed directly back to the speaker.

### Conductor
Voice and device motion jointly shape musical behavior. Acceleration, tilt and rotation become expressive control signals for harmony, rhythm, density and timbre.

### Bio
Manual heartbeat taps, approximate camera PPG, or an optional native heart-event bridge can influence musical timing. **Camera PPG is an expressive approximation, not a medical measurement.**

## State model

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

The twelve channels are:

1. voice energy
2. pitch lock
3. phrase flux
4. tempo coherence
5. motion energy
6. X tilt
7. Y tilt
8. rotation flux
9. pulse phase
10. pulse stability
11. harmonic tension
12. short-term synaptic memory

This vector is an **operational music-control representation inspired by CST / dyn12**. It is not presented as proof of consciousness, a medical model, or proof of literal higher-dimensional physics.

## Run the web application

```bash
npm install
npm run build
npm run serve
```

The authoritative runtime is the modular source in `app/`. The build copies that runtime to `dist/`; it does not depend on legacy compressed transport artifacts.

## Python quick start

```bash
cd python
python -m pip install -e .
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .25 --bpm 72 --pulse-stability .8
cosmos-music midi --key C --mode major --bpm 72 --out demo.mid
cosmos-music serve --app ../app --port 8080
```

## Native mobile

Android:

```bash
npm install
npm run native:android
cd android
./gradlew assembleDebug
```

iOS:

```bash
npm install
npm run native:ios
```

Open the generated iOS project in Xcode. Native physical-device distribution requires Apple code signing and provisioning credentials, which are intentionally not stored in this repository. The PWA can be installed without native signing.

## Validate

```bash
npm run build
node --check app/src/audio.js
node --check app/src/sensors.js
node --check app/src/state.js
node --check app/src/app.js
python -m compileall python/src
PYTHONPATH=python/src pytest -q python/tests
```

## Research lineage

- CST Zenodo DOI: https://doi.org/10.5281/zenodo.17574447
- QC67_cosmo: https://huggingface.co/phera-ra/QC67_cosmo
- COSMOS: https://github.com/NavisWORLD/Cosmos
- CST theory: https://github.com/NavisWORLD/The-theory-of-CST
- 12D Hebbian transformer: https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

See [`docs/RESEARCH_LINKS.md`](./docs/RESEARCH_LINKS.md) for the evidence / claim boundary.

## Open source

Licensed **GPL-3.0-only**. See `CONTRIBUTING.md`, `OPEN_SOURCE_AGREEMENT.md`, `GOVERNANCE.md`, `PRIVACY.md` and `SECURITY.md`.

Do not commit API keys, signing certificates, raw private recordings or personal health records.

Copyright © 2026 Cory Shane Davis.
