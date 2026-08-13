#include "cosmos_synaptic.h"
#include <math.h>
#include <string.h>

static double clip(double x, double lo, double hi) {
    if (x < lo) return lo;
    if (x > hi) return hi;
    return x;
}

const char *cosmos_synaptic_version_v1(void) { return "cosmos.synaptic.v1"; }
size_t cosmos_synaptic_state_len_v1(void) { return COSMOS_SYNAPTIC_STATE_LEN_V1; }

void cosmos_synaptic_reset_v1(CosmosSynapticStateV1 *state) {
    if (!state) return;
    memset(state->v, 0, sizeof(state->v));
}

void cosmos_synaptic_step_v1(CosmosSynapticStateV1 *state, const CosmosSynapticInputV1 *input, double leak) {
    double target[12] = {0};
    double out[12] = {0};
    double phase, salience;
    size_t i;
    if (!state || !input) return;

    leak = clip(leak, 0.0, 0.999);
    phase = input->bpm > 0.0
        ? fmod(state->v[8] + fmax(0.0, input->dt) * fmax(0.0, input->bpm) / 60.0, 1.0)
        : 0.0;

    target[0] = clip(input->voice_energy, 0.0, 1.0);
    target[1] = clip(input->pitch_lock, 0.0, 1.0);
    target[2] = clip(input->phrase_flux, 0.0, 1.0);
    target[3] = clip(input->tempo_coherence, 0.0, 1.0);
    target[4] = clip(input->motion_energy, 0.0, 1.0);
    target[5] = clip(input->tilt_x, -1.0, 1.0);
    target[6] = clip(input->tilt_y, -1.0, 1.0);
    target[7] = clip(input->rotation_flux, 0.0, 1.0);
    target[8] = phase;
    target[9] = clip(input->pulse_stability, 0.0, 1.0);
    target[10] = clip(input->harmonic_tension, 0.0, 1.0);

    for (i = 0; i < 11; ++i) out[i] = leak * state->v[i] + (1.0 - leak) * target[i];
    salience = (out[0] + out[1] + out[4] + out[9]) / 4.0;
    out[11] = leak * state->v[11] + (1.0 - leak) * tanh(1.5 * salience);
    memcpy(state->v, out, sizeof(out));
}
