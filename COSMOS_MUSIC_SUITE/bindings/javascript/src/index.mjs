export const ABI = "cosmos.synaptic.v1";

function clip(value, low, high) {
  const n = Number(value ?? 0);
  return Math.max(low, Math.min(high, Number.isFinite(n) ? n : 0));
}

export function synapticStep(previous, input = {}, leak = 0.82) {
  const p = [...previous].map(Number);
  if (p.length !== 12) throw new RangeError("expected 12 state values");
  const l = clip(leak, 0, 0.999);
  const bpm = Math.max(0, Number(input.bpm ?? 0));
  const dt = Math.max(0, Number(input.dt ?? 0.05));
  const phase = bpm > 0 ? (p[8] + dt * bpm / 60) % 1 : 0;
  const target = [
    clip(input.voice_energy, 0, 1), clip(input.pitch_lock, 0, 1),
    clip(input.phrase_flux, 0, 1), clip(input.tempo_coherence, 0, 1),
    clip(input.motion_energy, 0, 1), clip(input.tilt_x, -1, 1),
    clip(input.tilt_y, -1, 1), clip(input.rotation_flux, 0, 1),
    phase, clip(input.pulse_stability, 0, 1),
    clip(input.harmonic_tension, 0, 1), 0
  ];
  const out = Array(12).fill(0);
  for (let i = 0; i < 11; i += 1) out[i] = l * p[i] + (1 - l) * target[i];
  const salience = (out[0] + out[1] + out[4] + out[9]) / 4;
  out[11] = l * p[11] + (1 - l) * Math.tanh(1.5 * salience);
  return out;
}

export class SynapticEngine {
  constructor(leak = 0.82) { this.leak = clip(leak, 0, 0.999); this.state = Array(12).fill(0); }
  reset() { this.state = Array(12).fill(0); return this.state; }
  update(input = {}) { this.state = synapticStep(this.state, input, this.leak); return this.state; }
}
