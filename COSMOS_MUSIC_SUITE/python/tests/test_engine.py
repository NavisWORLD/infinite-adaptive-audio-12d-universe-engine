import tempfile, os
from cosmos_music.state import CSTStateEngine
from cosmos_music.pitch import hz_to_note, estimate_pitch
from cosmos_music.harmony import infer_key
from cosmos_music.bio import BeatTracker
from cosmos_music.midi import write_progression

def test_state_bounded():
    s=CSTStateEngine(.5).update(voice_energy=5,motion_energy=5,tilt_x=-8,bpm=60,pulse_stability=2)
    assert all(-1<=x<=1 for x in s.vector())
def test_note(): assert hz_to_note(440)[0:2]==('A',4)
def test_key(): assert infer_key([0,4,7,0,7])[0]==0
def test_beat():
    b=BeatTracker(); [b.tap(t) for t in [0,1,2,3]]; assert 59<b.bpm()<61
def test_pitch_sine():
    import math
    sr=8000; x=[math.sin(2*math.pi*440*i/sr) for i in range(2048)]
    hz,q=estimate_pitch(x,sr); assert abs(hz-440)<5 and q>.8
def test_midi():
    with tempfile.TemporaryDirectory() as d:
        p=os.path.join(d,'a.mid'); write_progression(p); assert open(p,'rb').read(4)==b'MThd'
