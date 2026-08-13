export type State12 = [number, number, number, number, number, number, number, number, number, number, number, number];

export interface SynapticInput {
  voice_energy?: number;
  pitch_lock?: number;
  phrase_flux?: number;
  tempo_coherence?: number;
  motion_energy?: number;
  tilt_x?: number;
  tilt_y?: number;
  rotation_flux?: number;
  bpm?: number;
  pulse_stability?: number;
  harmonic_tension?: number;
  dt?: number;
}

export const ABI = "cosmos.synaptic.v1";

function clip(value: number | undefined, low: number, high: number): number {
  const n = Number(value ?? 0);
  return Math.max(low, Math.min(high, Number.isFinite(n) ? n : 0));
}

export function synapticStep(previous: Readonly<State12>, input: SynapticInput = {}, leak = 0.82): State12 {
  const p = [...previous] as State12;
  const l = clip(leak, 0, 0.999);
  const bpm = Math.max(0, input.bpm ?? 0);
  const dt = Math.max(0, input.dt ?? 0.05);
  const phase = bpm > 0 ? (p[8] + dt * bpm / 60) % 1 : 0;
  const target: State12 = [
    clip(input.voice_energy, 0, 1), clip(input.pitch_lock, 0, 1),
    clip(input.phrase_flux, 0, 1), clip(input.tempo_coherence, 0, 1),
    clip(input.motion_energy, 0, 1), clip(input.tilt_x, -1, 1),
    clip(input.tilt_y, -1, 1), clip(input.rotation_flux, 0, 1),
    phase, clip(input.pulse_stability, 0, 1),
    clip(input.harmonic_tension, 0, 1), 0
  ];
  const out = Array(12).fill(0) as State12;
  for (let i = 0; i < 11; i += 1) out[i] = l * p[i] + (1 - l) * target[i];
  const salience = (out[0] + out[1] + out[4] + out[9]) / 4;
  out[11] = l * p[11] + (1 - l) * Math.tanh(1.5 * salience);
  return out;
}

export class SynapticEngine {
  state: State12 = [0,0,0,0,0,0,0,0,0,0,0,0];
  readonly leak: number;
  constructor(leak = 0.82) { this.leak = clip(leak, 0, 0.999); }
  reset(): State12 { this.state = [0,0,0,0,0,0,0,0,0,0,0,0]; return this.state; }
  update(input: SynapticInput = {}): State12 { this.state = synapticStep(this.state, input, this.leak); return this.state; }
}
