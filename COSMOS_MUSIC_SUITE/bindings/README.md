# COSMOS Synaptic Cross-Language SDKs

This directory makes the COSMOS 12-channel synaptic state function portable across programming languages and devices.

## Start here

The canonical behavior is **Synaptic ABI v1** in [`SPEC.md`](./SPEC.md). Every SDK implements the same `step(previous_state, input, leak)` rule and is checked against the same golden values in [`conformance/golden-v1.json`](./conformance/golden-v1.json).

## First-class SDKs

| Language/runtime | Location | Form |
|---|---|---|
| Python | [`python/`](./python/) | pip-installable package |
| C | [`c/`](./c/) | stable C ABI + CMake library |
| C++17 | [`cpp/`](./cpp/) | header-only C++ API |
| Rust | [`rust/`](./rust/) | Cargo crate |
| JavaScript | [`javascript/`](./javascript/) | zero-dependency ES module |
| TypeScript | [`typescript/`](./typescript/) | typed ES module |
| Go | [`go/`](./go/) | Go module |
| Java | [`java/`](./java/) | Java 17 source SDK |
| Kotlin | [`kotlin/`](./kotlin/) | native Kotlin/JVM source API; Java SDK is also directly callable |
| C# / .NET | [`dotnet/`](./dotnet/) | .NET library project |
| Swift | [`swift/`](./swift/) | Swift Package Manager library |
| Ruby | [`ruby/`](./ruby/) | Ruby library |
| PHP | [`php/`](./php/) | Composer-compatible PHP library |

## Every other language

Two universal bridges are intentionally part of ABI v1:

1. **C ABI:** almost every compiled or scientific language can call `cosmos_synaptic_step` from the C library through FFI. See [`ffi/README.md`](./ffi/README.md) for Objective-C, Julia, R, LuaJIT, Zig, Nim, Delphi/Pascal, MATLAB/Octave and other adapter patterns.
2. **JSON wire contract:** processes, plugins and network services can exchange the exact same 12-value state without sharing a runtime. See [`protocol/`](./protocol/).

That is the compatibility strategy: one mathematical contract, many native SDKs, and universal fallback surfaces instead of dozens of drifting implementations.

## The 12 state channels

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

## Example

```text
state = zeros(12)
state = synaptic_step(state, {
  voice_energy: 0.8,
  pitch_lock: 0.9,
  motion_energy: 0.4,
  bpm: 72,
  pulse_stability: 0.8,
  dt: 0.05
}, leak=0.82)
```

The output is deterministic for the same binary64 inputs.

## Compatibility promise

- ABI v1 uses IEEE-754 binary64 (`double` / `f64`) semantics.
- State order never changes inside an ABI version.
- New optional inputs may be added compatibly; semantic changes require ABI v2.
- Cross-language conformance tolerance is `1e-9`.
- This is an operational signal/music-control state model. It is not a medical measurement or proof of consciousness/higher-dimensional physics.

## CI

`.github/workflows/cosmos-synaptic-bindings.yml` compiles/tests the supported SDKs and compares their behavior to ABI v1 reference values.

Licensed under the repository's GPL-3.0-only license.
