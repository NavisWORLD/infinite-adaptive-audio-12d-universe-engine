# 📚 COSMOS Music Documentation

This is the maintained documentation home for the working COSMOS Music Suite.

## 🧸 Tiny explanation

Pick the instruction book that matches what you want to do. You do not need to read the whole repository.

## 🧭 Pick your path

| Goal | Start here |
|---|---|
| Understand the engine | [`ARCHITECTURE.md`](./ARCHITECTURE.md) |
| Install on iPhone / Android | [`MOBILE_INSTALL.md`](./MOBILE_INSTALL.md) |
| Use Python / local API tools | [`API_AND_PYTHON.md`](./API_AND_PYTHON.md) |
| Use the Synaptic state in another programming language | [`../bindings/README.md`](../bindings/README.md) |
| Check language-by-language compatibility | [`../bindings/COMPATIBILITY_MATRIX.md`](../bindings/COMPATIBILITY_MATRIX.md) |
| Learn as a student | [`STUDENT_GUIDE.md`](./STUDENT_GUIDE.md) |
| Teach the project | [`TEACHER_GUIDE.md`](./TEACHER_GUIDE.md) |
| Check DOI / research lineage | [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md) |

## 🌐 Cross-language developer path

Synaptic ABI v1 provides tested native reference SDKs for Python, C, C++17+, Rust, JavaScript, and TypeScript. Other ecosystems connect through the stable C ABI or the versioned JSON wire contract.

Read in this order:

1. [`../bindings/README.md`](../bindings/README.md)
2. [`../bindings/SPEC.md`](../bindings/SPEC.md)
3. [`../bindings/COMPATIBILITY_MATRIX.md`](../bindings/COMPATIBILITY_MATRIX.md)
4. [`../bindings/conformance/golden-v1.json`](../bindings/conformance/golden-v1.json)

The ABI keeps the 12-channel order and numerical state-transition behavior consistent between languages.

## 🧑‍💻 General developer path

1. [`../README.md`](../README.md)
2. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
3. [`API_AND_PYTHON.md`](./API_AND_PYTHON.md)
4. [`MOBILE_INSTALL.md`](./MOBILE_INSTALL.md)
5. inspect [`../app/src/`](../app/src/)
6. run the validation commands from the suite README

## 🎵 Musician / creator path

Run the app first. Try **Play Along**, **Conductor**, and **Bio**. Read [`ARCHITECTURE.md`](./ARCHITECTURE.md) only when you want the internal signal-flow explanation.

## 🧑‍🏫 Teacher path

1. [`TEACHER_GUIDE.md`](./TEACHER_GUIDE.md)
2. [`STUDENT_GUIDE.md`](./STUDENT_GUIDE.md)
3. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
4. [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md)

## 🔬 Research-reader path

1. [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md)
2. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
3. [`../../docs/research/`](../../docs/research/)
4. [`../../archive/`](../../archive/) only for historical context

The research guide separates implemented software behavior from broader claims that require independent evidence.

## 🆘 Still lost?

- [Main repository README](../../README.md)
- [COSMOS Music Suite README](../README.md)
- [Project Map](../../PROJECT_MAP.md)

> **The working product is in `COSMOS_MUSIC_SUITE/`. The archive is history, not the starting point.**
