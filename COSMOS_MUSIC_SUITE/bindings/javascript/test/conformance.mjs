import assert from 'node:assert/strict';
import {SynapticEngine} from '../src/index.mjs';

const expected=[0.144,0.162,0.036,0.126,0.072,0.09,-0.045,0.054,0.0108,0.144,0.108,0.034791746957508];
const engine=new SynapticEngine(0.82);
const actual=engine.update({voice_energy:.8,pitch_lock:.9,phrase_flux:.2,tempo_coherence:.7,motion_energy:.4,tilt_x:.5,tilt_y:-.25,rotation_flux:.3,bpm:72,pulse_stability:.8,harmonic_tension:.6,dt:.05});
actual.forEach((value,index)=>assert.ok(Math.abs(value-expected[index])<1e-9));
console.log('JavaScript Synaptic ABI v1 conformance: ok');
