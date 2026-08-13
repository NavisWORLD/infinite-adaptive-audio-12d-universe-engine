# 🗺️ COSMOS Music Repository Map

This page answers one question:

**“Where do I go?”**

If you remember only one rule, remember this:

> ✅ **`COSMOS_MUSIC_SUITE/` = the current working product.**
>
> 📚 `docs/` = historical research / developer records.
>
> 🗃️ `archive/` = older experiments and ancestry.

---

## 🧸 Explain the repo like I am 5

Imagine this repository is a house.

- `COSMOS_MUSIC_SUITE/` is the **room where the new instrument lives**.
- `docs/` is the **bookshelf**.
- `archive/` is the **attic with old inventions**.
- `.github/` is the **robot that checks whether things still work**.

If you came here to make music, go to the instrument room first. 💚

---

# 🏠 Top level

```text
.
├── README.md              # the front door / main explanation
├── PROJECT_MAP.md         # you are here
├── LICENSE                # open-source license
├── COSMOS_MUSIC_SUITE/    # ✅ CURRENT PRODUCT
├── docs/                  # research + developer history
├── archive/               # old experiments + project ancestry
└── .github/               # CI / build automation
```

---

# ✅ 1. Current product: `COSMOS_MUSIC_SUITE/`

This is the maintained open-source adaptive music system.

```text
COSMOS_MUSIC_SUITE/
├── README.md
├── app/
│   ├── index.html
│   ├── src/
│   │   ├── app.js
│   │   ├── audio.js
│   │   ├── sensors.js
│   │   └── state.js
│   ├── icons/
│   ├── manifest.webmanifest
│   └── sw.js
├── python/
├── native/
├── docs/
├── scripts/
├── package.json
├── capacitor.config.ts
├── CITATION.cff
├── PRIVACY.md
├── SECURITY.md
├── CONTRIBUTING.md
└── LICENSE
```

### What each part means

- **`app/`** — the actual web/PWA/mobile runtime
- **`app/src/audio.js`** — music generation and synthesis
- **`app/src/sensors.js`** — voice, motion and pulse inputs
- **`app/src/state.js`** — the 12-channel performance state
- **`app/src/app.js`** — connects the UI, sensors, state and music engine
- **`python/`** — Python tools and tests
- **`native/`** — optional native mobile bridges/references
- **`docs/`** — maintained instructions for users, developers, students, teachers and researchers
- **`scripts/`** — build and packaging helpers

### If you are a normal user

Start at [`COSMOS_MUSIC_SUITE/README.md`](./COSMOS_MUSIC_SUITE/README.md).

### If you are a developer

Start at [`COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md).

### If you want phone installation

Start at [`COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md).

---

# 📚 2. Repository documentation: `docs/`

This is **not the main application folder**.

It holds older research and developer records that are useful for traceability.

```text
docs/
├── README.md
├── research/      # historical validation / analysis reports
└── developer/     # older integration and engineering notes
```

Read these when you want background, historical validation work, or old implementation context.

Do not start here if you only want to use the current music app.

---

# 🗃️ 3. Archive: `archive/`

This is where older experiments were moved so they stay available without confusing new users.

```text
archive/
├── README.md
├── legacy-demos/
├── legacy-music/
├── experiments/
└── project-notes/
```

### `legacy-demos/`
Earlier simulation and visualization projects.

### `legacy-music/`
Older music-project ancestry that came before the maintained suite.

### `experiments/`
Exploratory AI and consciousness-named tests. Historical names are preserved for provenance; they should not be read as proof of consciousness.

### `project-notes/`
Superseded PR prompts, implementation instructions and working notes.

The archive is useful when studying **how the project evolved**.

---

# 🤖 4. Automation: `.github/`

GitHub Actions checks and packages the maintained COSMOS Music Suite.

Current automation covers areas such as:

- validation
- PWA/web build
- JavaScript syntax checks
- Python compilation/tests
- Android packaging
- iOS project packaging
- web deployment workflows

This folder is mostly for developers and CI.

---

# 🧭 Pick your path

| You are... | Go here |
|---|---|
| **Just curious / want to play** | [`README.md`](./README.md) → [`COSMOS_MUSIC_SUITE/`](./COSMOS_MUSIC_SUITE/) |
| **Musician** | [`COSMOS_MUSIC_SUITE/README.md`](./COSMOS_MUSIC_SUITE/README.md) |
| **iPhone / Android user** | [`MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md) |
| **Web developer** | [`app/src/`](./COSMOS_MUSIC_SUITE/app/src/) |
| **Python developer** | [`API_AND_PYTHON.md`](./COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md) |
| **Teacher** | [`TEACHER_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/TEACHER_GUIDE.md) |
| **Student** | [`STUDENT_GUIDE.md`](./COSMOS_MUSIC_SUITE/docs/STUDENT_GUIDE.md) |
| **Research reader** | [`RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md) |
| **Historian / wants ancestry** | [`archive/README.md`](./archive/README.md) |

---

# 📖 Best reading order

For most people:

1. [`README.md`](./README.md)
2. [`COSMOS_MUSIC_SUITE/README.md`](./COSMOS_MUSIC_SUITE/README.md)
3. use the app
4. read the specific guide for your role

For developers:

1. [`README.md`](./README.md)
2. [`COSMOS_MUSIC_SUITE/README.md`](./COSMOS_MUSIC_SUITE/README.md)
3. [`ARCHITECTURE.md`](./COSMOS_MUSIC_SUITE/docs/ARCHITECTURE.md)
4. [`app/src/`](./COSMOS_MUSIC_SUITE/app/src/)
5. [`API_AND_PYTHON.md`](./COSMOS_MUSIC_SUITE/docs/API_AND_PYTHON.md)
6. [`MOBILE_INSTALL.md`](./COSMOS_MUSIC_SUITE/docs/MOBILE_INSTALL.md)

For research history:

1. [`RESEARCH_LINKS.md`](./COSMOS_MUSIC_SUITE/docs/RESEARCH_LINKS.md)
2. repository [`docs/research/`](./docs/research/)
3. [`archive/`](./archive/)

---

## 🌌 Zero-confusion rule

**Current product first. Documentation second. History third.**

That is how this repository is meant to be read.
