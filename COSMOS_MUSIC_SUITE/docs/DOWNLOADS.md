# 📦 Download COSMOS Music

The easiest way to use COSMOS Music is to download the build for your device from the repository's **Releases** page.

## What should I download?

| Device | Download | What it does |
|---|---|---|
| Windows 10/11 x64 | `COSMOS-Music-*-Windows-x64-Setup.exe` | One-click installer |
| Mac — Apple Silicon | `COSMOS-Music-*-macOS-arm64.dmg` | Drag COSMOS Music into Applications |
| Mac — Intel | `COSMOS-Music-*-macOS-x64.dmg` | Drag COSMOS Music into Applications |
| Android | `COSMOS-Music-*-Android-Community.apk` | Direct install / sideload build |
| iPhone / iPad | `COSMOS-Music-*-iPhone-PWA.zip` or hosted PWA | Install from Safari with Add to Home Screen |
| iOS developer | `COSMOS-Music-*-iOS-Xcode-Project.zip` | Native Capacitor project ready for your Apple signing identity |
| iOS Simulator | `COSMOS-Music-*-iOS-Simulator.app.zip` | Compiled Release simulator app |

## 🧸 Explain it like I am 5

Windows? Download the `.exe`.

Mac? Download the `.dmg`.

Android? Download the `.apk`.

iPhone? Open the hosted web app in Safari and add it to your Home Screen. Developers can also use the Xcode project for a native signed build.

## Why does iPhone have a different rule?

Apple requires a private Apple Developer signing identity and provisioning profile for normal native physical-device `.ipa` distribution. Those credentials belong to the developer account and should never be published in an open-source repository.

The project therefore ships:

1. the installable iPhone PWA path,
2. the complete native Xcode project,
3. a compiled simulator `.app` for verification.

Once the owner supplies Apple signing in Xcode or CI secrets, the same native project can be archived for TestFlight / App Store distribution.

## Signing warnings on community builds

Public GitHub community binaries do not contain private commercial code-signing certificates. Windows SmartScreen and macOS Gatekeeper can therefore show an unknown-developer warning. Android is community/debug signed for sideload testing.

## Verify your download

Every binary release includes `SHA256SUMS.txt`. You can compare the SHA-256 hash of your download with that file to verify it was not changed after packaging.

## Build it yourself

The entire packaging pipeline is in `.github/workflows/cosmos-music-release.yml`, and the desktop wrapper lives in `desktop/main.cjs`. The mobile apps use Capacitor.
