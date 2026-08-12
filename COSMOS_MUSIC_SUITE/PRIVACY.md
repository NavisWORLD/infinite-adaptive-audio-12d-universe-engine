# Privacy policy for the reference application

COSMOS Music is designed local-first. Microphone audio, device motion and optional camera frames are processed on-device by the web application. The reference build does not intentionally transmit or persist raw microphone recordings or camera video.

Derived values such as pitch, energy, motion magnitude and estimated BPM may be displayed or used in the synthesis engine. If a developer adds analytics, cloud APIs or remote logging, that developer is responsible for clearly disclosing the new data flow and obtaining appropriate consent.

Camera pulse estimation is an expressive input and is **not a medical device or diagnosis tool**. Native HealthKit integration, when enabled by a downstream iOS build, must request user authorization and follow Apple's HealthKit privacy requirements.
