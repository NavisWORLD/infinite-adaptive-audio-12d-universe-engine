# COSMOS Music Python Companion

A dependency-light Python reference implementation of the suite's 12-channel performance state, pitch/note utilities, heart-beat timing helpers, MIDI writer, and local static/API server.

```bash
cd python
python -m pip install -e .
cosmos-music state --voice-energy .7 --pitch-lock .8 --motion .25 --bpm 72
cosmos-music midi --out cosmos_demo.mid --bpm 72 --key C --mode major
cosmos-music serve --app ../app --port 8080
```

The Python layer is a companion/reference implementation; the mobile instruments synthesize locally in Web Audio and do not require Python on the phone.
