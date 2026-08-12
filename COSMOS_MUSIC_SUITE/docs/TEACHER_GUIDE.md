# COSMOS Music — Teacher Guide

## Course purpose
This module teaches signal processing, human-computer interaction, generative music, Web Audio, sensor fusion, reproducible engineering and disciplined claims through a playable instrument.

## Learning objectives
Students should be able to:
- distinguish raw media from derived numeric features;
- explain pitch estimation, RMS/energy, onset detection, motion normalization and pulse timing;
- describe why a leaky state can stabilize noisy controls;
- design a mapping from sensor features to harmony/rhythm/timbre;
- identify feedback risks when a microphone is routed to speakers;
- explain the difference between camera PPG estimation and HealthKit/clinical heart-rate data;
- document a reproducible experiment and preserve null results.

## Eight-session teaching sequence
1. **Playable system orientation** — run all three instruments; map input → feature → state → music.
2. **Audio analysis** — pitch, RMS/energy, onset and confidence; compare silence/noise/singing.
3. **Harmony engine** — pitch classes, scale scoring, adaptive chords and failure cases.
4. **Motion interface** — accelerometer/orientation as continuous controls; smoothing and saturation.
5. **Bio signal ethics** — camera PPG, artifacts, confidence and why the project is not a medical device.
6. **CST 12-state implementation** — operational state vectors, leaky integration and synaptic-memory channel.
7. **Python/reference layer** — run tests, generate MIDI, inspect deterministic inputs and outputs.
8. **Capstone** — each student creates one new instrument mapping and defends it with a measurement plan.

## Suggested assessment
- 25% signal-analysis notebook or report
- 25% instrument mapping modification
- 20% reproducibility/test quality
- 20% capstone demonstration
- 10% claim discipline and privacy reasoning

## Discussion prompts
1. Why can a visually impressive dashboard still be scientifically weak?
2. What measurements prove the microphone analyser is live without recording the student's voice?
3. When does smoothing make an instrument more playable, and when does it hide useful transients?
4. Why should HealthKit permission and camera PPG be treated as different data sources?
5. How would you compare a CST-inspired 12-state mapping with a simpler baseline mapping?

## Instructor answer guide
A strong answer separates implementation from efficacy. Live signals require internal instrumentation. A fair comparison freezes the musical task, repeats trials, records mapping parameters and includes a simpler control. Negative outcomes are valid results. Health-related inputs require explicit consent, minimization and careful wording.
