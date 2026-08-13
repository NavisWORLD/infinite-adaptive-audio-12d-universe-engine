# 🎵 COSMOS Music — Adaptive Bio Instrument Suite

**A local-first music system that listens to your voice, feels how you move your phone, can optionally follow pulse timing, and turns those signals into adaptive music.**

Created by **Cory Shane Davis / NavisWORLD**.

> 🚀 **Finished binaries:** [COSMOS Music v1.1.0](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/tag/cosmos-music-v1.1.0)
>
> 📄 Foundational CST research deposit: **[DOI 10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**
>
> 🧭 Repository guide: [root README](../README.md) · [Project Map](../PROJECT_MAP.md)

---

# ⬇️ I just want the app

You do **not** need Node, Python, Xcode, or Android Studio to use the prebuilt desktop/Android packages.

| Platform | Package |
|---|---|
| Windows x64 | [One-click `.exe` installer](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-Windows-x64-Setup.exe) |
| macOS Apple Silicon | [`.dmg`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-macOS-arm64.dmg) |
| macOS Intel | [`.dmg`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-macOS-x64.dmg) |
| Android | [Community `.apk`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-Android-Community.apk) |
| iPhone | [PWA package](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-iPhone-PWA.zip) |
| iOS developer | [Xcode project](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-iOS-Xcode-Project.zip) |

For mobile installation details and signing boundaries, read [`docs/MOBILE_INSTALL.md`](./docs/MOBILE_INSTALL.md).

---

# 🧸 Tiny-human explanation

You sing. You move your phone. Maybe you tap a heartbeat. The app notices those things and makes music that changes with you.

That is the core idea.

---

# 🎛️ Three modes

## 🎤 Play Along

The app listens to musical features in your voice and creates accompaniment around them. It tracks signals such as pitch, pitch confidence, energy, phrase movement, and tonal context.

## 🪄 Conductor

Voice and phone motion control the arrangement together. Acceleration, tilt, rotation, vocal energy, and pitch can influence rhythm, density, filtering, harmony, and timbre.

## ❤️ Bio

Pulse timing can also become a performance control through manual beat taps, approximate camera PPG, or an optional native heart event.

> Camera PPG is an expressive approximation for music control, **not a medical measurement**.

---

# 🚀 Run from source

From `COSMOS_MUSIC_SUITE/`:

```bash
npm install
npm run build
npm run serve
```

Then open the local address shown by the server.

Inside the app:

1. tap **Enable Audio**
2. enable **Mic / Voice**
3. optionally enable **Motion**
4. optionally use **Camera PPG** or **Tap Heartbeat**
5. choose **Play Along**, **Conductor**, or **Bio**
6. tap **Play With Me**

---

# 🧩 Maintained structure

```text
COSMOS_MUSIC_SUITE/
├── app/                   # authoritative web / PWA runtime
│   ├── index.html
│   ├── src/
│   │   ├── app.js         # UI + controller wiring
│   │   ├── audio.js       # synthesis + adaptive band
│   │   ├── sensors.js     # voice / motion / pulse inputs
│   │   └── state.js       # 12-channel state model
│   ├── icons/
│   ├── manifest.webmanifest
│   └── sw.js
├── desktop/               # Electron desktop wrapper
├── python/                # Python companion package + tests
├── native/                # optional native integration references
├── docs/                  # maintained guides
├── scripts/               # build and packaging helpers
├── package.json
├── capacitor.config.ts
└── README.md
```

The **authoritative current app is `app/`**. Repository-level `archive/` content is historical lineage and is not required to run this product.

---

# 🧠 The 12-channel performance state

```text
VOICE ────> pitch / energy / phrasing ───────┐
MOTION ───> acceleration / tilt / rotation ──┼──> 12 live state values
PULSE ────> BPM / phase / stability ─────────┘           │
                                                        ▼
                                      harmony / rhythm / timbre / density
                                                        │
                                                        ▼
                                                Web Audio synthesis
```

The channels are:

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

The state model is inspired by CST / dyn12, but here it is an **operational music-control system**. It is not presented as medical proof, consciousness proof, or literal higher-dimensional physics proof.

---

# 🐍 Python companion

```bash
cd python
python -m pip install -e .
```

Examples:

```bash
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .25 --bpm 72 --pulse-stability .8
cosmos-music midi --key C --mode major --bpm 72 --out demo.mid
cosmos-music serve --app ../app --port 8080
```

Read [`docs/API_AND_PYTHON.md`](./docs/API_AND_PYTHON.md).

---

# 📱 Native/mobile packaging

Capacitor 8 configuration is included.

```bash
npm run native:android
npm run native:ios
```

Android can be built locally with Gradle. Native installation on a physical iPhone requires Apple signing/provisioning; private signing credentials are intentionally excluded from the public repository.

Full guide: [`docs/MOBILE_INSTALL.md`](./docs/MOBILE_INSTALL.md).

---

# 🧑‍🏫 Education

- [`docs/STUDENT_GUIDE.md`](./docs/STUDENT_GUIDE.md)
- [`docs/TEACHER_GUIDE.md`](./docs/TEACHER_GUIDE.md)
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
- [`docs/README.md`](./docs/README.md)

The project can be taught as music technology, signal processing, creative coding, sensor interaction, adaptive-system design, and responsible experimental software practice.

---

# ✅ Validation

```bash
npm run build
node --check desktop/main.cjs
node --check app/src/audio.js
node --check app/src/sensors.js
node --check app/src/state.js
node --check app/src/app.js
python -m compileall python/src
PYTHONPATH=python/src pytest -q python/tests
node scripts/check-html.mjs
```

The v1.1.0 release workflow successfully built Windows, Android, iOS, macOS Apple Silicon, and macOS Intel packages after validation.

---

# 🌐 PWA deployment

The PWA source and release ZIP are complete. GitHub Pages is not currently enabled for the repository, so the Pages workflow is intentionally manual. A repository administrator can enable **Settings → Pages → Source: GitHub Actions**, then run **COSMOS Music Deploy PWA**.

Until then, the PWA ZIP can be hosted on any HTTPS static host.

---

# 🔬 Research lineage and claim boundaries

Related project sources:

- CST DOI: https://doi.org/10.5281/zenodo.17574447
- QC67_cosmo: https://huggingface.co/phera-ra/QC67_cosmo
- COSMOS: https://github.com/NavisWORLD/Cosmos
- CST theory: https://github.com/NavisWORLD/The-theory-of-CST
- 12D Hebbian Transformer: https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

Read [`docs/RESEARCH_LINKS.md`](./docs/RESEARCH_LINKS.md) before making scientific claims based on this software.

---

# 🔐 Privacy and security

Do not commit private recordings, personal health records, API keys, passwords, signing certificates, provisioning profiles, or other people's biometric data.

The maintained microphone path is analysis-first and is not intentionally routed directly to the speaker.

Read [`PRIVACY.md`](./PRIVACY.md) and [`SECURITY.md`](./SECURITY.md).

---

# 🤝 Build on it

Possible extensions include DAW/MIDI/OSC bridges, new instruments, synth engines, sensor mappings, accessibility controls, wearable bridges, recording/export, classroom experiments, and additional state-vector research tests.

Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

# 📚 Citation and license

Software citation metadata is in [`CITATION.cff`](./CITATION.cff). For the CST research lineage, cite the appropriate primary source and DOI where relevant.

Licensed **GPL-3.0-only**.

---

## 🌌 One sentence

**Your body gives the signals; COSMOS Music turns them into a band that responds.**

Copyright © 2026 Cory Shane Davis.
