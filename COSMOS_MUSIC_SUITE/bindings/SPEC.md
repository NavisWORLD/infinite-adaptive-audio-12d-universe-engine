# COSMOS Synaptic ABI v1

## Purpose

Synaptic ABI v1 freezes a portable, deterministic definition of the 12-channel COSMOS synaptic state update so Python, C, C++, Rust, JavaScript, Go, JVM, .NET, Swift and FFI callers can exchange state without semantic drift.

The rule is derived from the maintained Python `CSTStateEngine` behavior. Existing application code is not silently changed by this spec; this is the compatibility contract for new cross-language integrations.

## Numeric model

All canonical arithmetic uses IEEE-754 binary64 values. Implementations may use wider intermediates, but serialized states and public APIs are `double`/`f64` equivalents. Conformance tolerance is `1e-9` per channel.

## State vector

Index | Name | Intended range
---|---|---
0 | `voice_energy` | 0..1
1 | `pitch_lock` | 0..1
2 | `phrase_flux` | 0..1
3 | `tempo_coherence` | 0..1
4 | `motion_energy` | 0..1
5 | `tilt_x` | -1..1
6 | `tilt_y` | -1..1
7 | `rotation_flux` | 0..1
8 | `pulse_phase` | 0..1 (leaky phase state)
9 | `pulse_stability` | 0..1
10 | `harmonic_tension` | 0..1
11 | `synaptic_memory` | approximately 0..1 for valid nonnegative salience inputs

The vector order above is ABI-stable.

## Input object

`voice_energy`, `pitch_lock`, `phrase_flux`, `tempo_coherence`, `motion_energy`, `rotation_flux`, `pulse_stability`, and `harmonic_tension` are clamped to `[0,1]`.

`tilt_x` and `tilt_y` are clamped to `[-1,1]`.

`bpm` is clamped to `>= 0`.

`dt` is clamped to `>= 0` seconds. The recommended realtime interval is `0.001..0.2` seconds, but the ABI does not force an upper bound.

`leak` is clamped to `[0,0.999]`. Default: `0.82`.

Missing inputs are zero.

## Canonical update

Given previous vector `p[12]`, input `x`, and clamped `leak = L`:

```text
mix(a, b) = L*a + (1-L)*b

if bpm > 0:
    phase_target = (p[8] + dt*bpm/60) mod 1
else:
    phase_target = 0

target = [
    clamp01(voice_energy),
    clamp01(pitch_lock),
    clamp01(phrase_flux),
    clamp01(tempo_coherence),
    clamp01(motion_energy),
    clamp11(tilt_x),
    clamp11(tilt_y),
    clamp01(rotation_flux),
    phase_target,
    clamp01(pulse_stability),
    clamp01(harmonic_tension),
    0
]

for i = 0..10:
    next[i] = mix(p[i], target[i])

salience = (next[0] + next[1] + next[4] + next[9]) / 4
memory_target = tanh(1.5 * salience)
next[11] = mix(p[11], memory_target)
```

The function is state-transition logic, not a random process. No clock access or hidden global state is permitted in the canonical step function; realtime wrappers calculate `dt` outside the ABI.

## Reset

A reset sets all 12 state values to zero.

## C ABI

The C implementation is the universal native ABI. `CosmosSynapticStateV1` is 12 consecutive `double` values. `CosmosSynapticInputV1` contains the 11 signal inputs plus `bpm` and `dt` as named `double` fields. The exported `cosmos_synaptic_step_v1` mutates the state in place.

ABI-major changes require a differently named symbol/version.

## JSON wire contract

The language-neutral envelope is:

```json
{
  "abi": "cosmos.synaptic.v1",
  "leak": 0.82,
  "previous": [0,0,0,0,0,0,0,0,0,0,0,0],
  "input": {
    "voice_energy": 0.8,
    "pitch_lock": 0.9,
    "bpm": 72,
    "dt": 0.05
  }
}
```

A conforming response contains:

```json
{
  "abi": "cosmos.synaptic.v1",
  "state": [12 numbers]
}
```

See `protocol/synaptic-v1.schema.json`.

## Conformance

`conformance/golden-v1.json` is the normative test data. Implementations must reproduce every listed expected state within absolute error `1e-9` per channel.

## Scope / claims

Synaptic ABI v1 is a software interoperability specification for a leaky 12-channel expressive signal state. The words `synaptic`, `memory`, `bio`, and `12D` are project terminology. This specification does not itself establish biological equivalence, medical validity, consciousness, or literal higher-dimensional physics.
