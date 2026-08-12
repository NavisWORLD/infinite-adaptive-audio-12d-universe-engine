# Install on iPhone and Android

## Immediate install: PWA
The `app/` directory is a Progressive Web App. Host it over HTTPS.

### iPhone
Open the HTTPS site in Safari (or another iOS browser that exposes Add to Home Screen), use the Share menu, choose **Add to Home Screen**, and launch COSMOS Music from the icon. Grant microphone, motion and camera permissions only when using the corresponding instrument.

### Android
Open the HTTPS site in Chrome/Edge/Firefox/Samsung Internet and choose **Install app** or **Add to Home screen**.

## Native wrapper: Capacitor
Capacitor 8 configuration is included.

```bash
npm install
npm run native:android
# Android Studio or: cd android && ./gradlew assembleDebug

npm run native:ios
# Open ios/App/App.xcworkspace or the generated project in Xcode on macOS.
```

A physical iPhone native build must be code-signed with an Apple Developer identity/provisioning profile. The source repository cannot contain somebody's signing certificate. The PWA does not require App Store signing.

## Heart-rate sources
The pure web/PWA edition uses manual beat taps or optional camera PPG. A native HealthKit reference plugin is provided under `native/ios-healthkit/`; it requires the HealthKit entitlement, an Xcode target update, and explicit user authorization.
