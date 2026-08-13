#include "cosmos/synaptic.hpp"
int main() {
    cosmos::synaptic::Engine engine;
    cosmos::synaptic::Input input;
    input.voice_energy = 0.5;
    const auto& state = engine.update(input);
    return state.size() == 12 ? 0 : 1;
}
