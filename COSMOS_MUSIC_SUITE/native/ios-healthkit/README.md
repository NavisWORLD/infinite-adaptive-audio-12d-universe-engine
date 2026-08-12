# Optional native HealthKit bridge

The PWA does not need this plugin. For a signed native iOS build that reads authorized HealthKit heart-rate samples:
1. Generate/open the Capacitor iOS project on macOS.
2. Add `CosmosBioPlugin.swift` to the App target.
3. Add the HealthKit capability/entitlement in Xcode.
4. Add `NSHealthShareUsageDescription` to `Info.plist`.
5. Subclass/register the local plugin per Capacitor 8 custom native iOS plugin documentation.
6. In web code, call the native plugin and dispatch `new CustomEvent('cosmos-heart',{detail:{bpm,quality:1,source:'HealthKit'}})`.

HealthKit always requires explicit authorization. The app should gracefully fall back to camera PPG/manual beat input when native access is unavailable.
