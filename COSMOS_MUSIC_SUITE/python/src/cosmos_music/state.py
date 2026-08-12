from dataclasses import dataclass, asdict
from math import tanh

@dataclass
class CSTState12:
    voice_energy: float=0.0
    pitch_lock: float=0.0
    phrase_flux: float=0.0
    tempo_coherence: float=0.0
    motion_energy: float=0.0
    tilt_x: float=0.0
    tilt_y: float=0.0
    rotation_flux: float=0.0
    pulse_phase: float=0.0
    pulse_stability: float=0.0
    harmonic_tension: float=0.0
    synaptic_memory: float=0.0
    def vector(self): return list(asdict(self).values())
    def mapping(self): return asdict(self)

class CSTStateEngine:
    """Leaky 12-channel expressive music state inspired by operational dyn12."""
    def __init__(self,leak:float=0.82):
        self.leak=max(0.0,min(0.999,leak)); self.state=CSTState12()
    @staticmethod
    def _clip(x,lo=-1.0,hi=1.0): return max(lo,min(hi,float(x)))
    def update(self,*,voice_energy=0,pitch_lock=0,phrase_flux=0,tempo_coherence=0,motion_energy=0,tilt_x=0,tilt_y=0,rotation_flux=0,bpm=0,pulse_stability=0,harmonic_tension=0,dt=0.05):
        bpm=max(0.0,float(bpm)); phase=((dt*bpm/60.0)+self.state.pulse_phase)%1.0 if bpm else 0.0
        target=[self._clip(voice_energy,0,1),self._clip(pitch_lock,0,1),self._clip(phrase_flux,0,1),self._clip(tempo_coherence,0,1),self._clip(motion_energy,0,1),self._clip(tilt_x),self._clip(tilt_y),self._clip(rotation_flux,0,1),phase,self._clip(pulse_stability,0,1),self._clip(harmonic_tension,0,1),0.0]
        prev=self.state.vector(); mix=lambda a,b:self.leak*a+(1-self.leak)*b
        vals=[mix(a,b) for a,b in zip(prev,target)]
        salience=(vals[0]+vals[1]+vals[4]+vals[9])/4
        vals[-1]=mix(prev[-1],tanh(1.5*salience))
        self.state=CSTState12(*vals); return self.state
