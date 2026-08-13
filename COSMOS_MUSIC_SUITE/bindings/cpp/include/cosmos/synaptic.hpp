#pragma once
#include <array>
#include <algorithm>
#include <cmath>
#include <cstddef>

namespace cosmos {
namespace synaptic {

inline constexpr const char* abi = "cosmos.synaptic.v1";
inline constexpr std::size_t state_len = 12;
using State = std::array<double, state_len>;

struct Input {
    double voice_energy=0, pitch_lock=0, phrase_flux=0, tempo_coherence=0;
    double motion_energy=0, tilt_x=0, tilt_y=0, rotation_flux=0;
    double bpm=0, pulse_stability=0, harmonic_tension=0, dt=0.05;
};

inline double clip(double x, double lo, double hi) { return std::max(lo, std::min(hi, x)); }

inline State step(const State& previous, const Input& in, double leak=0.82) {
    leak = clip(leak, 0.0, 0.999);
    const double bpm = std::max(0.0, in.bpm);
    const double dt = std::max(0.0, in.dt);
    const double phase = bpm > 0 ? std::fmod(previous[8] + dt*bpm/60.0, 1.0) : 0.0;
    State target{clip(in.voice_energy,0,1),clip(in.pitch_lock,0,1),clip(in.phrase_flux,0,1),clip(in.tempo_coherence,0,1),clip(in.motion_energy,0,1),clip(in.tilt_x,-1,1),clip(in.tilt_y,-1,1),clip(in.rotation_flux,0,1),phase,clip(in.pulse_stability,0,1),clip(in.harmonic_tension,0,1),0};
    State out{};
    for (std::size_t i=0;i<11;i++) out[i]=leak*previous[i]+(1.0-leak)*target[i];
    const double salience=(out[0]+out[1]+out[4]+out[9])/4.0;
    out[11]=leak*previous[11]+(1.0-leak)*std::tanh(1.5*salience);
    return out;
}

class Engine {
    double leak_;
    State state_{};
public:
    explicit Engine(double leak=0.82): leak_(clip(leak,0.0,0.999)) {}
    const State& state() const { return state_; }
    void reset() { state_.fill(0.0); }
    const State& update(const Input& input) { state_=step(state_,input,leak_); return state_; }
};

} }
