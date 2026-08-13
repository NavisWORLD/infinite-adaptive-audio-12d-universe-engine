# COSMOS Synaptic Cross-Language SDKs

Synaptic ABI v1 makes the maintained 12-channel state transition portable without letting each programming language invent different semantics.

Read [`SPEC.md`](./SPEC.md) for the canonical algorithm and [`conformance/golden-v1.json`](./conformance/golden-v1.json) for the reference values.

## Native reference SDKs included

- Python — `python/` — pip-installable package and conformance test
- C — `c/` — stable C ABI, static-library build, conformance test
- C++17 — `cpp/` — header-only API and compile/run smoke test
- Rust — `rust/` — Cargo crate and conformance test
- JavaScript — `javascript/` — zero-dependency ES module and conformance test
- TypeScript — `typescript/` — strict typed implementation and declaration build

## Compatibility beyond those six

The C ABI is the universal native bridge. Ecosystems with C interoperability can call `cosmos_synaptic_step_v1` while preserving the same 12-double state layout. This covers common paths for Objective-C, Swift, Zig, Nim, Julia, R, Fortran, MATLAB/Octave, LuaJIT, Delphi/FreePascal, JVM native bridges, .NET native bridges and many others.

The JSON schema in `protocol/` is the process/service bridge for languages or environments that should not load native code.

That is how this project approaches “every language”: one versioned numerical contract, several independently tested reference SDKs, plus C and JSON surfaces that are broadly interoperable. Additional native convenience SDKs can be added without changing ABI v1.

## ABI v1 state order

1. voice energy
2. pitch lock
3. phrase flux
4. tempo coherence
5. motion energy
6. tilt X
7. tilt Y
8. rotation flux
9. pulse phase
10. pulse stability
11. harmonic tension
12. synaptic memory

## Guarantees

- IEEE-754 binary64 public values
- stable 12-channel order inside ABI v1
- deterministic pure state transition
- cross-language tolerance of `1e-9`
- semantic changes require a new ABI major
- operational signal/music-control semantics only; no medical or consciousness proof claim

`.github/workflows/cosmos-synaptic-bindings.yml` validates the native reference family whenever this layer changes.

Licensed GPL-3.0-only with the rest of the repository.
