# 🎵 COSMOS Music + Adaptive Audio Research

**Turn your voice, phone movement, and optional heartbeat timing into a live adaptive band.**

Created by **Cory Shane Davis / NavisWORLD**.

[![Release](https://img.shields.io/badge/release-COSMOS%20Music%20v1.1.0-2ea44f)](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/tag/cosmos-music-v1.1.0)
[![License](https://img.shields.io/badge/license-GPL--3.0--only-blue)](./LICENSE)

> 🚀 **Want the app, not the source? Start with the v1.1.0 release:**
> **[Download COSMOS Music v1.1.0](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/tag/cosmos-music-v1.1.0)**
>
> 📄 Foundational CST research deposit: **[DOI 10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**

---

# ⬇️ Pick your device

| Device | Download / install path |
|---|---|
| 🪟 **Windows 64-bit** | [`COSMOS-Music-1.1.0-Windows-x64-Setup.exe`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-Windows-x64-Setup.exe) |
| 🍎 **Mac — Apple Silicon** | [`COSMOS-Music-1.1.0-macOS-arm64.dmg`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-macOS-arm64.dmg) |
| 🍎 **Mac — Intel** | [`COSMOS-Music-1.1.0-macOS-x64.dmg`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-macOS-x64.dmg) |
| 🤖 **Android** | [`COSMOS-Music-1.1.0-Android-Community.apk`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-Android-Community.apk) |
| 📱 **iPhone — easiest open-source path** | [`COSMOS-Music-1.1.0-iPhone-PWA.zip`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-iPhone-PWA.zip) |
| 🧑‍💻 **iOS developers** | [`COSMOS-Music-1.1.0-iOS-Xcode-Project.zip`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-iOS-Xcode-Project.zip) |
| 🧪 **iOS Simulator** | [`COSMOS-Music-1.1.0-iOS-Simulator.app.zip`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-iOS-Simulator.app.zip) |
| 🔐 **Verify files** | [`SHA256SUMS.txt`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/SHA256SUMS.txt) |

### Signing note

The Windows/macOS files are community builds and may show OS trust prompts because commercial signing certificates are not stored in this public repository. The Android APK is a directly installable community build. A native physical-device iPhone `.ipa` requires an Apple Developer signing identity and provisioning profile; the repository intentionally does not contain private Apple signing credentials.

See [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md) for the mobile paths.

---

# 🧸 Explain it like I am 5

You make a sound. Your phone listens to the sound, feels how you move it, and can optionally follow a heartbeat-like rhythm. Then the computer says:

**“Cool. I am going to play music with you.”**

It is not just a prerecorded backing track. The software continuously measures performance signals and uses them to change the music it creates.

- 🎤 voice controls musical features
- 📱 movement becomes expression
- ❤️ optional pulse timing can influence rhythm
- 🎛️ the system turns those inputs into a live 12-channel control state

---

# 🎛️ Three instrument modes

## 🎤 Play Along

Sing or make musical sounds and the app estimates pitch, confidence, energy, phrase movement, and tonal context. The adaptive band responds around the performance.

## 🪄 Conductor

Voice and phone motion work together. Tilt, rotation, movement strength, vocal energy, and pitch can reshape rhythm, harmony, density, filtering, and timbre.

## ❤️ Bio

Pulse timing can be supplied by heartbeat tapping, approximate camera PPG, or an optional native bridge.

> Camera PPG is an expressive music-control input, **not a medical heart-rate monitor**.

---

# 🧠 What “12D” means in this software

The maintained engine summarizes the performance into 12 operational control channels:

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

```text
VOICE ────> pitch / energy / phrasing ───────┐
MOTION ───> movement / tilt / rotation ──────┼──> 12 live control channels
PULSE ────> BPM / phase / stability ─────────┘              │
                                                             ▼
                                           harmony / rhythm / melody / timbre
                                                             │
                                                             ▼
                                                    generated music
```

The 12-channel state is an **operational music-control representation inspired by CST / dyn12**. It is not presented as medical proof, proof of consciousness, or proof of literal higher-dimensional physics.

---

# 👋 New here? Pick a path

| I want to… | Start here |
|---|---|
| **Download the finished builds** | [COSMOS Music v1.1.0 release](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/tag/cosmos-music-v1.1.0) |
| **Explore the maintained product source** | [`COSMOS_MUSIC_SUITE/`](./COSMOS_MUSIC_SUITE/) |
| **Install on iPhone or Android** | [`MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md) |
| **Understand the engine** | [`ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md) |
| **Use the Python tools** | [`API_AND_PYTHON.md`](./COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md) |
| **Teach it** | [`TEACHER_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md) |
| **Learn it as a student** | [`STUDENT_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md) |
| **Follow research / DOI / lineage** | [`RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md) |
| **Understand every folder** | [`PROJECT_MAP.md`](./PROJECT_MAP.md) |
| **Study older experiments** | [`archive/README.md`](./archive/README.md) |

If you only want the current product, stay inside **`COSMOS_MUSIC_SUITE/`** and the current **GitHub Release**.

---

# ⚡ Build from source

Requirements: Node.js and Python.

```bash
git clone https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine.git
cd infinite-adaptive-audio-12d-universe-engine/COSMOS_MUSIC_SUITE
npm install
npm run build
npm run serve
```

Inside the app:

1. **Enable Audio**
2. enable **Mic / Voice**
3. optionally enable **Motion**
4. optionally use **Camera PPG** or **Tap Heartbeat**
5. choose **Play Along**, **Conductor**, or **Bio**
6. tap **Play With Me**

---

# 🐍 Python companion

```bash
cd COSMOS_MUSIC_SUITE/python
python -m pip install -e .
```

Examples:

```bash
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .25 --bpm 72 --pulse-stability .8
cosmos-music midi --key C --mode major --bpm 72 --out demo.mid
cosmos-music serve --app ../app --port 8080
```

The Python package includes reference tooling for the 12-channel state, pitch estimation, tonal/key inference, harmony helpers, pulse timing, MIDI generation, and local serving.

---

# 🗺️ Repository map

```text
.
├── README.md
├── PROJECT_MAP.md
├── LICENSE
├── COSMOS_MUSIC_SUITE/        # ✅ maintained product
│   ├── app/                   # web / PWA runtime
│   ├── desktop/               # Electron desktop shell
│   ├── python/                # Python companion package + tests
│   ├── native/                # native integration references
│   ├── docs/                  # maintained documentation
│   ├── scripts/               # build / packaging helpers
│   ├── package.json
│   └── capacitor.config.ts
├── docs/                      # research / developer records
└── archive/                   # older experiments and ancestry
```

---

# 🧪 Validation and release engineering

The maintained project is checked in GitHub Actions before release. The v1.1.0 binary pipeline validated the web runtime and Python package, then built Windows, Android, iOS, macOS Apple Silicon, and macOS Intel packages before publishing the release.

From `COSMOS_MUSIC_SUITE/`:

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

---

# 🌐 PWA hosting status

The PWA source is complete and packaged in the v1.1.0 release. This repository's GitHub Pages site is **not currently enabled**, so the Pages workflow is kept manual rather than leaving a misleading failing deployment on every push.

A repository administrator can enable **Settings → Pages → Source: GitHub Actions**, then run **COSMOS Music Deploy PWA** from the Actions tab. No source-code change is required after Pages is enabled.

---

# 🔬 Research and lineage

Related primary project sources:

- **CST Zenodo DOI:** https://doi.org/10.5281/zenodo.17574447
- **QC67_cosmo:** https://huggingface.co/phera-ra/QC67_cosmo
- **COSMOS:** https://github.com/NavisWORLD/Cosmos
- **CST theory:** https://github.com/NavisWORLD/The-theory-of-CST
- **12D Hebbian Transformer:** https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

For what each source does and does **not** establish, read [`COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md).

Historical validation reports remain under [`docs/research/`](./docs/research/) for traceability rather than being treated as automatic proof of every later claim.

---

# 🔐 Privacy and safety

The maintained app is designed around **local-first sensor processing**. Do not commit API keys, passwords, Apple signing certificates, private recordings, personal health records, or private biometric data.

The browser microphone is used for analysis and is not intentionally routed straight back to the speakers, reducing feedback risk.

Read [`PRIVACY.md`](./COSMOS_MUSIC_SUITE/PRIVACY.md) and [`SECURITY.md`](./COSMOS_MUSIC_SUITE/SECURITY.md).

---

# 🧑‍🏫 Education and contribution

Teacher guide: [`TEACHER_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md)  
Student guide: [`STUDENT_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md)  
Contributing: [`CONTRIBUTING.md`](./COSMOS_MUSIC_SUITE/CONTRIBUTING.md)

Good extensions include new instruments, MIDI/OSC/DAW bridges, synthesis voices, sensor mappings, accessibility controls, visualization modes, wearable bridges, recording/export, classroom experiments, and new state-vector research tests.

---

# 📚 Citation and license

If your work depends on the CST research lineage, cite the appropriate primary source and DOI. Software citation metadata is in [`COSMOS_MUSIC_SUITE/CITATION.cff`](./COSMOS_MUSIC_SUITE/CITATION.cff).

**License: GPL-3.0-only.** See [`LICENSE`](./LICENSE).

---

## 🌌 One sentence

**Sing. Move. Add a beat. Let the machine listen, remember a little, and play back with you.**

Copyright © 2026 Cory Shane Davis.
