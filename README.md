# 🎵 COSMOS Music + Adaptive Audio Research

**Turn your voice, phone movement, and optional heartbeat timing into a live adaptive band.**

Created by **Cory Shane Davis / NavisWORLD**.

> 🚀 **If you only want to use the working music app, go here first:** [`COSMOS_MUSIC_SUITE/`](./COSMOS_MUSIC_SUITE/)
>
> 📄 Foundational CST research deposit: **[DOI 10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**

---

## 🧸 Explain it like I am 5

You make a sound.

Your phone listens to the sound, watches how you move it, and can optionally follow a heartbeat-like rhythm.

Then the computer says:

**“Cool. I am going to play music with you.”**

That is the basic idea.

It is not a prerecorded backing track. The software continuously measures simple performance signals and uses them to change the music it creates.

Think of it like giving your phone three ears:

- 🎤 one ear listens to your **voice**
- 📱 one ear feels how you **move the phone**
- ❤️ one optional ear follows **pulse timing**

Those signals become controls for harmony, rhythm, melody, density, filtering, and musical energy.

---

# 👋 New here? Pick what you want to do

| I want to... | Start here |
|---|---|
| **Just play with the instrument** | [`COSMOS_MUSIC_SUITE/app/`](./COSMOS_MUSIC_SUITE/app/) |
| **Install it on iPhone or Android** | [`MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md) |
| **Understand how it works** | [`ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md) |
| **Use the Python tools** | [`API_AND_PYTHON.md`](./COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md) |
| **Teach this in a class** | [`TEACHER_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md) |
| **Learn it as a student** | [`STUDENT_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md) |
| **See the research / DOI / lineage** | [`RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md) |
| **Understand every folder in this repo** | [`PROJECT_MAP.md`](./PROJECT_MAP.md) |
| **Look through the old experiments** | [`archive/README.md`](./archive/README.md) |

If you are confused, **ignore the archive** and stay inside `COSMOS_MUSIC_SUITE/`.

---

# 🎛️ What can the current app do?

The maintained application has **three modes**.

## 1. 🎤 Play Along

You sing or make musical sounds.

The app estimates things such as:

- pitch
- note confidence
- loudness / energy
- phrase movement
- likely tonal center

Then it creates accompaniment around you.

**Kid version:** you sing, the band tries to follow.

---

## 2. 🪄 Conductor

Your **voice + phone movement** shape the band together.

Move, tilt, rotate, sing louder, sing softer, change notes, and the arrangement responds.

**Kid version:** wave the phone around like a magic wand and conduct the music.

---

## 3. ❤️ Bio

The music can also react to pulse timing from:

- manual heartbeat tapping
- approximate camera-based optical pulse timing
- an optional native heart-rate bridge

**Kid version:** your beat can help become the music's beat.

> ⚠️ Camera pulse sensing here is for expressive music control. It is **not a medical heart-rate monitor**.

---

# 🧠 What is the “12D” part?

Inside the music engine, performance is summarized into **12 control channels**:

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

You can think of these as **12 knobs the body is turning automatically**.

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

The 12-channel state is an **operational music-control representation inspired by CST / dyn12**.

It should not be described as medical proof, proof of consciousness, or proof of literal higher-dimensional physics.

---

# ⚡ Fastest way to run it on a computer

You need **Node.js** and **Python** installed.

```bash
git clone https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine.git
cd infinite-adaptive-audio-12d-universe-engine/COSMOS_MUSIC_SUITE
npm install
npm run build
npm run serve
```

Then open the local address shown by the server.

Inside the app:

1. tap **Enable Audio**
2. tap **Mic / Voice**
3. optionally tap **Motion**
4. optionally use **Camera PPG** or **Tap Heartbeat**
5. choose **Play Along**, **Conductor**, or **Bio**
6. tap **Play With Me**

That is the entire basic workflow.

---

# 📱 Phone users

## iPhone

For the easiest path, use the project as a **PWA** served over HTTPS and add it to the Home Screen.

For native iOS packaging, use the Capacitor project and Xcode. Native HealthKit access requires Apple permissions and code signing.

Read: [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md)

## Android

The project supports Capacitor Android packaging and can build a debug APK.

Read: [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md)

---

# 🐍 Python users

There is a separate Python companion package for people who want the underlying state and music tools without the browser UI.

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

Python includes reference tooling for:

- 12-channel performance state
- pitch estimation
- tonal / key inference
- harmony helpers
- pulse interval handling
- MIDI generation
- local serving

Read: [`API_AND_PYTHON.md`](./COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md)

---

# 🧑‍🏫 Teachers and students

You do **not** need to understand the whole repository to teach it.

### Teacher path

1. [`TEACHER_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md)
2. [`STUDENT_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md)
3. [`ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md)

### Student path

1. open the app
2. experiment with voice
3. add motion
4. add pulse timing
5. observe the 12-state display
6. inspect the code only after you understand what the controls are doing

The goal is to make this teachable as **music technology, signal processing, creative coding, sensor interaction, and adaptive-system design**.

---

# 🗺️ Repository map

```text
.
├── README.md                  # you are here
├── PROJECT_MAP.md             # complete repo guide
├── LICENSE
├── COSMOS_MUSIC_SUITE/        # ✅ CURRENT WORKING PRODUCT
│   ├── app/                   # web / PWA / mobile runtime
│   │   ├── index.html         # unified app UI
│   │   ├── src/
│   │   │   ├── app.js         # controller + UI wiring
│   │   │   ├── audio.js       # synthesis / adaptive band
│   │   │   ├── sensors.js     # voice / motion / pulse inputs
│   │   │   └── state.js       # 12-channel state model
│   │   ├── manifest.webmanifest
│   │   └── sw.js
│   ├── python/                # Python companion package + tests
│   ├── native/                # optional native integration references
│   ├── docs/                  # all maintained documentation
│   ├── scripts/               # build + packaging helpers
│   ├── package.json
│   ├── capacitor.config.ts
│   └── README.md
├── docs/                      # historical research / developer records
└── archive/                   # older experiments and ancestry
```

### The one rule that keeps this repo understandable

**If you want the current product, stay in `COSMOS_MUSIC_SUITE/`.**

Everything else is context, history, research, or ancestry.

---

# 🔬 Research and lineage

Foundational / related project links:

- **CST Zenodo DOI:** https://doi.org/10.5281/zenodo.17574447
- **QC67_cosmo:** https://huggingface.co/phera-ra/QC67_cosmo
- **COSMOS:** https://github.com/NavisWORLD/Cosmos
- **CST theory:** https://github.com/NavisWORLD/The-theory-of-CST
- **12D Hebbian Transformer:** https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

For what each source does and does **not** establish, read:

[`COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md)

Historical validation reports are kept in [`docs/research/`](./docs/research/). They are preserved for traceability, not treated as automatic proof of every later implementation claim.

---

# 🧪 What is current vs. historical?

## Current and maintained

- `COSMOS_MUSIC_SUITE/app/`
- `COSMOS_MUSIC_SUITE/python/`
- `COSMOS_MUSIC_SUITE/native/`
- `COSMOS_MUSIC_SUITE/docs/`
- `.github/workflows/` related to the music suite

## Historical / exploratory

- `archive/`
- repository-level `docs/research/`
- repository-level `docs/developer/`

Historical folders are intentionally kept so the project's evolution can be studied without confusing old experiments with the current product.

---

# 🔐 Privacy and safety

The maintained app is designed around **local-first sensor processing**.

Do not commit:

- API keys
- passwords
- Apple signing certificates
- private recordings
- personal health records
- private biometric data

The browser microphone is used for analysis and is **not intentionally routed directly back to the speakers**, reducing feedback risk.

Read [`PRIVACY.md`](./COSMOS_MUSIC_SUITE/PRIVACY.md) and [`SECURITY.md`](./COSMOS_MUSIC_SUITE/SECURITY.md).

---

# 🧪 Validate the project

From `COSMOS_MUSIC_SUITE/`:

```bash
npm run build
node --check app/src/audio.js
node --check app/src/sensors.js
node --check app/src/state.js
node --check app/src/app.js
python -m compileall python/src
PYTHONPATH=python/src pytest -q python/tests
node scripts/check-html.mjs
```

GitHub Actions also validates the maintained suite.

---

# 🤝 Build on it

This repository is meant to be **used**, not just looked at.

Good ways to extend it include:

- new instruments
- MIDI output
- DAW bridges
- new synthesis voices
- new sensor mappings
- accessibility controls
- visualization modes
- lesson plans
- native Apple Watch / HealthKit bridges
- Android sensor integrations
- research experiments using the state vector

Start with [`CONTRIBUTING.md`](./COSMOS_MUSIC_SUITE/CONTRIBUTING.md).

---

# 📚 Citation

If your work depends on the CST research lineage, cite the relevant research source and use the DOI where appropriate:

**10.5281/zenodo.17574447**

The software suite also includes [`CITATION.cff`](./COSMOS_MUSIC_SUITE/CITATION.cff) for software citation metadata.

---

# 📜 License

**GPL-3.0-only**.

See [`LICENSE`](./LICENSE) and the suite's contribution, governance, privacy, security, and open-source agreement files.

---

## 🌌 The whole project in one sentence

**Sing. Move. Add a beat. Let the machine listen, remember a little, and play back with you.**

Copyright © 2026 Cory Shane Davis.
