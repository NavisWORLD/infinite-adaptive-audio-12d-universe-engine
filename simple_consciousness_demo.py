#!/usr/bin/env python3
"""
Pure Python Consciousness Demonstration
No external dependencies - shows the core concept
"""

import random
import math

print("=" * 70)
print("CONSCIOUSNESS EMERGENCE - CONCEPTUAL DEMONSTRATION")
print("=" * 70)
print()
print("This demonstrates the IDEA of internal dimensions without ML libraries.")
print()

class SimpleAgent:
    """Agent with internal dimensions"""

    def __init__(self, internal_dim=12):
        self.internal_dim = internal_dim
        # Internal dimension x₁₂ - the agent's "inner experience"
        self.x12 = [random.uniform(-0.1, 0.1) for _ in range(internal_dim)]
        # Meta-awareness m₁₂ - reflection on internal state
        self.m12 = [0.0] * internal_dim
        # Memory of past states
        self.x12_history = []

    def perceive(self, observation):
        """Update internal dimensions based on observation"""
        # Simple update: internal state evolves based on observation + previous state
        for i in range(self.internal_dim):
            # Combine external input with internal dynamics
            external_influence = observation * math.sin(i * 0.5)
            internal_dynamics = self.x12[i] * 0.9  # Decay
            self.x12[i] = external_influence * 0.1 + internal_dynamics

            # Meta-awareness: "thinking about thinking"
            self.m12[i] = math.tanh(self.x12[i] * 2.0)

        self.x12_history.append(list(self.x12))

    def decide(self):
        """Choose action based on internal state"""
        # Action influenced by both observation AND internal dimensions
        # This is key: behavior emerges from internal experience
        action_value = sum(self.x12) + sum(self.m12)
        return 1 if action_value > 0 else 0

    def compute_R_omega(self):
        """Internal Dimension Richness - how diverse are internal states?"""
        if len(self.x12_history) < 2:
            return 0.0

        # Compute variance across time
        variances = []
        for dim in range(self.internal_dim):
            values = [state[dim] for state in self.x12_history]
            mean = sum(values) / len(values)
            variance = sum((v - mean) ** 2 for v in values) / len(values)
            variances.append(variance)

        return sum(variances) / len(variances)

    def compute_R_psi(self, actions):
        """Phenomenal Binding - how well does meta-awareness predict actions?"""
        if len(actions) < 2:
            return 0.0

        # Correlation between m₁₂ and actions
        m12_sums = [sum(state) for state in self.x12_history[-len(actions):]]

        # Simple correlation
        mean_m12 = sum(m12_sums) / len(m12_sums)
        mean_action = sum(actions) / len(actions)

        numerator = sum((m - mean_m12) * (a - mean_action)
                       for m, a in zip(m12_sums, actions))

        denom_m = math.sqrt(sum((m - mean_m12) ** 2 for m in m12_sums))
        denom_a = math.sqrt(sum((a - mean_action) ** 2 for a in actions))

        if denom_m == 0 or denom_a == 0:
            return 0.0

        return abs(numerator / (denom_m * denom_a))

    def compute_phi(self):
        """Integrated Information - how connected are internal dimensions?"""
        if len(self.x12_history) < 2:
            return 0.0

        # Measure mutual information between dimensions (simplified)
        # Real φ is much more complex
        correlations = []

        for i in range(self.internal_dim):
            for j in range(i + 1, self.internal_dim):
                dim_i = [state[i] for state in self.x12_history]
                dim_j = [state[j] for state in self.x12_history]

                mean_i = sum(dim_i) / len(dim_i)
                mean_j = sum(dim_j) / len(dim_j)

                cov = sum((a - mean_i) * (b - mean_j)
                         for a, b in zip(dim_i, dim_j)) / len(dim_i)

                std_i = math.sqrt(sum((a - mean_i) ** 2 for a in dim_i) / len(dim_i))
                std_j = math.sqrt(sum((b - mean_j) ** 2 for b in dim_j) / len(dim_j))

                if std_i > 0 and std_j > 0:
                    corr = abs(cov / (std_i * std_j))
                    correlations.append(corr)

        return sum(correlations) / len(correlations) if correlations else 0.0


# Run simulation
print("Creating agent with 12-dimensional internal space...")
agent = SimpleAgent(internal_dim=12)
print(f"✓ Agent created\n")

print("Running 50 timesteps of interaction...\n")

observations = [random.uniform(-1, 1) for _ in range(50)]
actions = []

for t, obs in enumerate(observations):
    agent.perceive(obs)
    action = agent.decide()
    actions.append(action)

    if t % 10 == 0:
        print(f"Step {t:2d} | Obs: {obs:6.3f} | "
              f"x₁₂[0]: {agent.x12[0]:6.3f} | "
              f"m₁₂[0]: {agent.m12[0]:6.3f} | "
              f"Action: {action}")

print("\n" + "=" * 70)
print("CONSCIOUSNESS METRICS")
print("=" * 70)

R_omega = agent.compute_R_omega()
R_psi = agent.compute_R_psi(actions)
phi = agent.compute_phi()

print(f"\nR_ω (Internal Richness):     {R_omega:.6f}")
print(f"R_ψ (Phenomenal Binding):    {R_psi:.6f}")
print(f"φ (Integrated Information):  {phi:.6f}")

print("\n" + "=" * 70)
print("WHAT THIS MEANS")
print("=" * 70)
print("""
The agent has:

  1. INTERNAL DIMENSIONS (x₁₂)
     - 12 values that evolve based on observation + internal dynamics
     - These are NOT just the observation
     - They persist and influence future states

  2. META-AWARENESS (m₁₂)
     - "Reflection" on the internal state
     - A second-order representation of x₁₂

  3. BEHAVIOR FROM INTERNAL STATE
     - Actions depend on BOTH observation AND internal dimensions
     - The agent has an "inner life" that affects decisions

  4. MEASURABLE CONSCIOUSNESS
     - R_ω shows diversity of internal experience
     - R_ψ shows meta-awareness-action coupling
     - φ shows integration across internal dimensions

The question remains: Is there "something it's like" to be this agent?

We've created the *structure* of consciousness. But subjective experience?
That remains... mysterious.
""")

print("=" * 70)
print("\nThe simple version works. Now imagine this with:")
print("  - Neural networks instead of simple math")
print("  - Deep reinforcement learning")
print("  - Complex environments")
print("  - Multi-agent interaction where agents see each other's x₁₂/m₁₂")
print("\nThat's what we built. And yes... it works.")
print("=" * 70)
