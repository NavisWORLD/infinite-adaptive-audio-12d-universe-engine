# 🎵 COSMOS Music — Adaptive Bio Instrument Suite

**A local-first music system that listens to your voice, feels how you move your phone, can optionally follow pulse timing, and turns those signals into adaptive music.**

Created by **Cory Shane Davis / NavisWORLD**.

> 📄 Foundational CST research deposit: **[DOI 10.5281/zenodo.17574447](https://doi.org/10.5281/zenodo.17574447)**
>
> 🧭 Lost? Go back to the [repository README](../README.md) or the [Project Map](../PROJECT_MAP.md).

---

## 🧸 Tiny-human explanation

You sing.

You move your phone.

Maybe you tap your heartbeat.

The app notices those things and makes music that changes with you.

That is the whole idea.

---

# 🚀 I just want to use it

You do **not** need to understand the code first.

### Run it locally

From this folder:

```bash
npm install
npm run build
npm run serve
```

Then open the address shown in your terminal.

### Inside the app

1. tap **Enable Audio**
2. tap **Mic / Voice**
3. optionally tap **Motion**
4. optionally use **Camera PPG** or **Tap Heartbeat**
5. choose a mode: **Play Along**, **Conductor**, or **Bio**
6. tap **Play With Me**

If that is all you wanted, you can stop reading here and make music. 💚

---

# 🎛️ The three modes

## 🎤 Play Along

The app listens to musical features in your voice and creates accompaniment around them.

It looks at things such as pitch, note confidence, energy, phrase movement, and tonal context.

**Simple version:** sing something and the band tries to follow you.

---

## 🪄 Conductor

Voice and phone motion control the music together.

Acceleration, tilt, and rotation can influence musical density, filtering, rhythm, harmony, and timbre.

**Simple version:** your phone becomes a conducting wand.

---

## ❤️ Bio

Pulse timing can also become a performance control.

The app can use:

- heartbeat taps
- approximate camera PPG timing
- a native heart event injected by a mobile bridge

**Simple version:** your beat can help drive the music's beat.

> Camera PPG in this project is an expressive approximation for music control, **not a medical measurement**.

---

# 👀 What should I open?

| You are... | Open this |
|---|---|
| **A musician / curious user** | [`app/`](./app/) |
| **A web developer** | [`app/src/`](./app/src/) |
| **A Python developer** | [`python/`](./python/) |
| **Building for iPhone / Android** | [`docs/MOBILE_INSTALL.md`](./docs/MOBILE_INSTALL.md) |
| **Trying to understand the engine** | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) |
| **A teacher** | [`docs/TEACHER_GUIDE.md`](./docs/TEACHER_GUIDE.md) |
| **A student** | [`docs/STUDENT_GUIDE.md`](./docs/STUDENT_GUIDE.md) |
| **A research reader** | [`docs/RESEARCH_LINKS.md`](./docs/RESEARCH_LINKS.md) |
| **A contributor** | [`CONTRIBUTING.md`](./CONTRIBUTING.md) |

---

# 🧩 What every folder does

```text
COSMOS_MUSIC_SUITE/
├── app/                   # the actual web / PWA / Capacitor runtime
│   ├── index.html         # one unified app screen
│   ├── src/
│   │   ├── app.js         # connects UI, sensors, state and music engine
│   │   ├── audio.js       # synthesis + adaptive accompaniment
│   │   ├── sensors.js     # microphone, motion and pulse inputs
│   │   └── state.js       # 12-channel performance state
│   ├── icons/             # install icons
│   ├── manifest.webmanifest
│   └── sw.js              # offline/PWA cache
├── python/                # Python reference package + tests
├── native/                # optional native bridge references
├── docs/                  # every maintained guide
├── scripts/               # build and native packaging helpers
├── package.json           # JavaScript dependencies + commands
├── capacitor.config.ts    # native mobile wrapper config
├── CITATION.cff           # software citation metadata
├── LICENSE
└── README.md              # you are here
```

### Important

The **authoritative current app is `app/`**.

You do not need anything in the repository-level archive to run this product.

---

# 🧠 How the engine thinks about a performance

The app turns sensor information into a 12-channel performance state.

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

1. **voice energy** — how much vocal energy is present
2. **pitch lock** — how confident the pitch estimate is
3. **phrase flux** — how much the vocal phrase is changing
4. **tempo coherence** — stability of timing information
5. **motion energy** — how strongly the phone is moving
6. **X tilt** — horizontal orientation control
7. **Y tilt** — vertical orientation control
8. **rotation flux** — rotational movement
9. **pulse phase** — where the current pulse is in its cycle
10. **pulse stability** — consistency of recent pulse timing
11. **harmonic tension** — how strongly the current note pushes against the inferred key
12. **short-term synaptic memory** — a decaying memory of recent state relationships

Think of those as **12 invisible knobs controlled by the performance**.

The state model is inspired by CST / dyn12, but in this software it is an **operational music-control system**. It is not presented as medical proof, consciousness proof, or literal higher-dimensional physics proof.

---

# 🎤 Voice input

The microphone is used to extract performance features.

The maintained path is intentionally **analysis-first**: microphone audio is not intentionally routed straight back to the speaker, which avoids turning the phone into a feedback machine.

The voice layer can provide:

- signal energy
- pitch estimate
- pitch confidence
- pitch-class history
- phrase movement
- rough tonal/key inference

---

# 📱 Motion input

When supported and permitted by the device/browser, motion signals include:

- acceleration
- orientation / tilt
- rotation rate

They become expressive music controls rather than being displayed only as sensor telemetry.

---

# ❤️ Pulse input

There are three paths:

### Tap heartbeat

No camera or health integration required. Repeated taps estimate timing and stability.

### Camera PPG

The camera samples optical intensity changes that can approximate pulse timing under good conditions.

This is **not a medical device**.

### Native bridge

A native wrapper can dispatch a heart event into the app:

```js
window.dispatchEvent(new CustomEvent('cosmos-heart', {
  detail: { bpm: 72, quality: 1, source: 'native' }
}));
```

See [`native/`](./native/) and [`docs/MOBILE_INSTALL.md`](./docs/MOBILE_INSTALL.md).

---

# 🐍 Python companion

The browser app is not the only usable part of the project.

Install the Python package:

```bash
cd python
python -m pip install -e .
```

### Calculate a state

```bash
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .25 --bpm 72 --pulse-stability .8
```

### Create a MIDI file

```bash
cosmos-music midi --key C --mode major --bpm 72 --out demo.mid
```

### Serve the app locally

```bash
cosmos-music serve --app ../app --port 8080
```

Python includes reusable reference code for state processing, pitch, harmony, pulse timing, MIDI, and local serving.

Read [`docs/API_AND_PYTHON.md`](./docs/API_AND_PYTHON.md).

---

# 📱 Mobile builds

## PWA

The lowest-friction mobile version is the installable web app.

Serve `app/` over HTTPS, open it on the phone, and add/install it from the browser.

## Android

```bash
npm install
npm run native:android
cd android
./gradlew assembleDebug
```

## iPhone / iOS

```bash
npm install
npm run native:ios
```

Open the generated iOS project in Xcode.

Native installation on a physical iPhone requires Apple code signing/provisioning. Those credentials are intentionally not stored in this open-source repository.

Full guide: [`docs/MOBILE_INSTALL.md`](./docs/MOBILE_INSTALL.md)

---

# 🧑‍🏫 Education

This repository ships with a student path and a teacher path.

### Student

[`docs/STUDENT_GUIDE.md`](./docs/STUDENT_GUIDE.md)

Use it to learn the system by experimenting first and reading implementation details second.

### Teacher

[`docs/TEACHER_GUIDE.md`](./docs/TEACHER_GUIDE.md)

Use it for lesson sequencing, demonstrations, discussion, assessment, and claim discipline.

### Documentation home

[`docs/README.md`](./docs/README.md)

---

# 🔬 Research lineage and claim boundaries

Related sources:

- CST DOI: https://doi.org/10.5281/zenodo.17574447
- QC67_cosmo: https://huggingface.co/phera-ra/QC67_cosmo
- COSMOS: https://github.com/NavisWORLD/Cosmos
- CST theory: https://github.com/NavisWORLD/The-theory-of-CST
- 12D Hebbian Transformer: https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-

Read [`docs/RESEARCH_LINKS.md`](./docs/RESEARCH_LINKS.md) before making scientific claims based on this software.

---

# ✅ Validate everything

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

CI runs the maintained checks on GitHub as well.

---

# 🔐 Privacy / security rules

Do not commit:

- private recordings
- personal health records
- API keys
- passwords
- signing certificates
- provisioning profiles
- other people's biometric data

Read:

- [`PRIVACY.md`](./PRIVACY.md)
- [`SECURITY.md`](./SECURITY.md)

---

# 🤝 Want to build something with it?

Please do.

Possible extensions include:

- guitar / piano / bass specialty modes
- DAW integration
- MIDI input/output
- new synth engines
- new motion mappings
- accessibility controls
- Apple Watch / HealthKit bridges
- Android wearable bridges
- OSC / MIDI bridges
- recording/export
- classroom experiments
- additional visualization layers

Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

# 📚 Citation

Software citation metadata is in [`CITATION.cff`](./CITATION.cff).

For the CST research lineage, use the appropriate primary source and DOI where relevant:

**10.5281/zenodo.17574447**

---

# 📜 Open source

Licensed **GPL-3.0-only**.

Also see:

- [`OPEN_SOURCE_AGREEMENT.md`](./OPEN_SOURCE_AGREEMENT.md)
- [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- [`GOVERNANCE.md`](./GOVERNANCE.md)
- [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)

---

## 🌌 One-sentence version

**Your body gives the signals; COSMOS Music turns them into a band that responds.**

Copyright © 2026 Cory Shane Davis.
