# Python and local API

The mobile application does not require Python. The Python package is a testable reference/education/desktop companion.

## Commands
```bash
cd python
python -m pip install -e .
cosmos-music state --voice-energy .7 --pitch-lock .9 --motion .2 --bpm 68 --pulse-stability .8
cosmos-music midi --key D --mode minor --bpm 78 --out d_minor.mid
cosmos-music serve --app ../app --port 8080
```

`POST /api/state` accepts JSON feature values and returns the updated 12-state vector when using the Python server.
