# 🎵 COSMOS Music + Adaptive Audio Research

**Turn voice, phone movement, optional pulse timing, and adaptive state into a live responsive musical system.**

Created by **Cory Shane Davis / NavisWORLD**.

📄 Foundational CST research deposit: **DOI 10.5281/zenodo.17574447**

## 🛡️ Rights and provenance first

Copyright © 2026 Cory Shane Davis / NavisWORLD.

**Current main-branch rights boundary:** newly authored or materially revised Cory-owned material distributed under the current `LICENSE` on or after **2026-08-16** is governed by the **Cory Davis Audio / Neural Instrument Research Source Rights Reservation v1.0**, unless a file expressly states different terms.

Public visibility is not a general reuse license for that covered current material. Commercial products, hosted services, OEM integration, paid deployments, commercial AI/ML development, commercial redistribution, derivative implementations based on protected expression, and other commercial exploitation require separate written authorization where the current `LICENSE` states so.

**Historical open-source boundary:** the published **COSMOS Music v1.1.0** release and repository state through commit `eb1d84d500bd5bb0a2c3128b457b8a03f1f3c32f` were distributed under **GPL-3.0-only**. Valid GPL rights for those historical copies remain intact. They are not revoked or rewritten.

See:

- [`LICENSE`](LICENSE) - current prospective rights reservation
- [`LICENSE_HISTORY.md`](LICENSE_HISTORY.md) - exact historical licensing boundary
- [`COMMERCIAL_RIGHTS.md`](COMMERCIAL_RIGHTS.md) - commercial licensing path
- [`CORY_DAVIS_IP_AND_ACCESS_NOTICE.md`](CORY_DAVIS_IP_AND_ACCESS_NOTICE.md) - IP/access notice

Copyright protects original expression, not abstract ideas, systems, algorithms, mathematical principles, scientific laws, or methods by themselves. Third-party and contributor-owned code, libraries, frameworks, SDKs, samples, recordings, datasets, models, and other materials remain under their own licenses and rights.

## ⬇️ Historical COSMOS Music v1.1.0 release

The existing **COSMOS Music v1.1.0** binaries remain available from the GitHub release history. That release keeps its historical GPL-3.0-only terms.

Published targets include Windows x64, macOS Apple Silicon, macOS Intel, Android, iPhone PWA, iOS developer project, and iOS Simulator packages. Publisher signing credentials are intentionally not stored in this public repository.

If you need the exact historical source and rights, use the release/tag or the pre-boundary commit recorded in `LICENSE_HISTORY.md` rather than assuming current-main terms apply retroactively.

## 🧸 What it does

You sing or make musical sounds. Your device can also observe movement and optional pulse-like timing. The software continuously maps those signals into musical control state and adapts generated music around the performance.

Three primary modes are maintained:

- **Play Along** - voice-driven musical accompaniment
- **Conductor** - voice and phone motion reshape arrangement, rhythm, harmony, density and timbre
- **Bio** - optional pulse timing becomes an expressive music-control signal

Camera PPG is an expressive approximation for music control, **not a medical measurement**.

## 🧠 12-channel performance state

The maintained engine summarizes performance into 12 operational control channels:

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

The state is an operational music-control representation inspired by CST / dyn12. It is not presented as medical proof, consciousness proof, or literal higher-dimensional physics proof.

## 👋 Start here

| Goal | Path |
|---|---|
| Explore maintained source | [`COSMOS_MUSIC_SUITE/`](./COSMOS_MUSIC_SUITE/) |
| Understand current rights | [`LICENSE`](./LICENSE) and [`LICENSE_HISTORY.md`](./LICENSE_HISTORY.md) |
| Commercial licensing | [`COMMERCIAL_RIGHTS.md`](./COMMERCIAL_RIGHTS.md) |
| Mobile installation | [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md) |
| Architecture | [`COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md) |
| Python/API | [`COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md`](./COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md) |
| Teacher guide | [`COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md) |
| Student guide | [`COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md) |
| Research lineage | [`COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md) |
| Older experiments | [`archive/`](./archive/) |

## ⚡ Build current source

```bash
git clone https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine.git
cd infinite-adaptive-audio-12d-universe-engine/COSMOS_MUSIC_SUITE
npm install
npm run build
npm run serve
```

Building or viewing current source does not expand the rights granted by the current `LICENSE`.

## 🐍 Python companion

```bash
cd COSMOS_MUSIC_SUITE/python
python -m pip install -e .
```

The Python package includes reference tooling for the 12-channel state, pitch estimation, tonal/key inference, harmony helpers, pulse timing, MIDI generation, and local serving.

## 🗺️ Repository map

```text
.
├── README.md
├── LICENSE
├── LICENSE_HISTORY.md
├── COMMERCIAL_RIGHTS.md
├── CORY_DAVIS_IP_AND_ACCESS_NOTICE.md
├── COSMOS_MUSIC_SUITE/        # maintained current product/source
│   ├── app/
│   ├── desktop/
│   ├── python/
│   ├── native/
│   ├── docs/
│   ├── scripts/
│   ├── LICENSE
│   ├── LICENSE_HISTORY.md
│   ├── COMMERCIAL_RIGHTS.md
│   └── package.json
├── docs/                      # research / developer records
└── archive/                   # older experiments and ancestry
```

## 🧪 Validation

The maintained project includes build and validation commands for web runtime, Python source/tests, and packaging workflows. Historical release-validation records remain part of the provenance chain, but a historical successful build is not a blanket claim about every later revision.

## 🔬 Research lineage

Related primary project sources include:

- CST Zenodo DOI: `10.5281/zenodo.17574447`
- QC67_cosmo
- COSMOS
- CST theory
- 12D Hebbian Transformer lineage

Use `COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md` for claim boundaries and primary-source mapping.

## 🔐 Privacy and safety

The maintained app is designed around local-first sensor processing. Do not commit API keys, passwords, signing certificates, private recordings, personal health records, or private biometric data.

Software rights do not grant rights in a person's voice, performance, biometric or physiological data.

## 🤝 Contributions

Current contribution rules differ from the historical GPL generation. Read [`COSMOS_MUSIC_SUITE/CONTRIBUTING.md`](./COSMOS_MUSIC_SUITE/CONTRIBUTING.md) and the current license before submitting copyrightable material.

The prior GPL contribution policy is preserved as a historical record rather than silently rewritten.

## 📚 Citation

If work depends on the CST research lineage, cite the appropriate primary source and DOI. Citation does not itself grant reuse or commercial rights beyond the license governing the exact material used.

---

## 🌌 One sentence

**Sing. Move. Add a beat. Let the machine listen, remember a little, and play back with you.**

Copyright © 2026 Cory Shane Davis.
