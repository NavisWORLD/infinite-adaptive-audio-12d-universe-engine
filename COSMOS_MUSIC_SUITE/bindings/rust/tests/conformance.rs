use cosmos_synaptic::{Engine, SynapticInput};

#[test]
fn reference_step_matches_v1() {
    let mut engine = Engine::new(0.82);
    let input = SynapticInput { voice_energy:0.8, pitch_lock:0.9, phrase_flux:0.2, tempo_coherence:0.7, motion_energy:0.4, tilt_x:0.5, tilt_y:-0.25, rotation_flux:0.3, bpm:72.0, pulse_stability:0.8, harmonic_tension:0.6, dt:0.05 };
    let state = *engine.update(input);
    let expected = [0.144,0.162,0.036,0.126,0.072,0.09,-0.045,0.054,0.0108,0.144,0.108,0.034791746957508];
    for i in 0..12 { assert!((state[i]-expected[i]).abs() < 1e-9); }
}
