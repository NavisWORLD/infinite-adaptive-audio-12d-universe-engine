from __future__ import annotations

from dataclasses import dataclass, field
from math import tanh
from typing import Iterable, Mapping

ABI = "cosmos.synaptic.v1"
STATE_NAMES = (
    "voice_energy", "pitch_lock", "phrase_flux", "tempo_coherence",
    "motion_energy", "tilt_x", "tilt_y", "rotation_flux",
    "pulse_phase", "pulse_stability", "harmonic_tension", "synaptic_memory",
)


def _clip(value: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, float(value)))


@dataclass(slots=True)
class SynapticInput:
    voice_energy: float = 0.0
    pitch_lock: float = 0.0
    phrase_flux: float = 0.0
    tempo_coherence: float = 0.0
    motion_energy: float = 0.0
    tilt_x: float = 0.0
    tilt_y: float = 0.0
    rotation_flux: float = 0.0
    bpm: float = 0.0
    pulse_stability: float = 0.0
    harmonic_tension: float = 0.0
    dt: float = 0.05

    @classmethod
    def from_mapping(cls, value: Mapping[str, float]) -> "SynapticInput":
        allowed = cls.__dataclass_fields__.keys()
        return cls(**{key: value[key] for key in allowed if key in value})


@dataclass(slots=True)
class SynapticState:
    values: list[float] = field(default_factory=lambda: [0.0] * 12)

    def __post_init__(self) -> None:
        self.values = [float(v) for v in self.values]
        if len(self.values) != 12:
            raise ValueError("SynapticState must contain exactly 12 values")

    @classmethod
    def from_iterable(cls, values: Iterable[float]) -> "SynapticState":
        return cls(list(values))

    def vector(self) -> list[float]:
        return list(self.values)

    def mapping(self) -> dict[str, float]:
        return dict(zip(STATE_NAMES, self.values))


def synaptic_step(previous: Iterable[float], input: SynapticInput | Mapping[str, float], leak: float = 0.82) -> list[float]:
    """Pure Synaptic ABI v1 state transition."""
    prev = [float(v) for v in previous]
    if len(prev) != 12:
        raise ValueError("previous must contain exactly 12 values")
    if not isinstance(input, SynapticInput):
        input = SynapticInput.from_mapping(input)

    leak = _clip(leak, 0.0, 0.999)
    bpm = max(0.0, float(input.bpm))
    dt = max(0.0, float(input.dt))
    phase = ((prev[8] + dt * bpm / 60.0) % 1.0) if bpm else 0.0
    target = [
        _clip(input.voice_energy, 0.0, 1.0),
        _clip(input.pitch_lock, 0.0, 1.0),
        _clip(input.phrase_flux, 0.0, 1.0),
        _clip(input.tempo_coherence, 0.0, 1.0),
        _clip(input.motion_energy, 0.0, 1.0),
        _clip(input.tilt_x, -1.0, 1.0),
        _clip(input.tilt_y, -1.0, 1.0),
        _clip(input.rotation_flux, 0.0, 1.0),
        phase,
        _clip(input.pulse_stability, 0.0, 1.0),
        _clip(input.harmonic_tension, 0.0, 1.0),
        0.0,
    ]
    out = [leak * a + (1.0 - leak) * b for a, b in zip(prev, target)]
    salience = (out[0] + out[1] + out[4] + out[9]) / 4.0
    out[11] = leak * prev[11] + (1.0 - leak) * tanh(1.5 * salience)
    return out


class SynapticEngine:
    def __init__(self, leak: float = 0.82, state: Iterable[float] | None = None):
        self.leak = _clip(leak, 0.0, 0.999)
        self.state = SynapticState.from_iterable(state or [0.0] * 12)

    def reset(self) -> SynapticState:
        self.state = SynapticState()
        return self.state

    def update(self, input: SynapticInput | Mapping[str, float] | None = None, **kwargs: float) -> SynapticState:
        if input is None:
            input = SynapticInput(**kwargs)
        elif kwargs:
            raise TypeError("pass either input or keyword values, not both")
        self.state = SynapticState(synaptic_step(self.state.values, input, self.leak))
        return self.state


__all__ = ["ABI", "STATE_NAMES", "SynapticInput", "SynapticState", "SynapticEngine", "synaptic_step"]
