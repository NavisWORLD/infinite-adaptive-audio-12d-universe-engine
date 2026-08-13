#include "cosmos_synaptic.h"
#include <math.h>

int main(void) {
    const double expected[12] = {0.144,0.162,0.036,0.126,0.072,0.09,-0.045,0.054,0.0108,0.144,0.108,0.034791746957508};
    CosmosSynapticStateV1 state = {{0}};
    CosmosSynapticInputV1 in = {0.8,0.9,0.2,0.7,0.4,0.5,-0.25,0.3,72.0,0.8,0.6,0.05};
    cosmos_synaptic_step_v1(&state, &in, 0.82);
    for (int i = 0; i < 12; ++i) if (fabs(state.v[i] - expected[i]) > 1e-9) return 1;
    return 0;
}
