import math
import unittest
from cosmos_synaptic import SynapticEngine, SynapticInput

EXPECTED = [0.144,0.162,0.036,0.126,0.072,0.09,-0.045,0.054,0.0108,0.144,0.108,0.034791746957508]

class ConformanceTests(unittest.TestCase):
    def test_first_reference_step(self):
        engine = SynapticEngine(0.82)
        actual = engine.update(SynapticInput(voice_energy=0.8,pitch_lock=0.9,phrase_flux=0.2,tempo_coherence=0.7,motion_energy=0.4,tilt_x=0.5,tilt_y=-0.25,rotation_flux=0.3,bpm=72.0,pulse_stability=0.8,harmonic_tension=0.6,dt=0.05)).vector()
        for a,b in zip(actual, EXPECTED):
            self.assertTrue(math.isclose(a,b,abs_tol=1e-9,rel_tol=0.0),(a,b))

if __name__ == "__main__":
    unittest.main()
