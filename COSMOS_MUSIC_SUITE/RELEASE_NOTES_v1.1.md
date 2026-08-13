# COSMOS Music v1.1.0 — Binary Release

This release turns the COSMOS Music Suite into a downloadable cross-platform application package while keeping the readable PWA and Python source fully open.

## ✅ What is included

### Windows
- `COSMOS-Music-1.1.0-Windows-x64-Setup.exe`
- One-click NSIS installer
- Desktop and Start Menu shortcuts
- Runs the same local-first COSMOS Music interface in an isolated Electron shell

### macOS
- Apple Silicon `.dmg` + `.app` ZIP
- Intel `.dmg` + `.app` ZIP
- Standard drag-to-Applications DMG layout
- Microphone/camera usage descriptions included in the app bundle

### Android
- `COSMOS-Music-1.1.0-Android-Community.apk`
- Directly installable community APK for sideload/testing
- Uses the Capacitor native Android container around the maintained web runtime

### iPhone / iOS
- `COSMOS-Music-1.1.0-iPhone-PWA.zip` — installable web-app build for HTTPS hosting / Add to Home Screen
- `COSMOS-Music-1.1.0-iOS-Xcode-Project.zip` — generated native Capacitor project
- `COSMOS-Music-1.1.0-iOS-Simulator.app.zip` — compiled Release simulator application

A normal physical-device App Store/TestFlight `.ipa` cannot be legitimately produced without an Apple Developer signing identity and provisioning profile. Those private credentials are intentionally not stored in this repository. The iPhone PWA remains installable without Apple signing, and the native project is ready for signing by the project owner.

### Release integrity
- `SHA256SUMS.txt` is generated from all uploaded release artifacts.
- The release workflow only publishes after validation plus Windows, macOS, Android and iOS packaging jobs succeed.

## Signing / platform warnings

The public community binaries are intentionally built without private commercial signing secrets:

- Windows SmartScreen may warn about an unsigned publisher.
- macOS Gatekeeper may warn because the DMG/app is not Developer ID signed or notarized.
- Android community APK is debug-signed for direct installation/testing, not a Play Store production signature.
- Native iPhone distribution requires Apple signing; use the supplied Xcode project or the PWA path.

These warnings are distribution-signing issues, not missing application code.

## Core application

The same three modes ship everywhere:

- **Play Along** — sing and receive adaptive accompaniment.
- **Conductor** — voice + movement shape harmony, rhythm and timbre.
- **Bio** — optional heartbeat tap / camera-derived pulse timing influences musical phrasing.

Camera pulse analysis is expressive and non-medical.

## Research lineage

Foundational CST research deposit: https://doi.org/10.5281/zenodo.17574447

Licensed GPL-3.0-only.
