# COSMOS Music — Student Guide

## What you are building
COSMOS Music turns ordinary phone signals into musical control. Your singing contributes pitch, energy and phrasing; device motion contributes gesture; optional camera PPG estimates a pulse timing signal from fingertip color changes; the synthesis engine uses those measurements to choose harmony, rhythm, density and timbre.

The 12-channel CST performance state is an **engineering control vector**. It is not a medical measurement and it is not proof of a twelve-dimensional physical universe.

## Start in five minutes
1. Serve the `app/` folder over HTTPS or use the hosted PWA.
2. Open `index.html` and choose **Play Along**.
3. Tap **Enable Audio**, then **Mic / Voice**, then **iPhone Motion**.
4. Sing a sustained note and listen for the accompaniment to settle around it.
5. Move the phone gently and identify which musical properties change.

## Labs
### Lab 1 — Voice as control
Hold one note for five seconds, then slide upward. Record the detected note and describe what accompaniment changed.

### Lab 2 — Motion mapping
Keep your voice constant while tilting and rotating the phone. Separate pitch-caused changes from motion-caused changes.

### Lab 3 — Bio rhythm
Use the Bio Instrument. Tap your pulse manually first, then compare with camera PPG. Treat camera BPM as approximate expressive data, not health data.

### Lab 4 — Twelve channels
Inspect the 12-state display. Predict how increasing voice energy while reducing motion energy changes the arrangement, then test the prediction.

### Lab 5 — Build a mapping
Fork the project. Choose one state channel and map it to a different synthesis parameter. Document the old mapping, new mapping, and why the result is more playable.

### Lab 6 — Reproducibility
Use the Python companion to generate a state JSON object and a MIDI progression. Commit the settings needed for another student to reproduce it.

## Safety and privacy
Use comfortable listening volume. Do not stare into the camera flash. Camera PPG is optional and non-medical. Raw microphone/camera media is processed locally by the page and is not intentionally uploaded by this reference application. Always inspect modifications before deploying them with network services.
