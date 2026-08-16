# 🎵 COSMOS Music - Adaptive Bio Instrument Suite

**A local-first, source-available music system that listens to your voice, observes how you move your phone, can optionally follow pulse timing, and turns those signals into adaptive music.**

Created by **Cory Shane Davis / NavisWORLD**.

> Historical binaries: **COSMOS Music v1.1.0**  
> Foundational CST research deposit: **DOI 10.5281/zenodo.17574447**  
> Current main-branch package generation: **1.2.0**

## 🛡️ Current rights boundary

Copyright © 2026 Cory Shane Davis / NavisWORLD.

Newly authored or materially revised Cory-owned material distributed under the current `LICENSE` on or after **2026-08-16** is governed by the **Cory Davis Audio / Neural Instrument Research Source Rights Reservation v1.0**, unless a file expressly states different terms.

Public visibility is not a general reuse license for covered current material. Commercial products, paid deployments, OEM integrations, hosted services, commercial AI/ML development, commercial redistribution, and derivative implementations based on protected expression require separate written authorization where the current `LICENSE` states so.

The published **COSMOS Music v1.1.0** generation was distributed under **GPL-3.0-only**. Valid GPL rights in those historical copies remain intact and are not revoked.

Read these before reuse or distribution:

- [`LICENSE`](./LICENSE)
- [`LICENSE_HISTORY.md`](./LICENSE_HISTORY.md)
- [`COMMERCIAL_RIGHTS.md`](./COMMERCIAL_RIGHTS.md)
- [`../LICENSE_HISTORY.md`](../LICENSE_HISTORY.md) for the repository-wide chronology

Copyright protects original expression, not abstract ideas, systems, algorithms, mathematical principles, or methods by themselves. Third-party and contributor-owned material remains subject to its own licenses and rights.

## ⬇️ Historical v1.1.0 binaries

The existing v1.1.0 release remains available in GitHub release history under its historical GPL-3.0-only terms. Published targets included Windows, macOS, Android, iPhone PWA, iOS developer project, and iOS Simulator packages.

Current main-branch licensing does not retroactively alter those release rights.

## 🧸 Tiny-human explanation

You sing. You move your phone. Maybe you tap a heartbeat. The app notices those things and makes music that changes with you.

## 🎛️ Three modes

### Play Along
The app observes musical features in your voice and creates accompaniment around pitch, confidence, energy, phrase movement, and tonal context.

### Conductor
Voice and phone motion control the arrangement together. Acceleration, tilt, rotation, vocal energy, and pitch can influence rhythm, density, filtering, harmony, and timbre.

### Bio
Pulse timing can become a performance control through manual beat taps, approximate camera PPG, or an optional native heart event.

Camera PPG is an expressive approximation for music control, **not a medical measurement**.

## 🚀 Run current source

```bash
npm install
npm run build
npm run serve
```

Then open the local address shown by the server.

Building, inspecting, or running current source does not expand the rights granted by `LICENSE`.

## 🧩 Maintained structure

```text
COSMOS_MUSIC_SUITE/
├── app/                   # authoritative web / PWA runtime
├── desktop/               # Electron desktop wrapper
├── python/                # Python companion package + tests
├── native/                # native integration references
├── docs/                  # maintained guides
├── scripts/               # build and packaging helpers
├── LICENSE
├── LICENSE_HISTORY.md
├── COMMERCIAL_RIGHTS.md
├── NOTICE
├── package.json
└── README.md
```

The authoritative current app is `app/`. Repository-level `archive/` content is historical lineage and is not required to run the current product.

## 🧠 The 12-channel performance state

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

The channels are voice energy, pitch lock, phrase flux, tempo coherence, motion energy, X tilt, Y tilt, rotation flux, pulse phase, pulse stability, harmonic tension, and short-term synaptic memory.

The state model is inspired by CST / dyn12, but here it is an operational music-control system. It is not presented as medical proof, consciousness proof, or literal higher-dimensional physics proof.

## 🐍 Python companion

```bash
cd python
python -m pip install -e .
```

The companion package includes state tools, pitch estimation, tonal/key inference, harmony helpers, pulse timing, MIDI generation, and local serving.

## 📱 Native/mobile packaging

Capacitor configuration is included for Android and iOS development. Native installation on a physical iPhone requires Apple signing/provisioning, and private publisher credentials are excluded from the public repository.

## ✅ Validation

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

Historical v1.1.0 build results remain part of the provenance record. They do not automatically certify later current-branch revisions.

## 🔬 Research lineage and claim boundaries

Related project sources include the CST DOI, QC67_cosmo, COSMOS, CST theory, and the 12D Hebbian Transformer lineage. Read `docs/RESEARCH_LINKS.md` before making scientific claims based on this software.

## 🔐 Privacy and security

Do not commit private recordings, personal health records, API keys, passwords, signing certificates, provisioning profiles, or other people's biometric data.

The software license does not grant rights in a person's voice, performance, biometric or physiological data.

## 🤝 Contributions

Technical feedback, bug reports, and reproducible test results are welcome. Current protected-generation copyrightable contributions require an appropriate written rights agreement before incorporation. Read [`CONTRIBUTING.md`](./CONTRIBUTING.md).

The historical GPL contribution policy is preserved in [`OPEN_SOURCE_AGREEMENT.md`](./OPEN_SOURCE_AGREEMENT.md) as a record of the previous generation, not as the current contribution agreement.

## 📚 Citation and license

Citation metadata is in [`CITATION.cff`](./CITATION.cff). Citation does not grant rights beyond the license governing the exact version or copy used.

**Current main-branch rights:** see `LICENSE`.  
**Historical v1.1.0 rights:** GPL-3.0-only, preserved in `LICENSE_HISTORY.md`.

---

**Your body gives the signals; COSMOS Music turns them into a band that responds.**

Copyright © 2026 Cory Shane Davis.
