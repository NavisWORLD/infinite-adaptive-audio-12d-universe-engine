# Install COSMOS Music on iPhone and Android

COSMOS Music v1.1.0 now ships actual mobile release artifacts. Start here:

**Release:** https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/tag/cosmos-music-v1.1.0

---

## Android — easiest native install

Download:

**`COSMOS-Music-1.1.0-Android-Community.apk`**

Direct file:

https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/COSMOS-Music-1.1.0-Android-Community.apk

This is a directly installable community APK produced by the repository's validated GitHub Actions release pipeline.

Android may ask you to allow installation from the browser or file manager you used to download the APK. That is an operating-system security control for applications installed outside Google Play.

### Build Android yourself

```bash
npm install
npm run native:android
cd android
./gradlew assembleDebug
```

The Capacitor project is generated from the maintained `app/` runtime.

A Google Play production release should use your own release keystore and Play Console signing workflow. Private signing keys must never be committed to this repository.

---

## iPhone — easiest open-source path

The v1.1.0 release includes:

- `COSMOS-Music-1.1.0-iPhone-PWA.zip`
- `COSMOS-Music-1.1.0-iOS-Xcode-Project.zip`
- `COSMOS-Music-1.1.0-iOS-Simulator.app.zip`

### PWA

The PWA is the lowest-friction iPhone edition because it does not require App Store signing.

The repository currently packages the PWA but **does not yet have GitHub Pages enabled**. To use the PWA immediately, host the contents of the PWA ZIP on any HTTPS static host, open that HTTPS address in Safari, then use **Share → Add to Home Screen**.

Once GitHub Pages is enabled for this repository, the included `COSMOS Music Deploy PWA` workflow can publish the same maintained web runtime automatically.

### Native iPhone / iOS

Download `COSMOS-Music-1.1.0-iOS-Xcode-Project.zip`, open the generated project in Xcode on macOS, select your Apple development team, and build to your device.

A physical iPhone build must be signed with an Apple Developer identity and provisioning profile. Those private credentials cannot be fabricated by CI and must not be stored in an open-source repository.

The release also contains `COSMOS-Music-1.1.0-iOS-Simulator.app.zip`, which is a compiled unsigned Release simulator application for testing on macOS with Xcode's iOS Simulator. It is not a physical-device IPA.

### Build iOS yourself

```bash
npm install
npm run native:ios
```

Then open the generated iOS project/workspace in Xcode.

---

## Permissions

COSMOS Music asks for sensor access only when the corresponding feature is used:

- microphone for voice analysis
- device motion/orientation for conductor controls
- camera for optional approximate optical pulse timing
- optional native heart-rate integration when a platform bridge is installed

The microphone path is analysis-first and is not intentionally routed directly back to the speakers.

Camera PPG is an expressive music-control input, **not a medical heart-rate monitor**.

---

## Heart-rate sources

The pure web/PWA edition supports:

- manual heartbeat taps
- optional camera PPG timing

A native HealthKit reference bridge is under `native/ios-healthkit/`. It requires the HealthKit entitlement, an Xcode target update, explicit user authorization, and Apple code signing.

---

## Verify your download

The release includes `SHA256SUMS.txt` so users can verify that downloaded binaries match the files produced by CI.

https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/releases/download/cosmos-music-v1.1.0/SHA256SUMS.txt
