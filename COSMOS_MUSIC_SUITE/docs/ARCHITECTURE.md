# Architecture

```text
microphone ──> pitch / energy / phrase features ─┐
                                                 │
accelerometer / gyro / orientation ──────────────┼─> 12-channel performance state ─> arrangement policy ─> Web Audio synthesis
                                                 │
camera fingertip PPG / manual tap / native BPM ─┘
```

## Instruments
- **COSMOS Play-Along**: lowest-friction sing-and-play instrument.
- **COSMOS Music Conductor**: denser orchestration and adaptive arrangement surface.
- **COSMOS Quantum Bio Instrument**: pulse timing and stability become musical control channels alongside voice and motion.

## 12-channel performance state
1. voice energy
2. pitch lock
3. phrase flux
4. tempo coherence
5. motion energy
6. X tilt
7. Y tilt
8. rotational flux
9. pulse phase
10. pulse stability
11. harmonic tension
12. short-term synaptic memory

This state is a practical control representation inspired by the operational CST/dyn12 lineage. It is not presented as a biological or physical dimensionality claim.

## Local-first privacy
The reference web app analyzes microphone/camera streams in the client. It does not intentionally upload raw media. Any future network bridge should transmit the minimum derived numeric features required for the selected function.
