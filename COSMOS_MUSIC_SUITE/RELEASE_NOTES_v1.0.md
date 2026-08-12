# COSMOS Music Suite v1.0

**Author:** Cory Shane Davis / NavisWORLD  
**Foundational CST DOI:** https://doi.org/10.5281/zenodo.17574447  
**License:** GPL-3.0-only

This release line packages the music portion of the COSMOS/CST project as an installable modular PWA/Capacitor application plus Python reference engine, student guide, teacher guide, open-source governance, citation metadata and native mobile build scaffolding.

## Runtime
- Play-Along mode: live microphone pitch/energy/phrase analysis drives adaptive accompaniment.
- Conductor mode: adds denser counterline/harmony behavior and motion-controlled expression.
- Bio mode: manual pulse, camera PPG estimation, or native `cosmos-heart` events drive pulse-aware musical control.
- 12-channel operational performance state: voice energy, pitch lock, phrase flux, tempo coherence, motion energy, tilt X/Y, rotation flux, pulse phase, pulse stability, harmonic tension and synaptic memory.

## Mobile
- PWA install path for iPhone and Android.
- Capacitor 8 Android and iOS projects generated from the same web runtime.
- Android debug APK build verified locally.
- iOS Xcode project generation verified; native distribution requires Apple code signing/provisioning.

## Validation
- JavaScript syntax checks pass.
- PWA build passes.
- Python compile passes.
- Python tests: 6 passed.
- Android project/permissions generation passes.
- Android Gradle `assembleDebug` passes.

Camera PPG is an approximate expressive input and is not a medical measurement. The CST 12D state used here is an operational engineering control representation, not a clinical or physics validation claim.
