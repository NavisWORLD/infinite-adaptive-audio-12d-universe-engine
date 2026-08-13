# 📚 COSMOS Music Documentation

This folder is the **maintained documentation home** for the working COSMOS Music Suite.

If the rest of the repository feels huge, do not panic. You only need the document that matches what you are trying to do.

---

## 🧸 Explain this folder like I am 5

These are the instruction books.

One tells you **how the machine works**.

One tells you **how to put it on a phone**.

One teaches **students**.

One helps **teachers teach it**.

One explains **the Python tools**.

One explains **what research the project comes from**.

That is it. 💚

---

# 🧭 Pick your path

| If you want to... | Read this first |
|---|---|
| **Understand the whole engine** | [`ARCHITECTURE.md`](./ARCHITECTURE.md) |
| **Install on iPhone / Android** | [`MOBILE_INSTALL.md`](./MOBILE_INSTALL.md) |
| **Use Python / local API tools** | [`API_AND_PYTHON.md`](./API_AND_PYTHON.md) |
| **Learn the project as a student** | [`STUDENT_GUIDE.md`](./STUDENT_GUIDE.md) |
| **Teach the project** | [`TEACHER_GUIDE.md`](./TEACHER_GUIDE.md) |
| **Check DOI, citations and research lineage** | [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md) |

---

# 🧑‍💻 Developer path

Read in this order:

1. [`../README.md`](../README.md)
2. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
3. [`API_AND_PYTHON.md`](./API_AND_PYTHON.md)
4. [`MOBILE_INSTALL.md`](./MOBILE_INSTALL.md)
5. open [`../app/src/`](../app/src/)
6. run the validation commands from the suite README

---

# 🎵 Musician / creator path

You probably do **not** need the engineering docs first.

1. run the app
2. try **Play Along**
3. try **Conductor** with motion
4. try **Bio** with heartbeat tapping
5. read [`ARCHITECTURE.md`](./ARCHITECTURE.md) only if you want to understand what the controls are doing internally

---

# 🧑‍🏫 Teacher path

1. [`TEACHER_GUIDE.md`](./TEACHER_GUIDE.md)
2. [`STUDENT_GUIDE.md`](./STUDENT_GUIDE.md)
3. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
4. [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md)

The teacher guide is the classroom map. The student guide is the hands-on path.

---

# 🎓 Student path

1. [`STUDENT_GUIDE.md`](./STUDENT_GUIDE.md)
2. use the actual app
3. observe how voice, motion and pulse timing change the state display
4. inspect the JavaScript modules after experimenting
5. use [`API_AND_PYTHON.md`](./API_AND_PYTHON.md) if you want to build your own tools

---

# 🔬 Research-reader path

1. [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md)
2. [`ARCHITECTURE.md`](./ARCHITECTURE.md)
3. repository-level [`../../docs/research/`](../../docs/research/)
4. repository-level [`../../archive/`](../../archive/) only for historical context

The research-link guide separates **software behavior**, **research lineage**, and **claims that still require independent evidence**.

---

# 📄 What each document is for

### [`ARCHITECTURE.md`](./ARCHITECTURE.md)
Signal flow, subsystem boundaries, sensors, the 12-channel state, and how control values reach the music engine.

### [`MOBILE_INSTALL.md`](./MOBILE_INSTALL.md)
How to use the PWA path, generate Android builds, generate the iOS project, and understand native signing limitations.

### [`API_AND_PYTHON.md`](./API_AND_PYTHON.md)
How to install and use the Python companion package, CLI, MIDI/state tools, and local serving.

### [`STUDENT_GUIDE.md`](./STUDENT_GUIDE.md)
Hands-on exercises designed so a learner can discover the system by using it rather than reading theory first.

### [`TEACHER_GUIDE.md`](./TEACHER_GUIDE.md)
Teaching sequence, facilitation notes, assessment guidance, safety/privacy framing, and claim discipline.

### [`RESEARCH_LINKS.md`](./RESEARCH_LINKS.md)
DOI, related repositories, research lineage, citation paths, and boundaries between implemented behavior and broader theory.

---

# 🆘 Still lost?

Go back to one of these:

- [Main repository README](../../README.md)
- [COSMOS Music Suite README](../README.md)
- [Project Map](../../PROJECT_MAP.md)

And remember the simplest rule:

> **The working product is in `COSMOS_MUSIC_SUITE/`. The archive is history, not the starting point.**
