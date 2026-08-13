#ifndef COSMOS_SYNAPTIC_H
#define COSMOS_SYNAPTIC_H

#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

#define COSMOS_SYNAPTIC_ABI_V1 1
#define COSMOS_SYNAPTIC_STATE_LEN_V1 12

typedef struct CosmosSynapticStateV1 {
    double v[COSMOS_SYNAPTIC_STATE_LEN_V1];
} CosmosSynapticStateV1;

typedef struct CosmosSynapticInputV1 {
    double voice_energy;
    double pitch_lock;
    double phrase_flux;
    double tempo_coherence;
    double motion_energy;
    double tilt_x;
    double tilt_y;
    double rotation_flux;
    double bpm;
    double pulse_stability;
    double harmonic_tension;
    double dt;
} CosmosSynapticInputV1;

const char *cosmos_synaptic_version_v1(void);
size_t cosmos_synaptic_state_len_v1(void);
void cosmos_synaptic_reset_v1(CosmosSynapticStateV1 *state);
void cosmos_synaptic_step_v1(CosmosSynapticStateV1 *state, const CosmosSynapticInputV1 *input, double leak);

#ifdef __cplusplus
}
#endif

#endif
