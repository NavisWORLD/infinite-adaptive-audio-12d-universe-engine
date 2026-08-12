/**
 * Cosmic Synapse VJ Engine
 * Simplified 12D Cosmic Synapse Theory engine for VJ/audio visualization
 * Based on the full research engine, optimized for performance and user experience
 */

const PHI = 1.618033988749895; // Golden ratio
const C = 3.0e8; // Speed of light (m/s)

export class CosmicSynapseEngine {
    constructor(scene, options = {}) {
        this.scene = scene;

        // Configuration with defaults
        this.config = {
            particleCount: options.particleCount || 30,
            audioSensitivity: options.audioSensitivity || 0.6,
            colorPalette: options.colorPalette || 'cosmic',
            speed: options.speed || 0.5,
            trailLength: options.trailLength || 2000,
            phiHarmonics: options.phiHarmonics !== undefined ? options.phiHarmonics : true,
            blendLorenz: options.blendLorenz || 0.7,
            autoRotate: options.autoRotate !== undefined ? options.autoRotate : true,
            ...options
        };

        // Particle storage
        this.particles = [];
        this.particleMeshes = [];
        this.trailMeshes = [];

        // Audio data (will be updated externally)
        this.audioData = {
            rms: 0,
            fundamentalFreq: 440,
            spectrum: new Float32Array(128),
            spectralCentroid: 440
        };

        // Metrics
        this.metrics = {
            R_omega: 0,
            R_psi: 0,
            causalDensity: 0,
            phiHarmonics: []
        };

        // Lorenz parameters
        this.lorenzParams = {
            sigma: 10,
            rho: 28,
            beta: 8/3
        };

        this.init();
    }

    init() {
        this.createParticles();
    }

    /**
     * Create initial particle population
     */
    createParticles() {
        for (let i = 0; i < this.config.particleCount; i++) {
            this.addParticle();
        }
    }

    /**
     * Create a single particle with 12D state
     */
    createParticle() {
        return {
            id: this.generateUUID(),

            // 3D position (Lorenz attractor space)
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
            z: (Math.random() - 0.5) * 2,

            // 3D velocity
            vx: 0,
            vy: 0,
            vz: 0,

            // 12D Internal dimensions
            x12: (Math.random() - 0.5) * 2,  // Internal position [-1, 1]
            m12: (Math.random() - 0.5) * 2,  // Internal momentum [-1, 1]

            // Oscillator properties
            theta: Math.random() * Math.PI * 2,  // Phase
            omega: 0.3 + Math.random() * 1.4,     // Angular frequency [0.3, 1.7]
            nu: 220 + Math.random() * 440,        // Frequency (Hz)

            // Energy and memory
            Ec: 1.0,                               // Energy
            memory: [],                            // Memory buffer

            // Visual properties
            color: this.getColorFromPalette(i),
            size: 2 + Math.random() * 3,
            trail: [],

            // CST formula components
            psi: 0,
            lambda: Math.random() * 0.5,  // Chaos measure

            // Age tracking
            age: 0,
            lifetime: 10000 + Math.random() * 5000
        };
    }

    /**
     * Add a new particle to the system
     */
    addParticle() {
        const particle = this.createParticle();
        this.particles.push(particle);

        // Create THREE.js visual representation
        if (this.scene) {
            this.createParticleVisual(particle);
        }

        return particle;
    }

    /**
     * Create THREE.js mesh for particle visualization
     */
    createParticleVisual(particle) {
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: particle.color,
            transparent: true,
            opacity: 0.8
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(particle.x, particle.y, particle.z);
        mesh.userData.particleId = particle.id;

        this.scene.add(mesh);
        this.particleMeshes.push(mesh);

        // Create trail line
        const trailGeometry = new THREE.BufferGeometry();
        const trailMaterial = new THREE.LineBasicMaterial({
            color: particle.color,
            transparent: true,
            opacity: 0.3,
            linewidth: 1
        });
        const trailLine = new THREE.Line(trailGeometry, trailMaterial);
        trailLine.userData.particleId = particle.id;

        this.scene.add(trailLine);
        this.trailMeshes.push(trailLine);
    }

    /**
     * Update particle physics and 12D state
     */
    updateParticle(particle, dt) {
        // Update age
        particle.age += dt * 1000;

        // Audio influence on internal dimensions
        if (this.audioData.rms > 0.01) {
            const audioInfluence = this.audioData.rms * this.config.audioSensitivity * 2.0;
            const randomWalk = (Math.random() - 0.5) * 0.3;
            const resonance = Math.sin(particle.nu * 0.001) * 0.2;

            // Update angular frequency (omega)
            particle.omega += (audioInfluence + randomWalk + resonance) * 0.001;
            particle.omega = Math.max(0.1, Math.min(2.0, particle.omega));

            // Update internal position x12 based on audio
            const x12_influence = audioInfluence * Math.sin(particle.theta);
            particle.x12 += x12_influence * 0.01;
            particle.x12 = Math.max(-1, Math.min(1, particle.x12));
        }

        // Random walk in internal dimension
        particle.x12 += (Math.random() - 0.5) * 0.01;
        particle.x12 = Math.max(-1, Math.min(1, particle.x12));

        // Update phase
        particle.theta += particle.omega * dt;
        if (particle.theta > Math.PI * 2) particle.theta -= Math.PI * 2;

        // Lorenz attractor dynamics
        const sigma = this.lorenzParams.sigma;
        const rho = this.lorenzParams.rho;
        const beta = this.lorenzParams.beta;

        const dx = sigma * (particle.y - particle.x);
        const dy = particle.x * (rho - particle.z) - particle.y;
        const dz = particle.x * particle.y - beta * particle.z;

        // Apply physics blend (Lorenz vs other forces)
        const blend = this.config.blendLorenz;
        const effectiveDt = dt * this.config.speed;

        particle.x += dx * effectiveDt * blend;
        particle.y += dy * effectiveDt * blend;
        particle.z += dz * effectiveDt * blend;

        // Velocity tracking
        particle.vx = dx * effectiveDt;
        particle.vy = dy * effectiveDt;
        particle.vz = dz * effectiveDt;

        // Update CST psi function
        this.updateParticlePsi(particle);

        // Update trail
        this.updateTrail(particle);

        // Clamp position to prevent runaway
        const maxDist = 50;
        const dist = Math.sqrt(particle.x**2 + particle.y**2 + particle.z**2);
        if (dist > maxDist) {
            particle.x *= maxDist / dist;
            particle.y *= maxDist / dist;
            particle.z *= maxDist / dist;
        }
    }

    /**
     * Compute 12D CST ψ function
     * ψ = φE/c² + λ + ∫v·dt + ∫Δx₁₂·dt + ΩE + U
     */
    updateParticlePsi(particle) {
        // Term 1: φ·Ec/c²
        const term1 = (PHI * particle.Ec) / (C * C);

        // Term 2: λ (chaos/Lyapunov-like)
        const term2 = particle.lambda;

        // Term 3: ∫||v||·dt (velocity integral - simplified)
        const speed = Math.sqrt(particle.vx**2 + particle.vy**2 + particle.vz**2);
        const term3 = speed * 0.1;

        // Term 4: ∫|Δx₁₂|·dt (internal dimension change)
        const term4 = Math.abs(particle.x12) * 0.1;

        // Term 5: Ω·E (angular frequency * energy)
        const term5 = particle.omega * particle.Ec * 0.01;

        // Total ψ
        particle.psi = term1 + term2 + term3 + term4 + term5;
    }

    /**
     * Update particle trail
     */
    updateTrail(particle) {
        particle.trail.push({
            x: particle.x,
            y: particle.y,
            z: particle.z,
            alpha: 1.0
        });

        // Limit trail length
        if (particle.trail.length > this.config.trailLength) {
            particle.trail.shift();
        }

        // Fade trail
        particle.trail.forEach((point, i) => {
            point.alpha = i / particle.trail.length;
        });
    }

    /**
     * Update all particles
     */
    update(dt = 0.016) {
        // Update each particle
        this.particles.forEach(particle => {
            this.updateParticle(particle, dt);
        });

        // Compute global metrics
        this.updateMetrics();

        // Update visuals
        this.updateVisuals();
    }

    /**
     * Update THREE.js visual representations
     */
    updateVisuals() {
        this.particles.forEach((particle, i) => {
            // Update particle mesh position
            const mesh = this.particleMeshes[i];
            if (mesh) {
                mesh.position.set(particle.x, particle.y, particle.z);
                mesh.material.color.set(particle.color);
                mesh.material.opacity = 0.8;
            }

            // Update trail
            const trailMesh = this.trailMeshes[i];
            if (trailMesh && particle.trail.length > 1) {
                const positions = new Float32Array(particle.trail.length * 3);
                particle.trail.forEach((point, j) => {
                    positions[j * 3] = point.x;
                    positions[j * 3 + 1] = point.y;
                    positions[j * 3 + 2] = point.z;
                });
                trailMesh.geometry.setAttribute('position',
                    new THREE.BufferAttribute(positions, 3));
                trailMesh.geometry.attributes.position.needsUpdate = true;
            }
        });
    }

    /**
     * Compute synchronization and coherence metrics
     */
    updateMetrics() {
        if (this.particles.length === 0) return;

        // R_omega (omega synchronization)
        const omegas = this.particles.map(p => p.omega);
        const meanOmega = omegas.reduce((a, b) => a + b, 0) / omegas.length;
        const stdOmega = Math.sqrt(
            omegas.reduce((sum, o) => sum + (o - meanOmega) ** 2, 0) / omegas.length
        );
        this.metrics.R_omega = meanOmega > 0 ? 1 - (stdOmega / meanOmega) : 0;
        this.metrics.R_omega = Math.max(0, Math.min(1, this.metrics.R_omega));

        // R_psi (phase coherence)
        let sumReal = 0, sumImag = 0;
        this.particles.forEach(p => {
            sumReal += Math.cos(p.theta);
            sumImag += Math.sin(p.theta);
        });
        this.metrics.R_psi = Math.sqrt(sumReal**2 + sumImag**2) / this.particles.length;

        // Causal density (audio-particle correlation)
        const avgPsi = this.particles.reduce((sum, p) => sum + p.psi, 0) / this.particles.length;
        const psiVariance = this.particles.reduce((sum, p) => sum + (p.psi - avgPsi)**2, 0) / this.particles.length;
        const audioInfluence = this.audioData.rms * 10;
        this.metrics.causalDensity = psiVariance > 0 ? audioInfluence / (1 + psiVariance) : 0;
        this.metrics.causalDensity = Math.max(0, Math.min(1, this.metrics.causalDensity));

        // φ-harmonics
        if (this.config.phiHarmonics) {
            this.metrics.phiHarmonics = this.computePhiHarmonics(this.audioData.fundamentalFreq);
        }
    }

    /**
     * Compute golden ratio harmonic series
     */
    computePhiHarmonics(f0) {
        const harmonics = [];
        for (let n = 0; n < 8; n++) {
            let freq = f0 * Math.pow(PHI, n / 2);
            // Octave folding
            while (freq > f0 * 8) freq /= 2;
            while (freq < f0 / 4) freq *= 2;
            harmonics.push(freq);
        }
        return harmonics.sort((a, b) => a - b);
    }

    /**
     * Get color from palette
     */
    getColorFromPalette(index) {
        const palettes = {
            cosmic: ['#1a0033', '#330066', '#4d0099', '#6600cc', '#7f00ff'],
            warm: ['#ff6b35', '#f7931e', '#fdc830', '#f37735', '#c73e1d'],
            cool: ['#00d9ff', '#0099ff', '#0066cc', '#003399', '#001f66'],
            psychedelic: ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'],
            monochrome: ['#ffffff', '#cccccc', '#999999', '#666666', '#333333']
        };

        const palette = palettes[this.config.colorPalette] || palettes.cosmic;
        return palette[index % palette.length];
    }

    /**
     * Update color palette for all particles
     */
    setColorPalette(paletteName) {
        this.config.colorPalette = paletteName;
        this.particles.forEach((particle, i) => {
            particle.color = this.getColorFromPalette(i);
        });
    }

    /**
     * Set particle count (add or remove particles)
     */
    setParticleCount(count) {
        count = Math.max(1, Math.min(100, count));

        if (count > this.particles.length) {
            // Add particles
            while (this.particles.length < count) {
                this.addParticle();
            }
        } else if (count < this.particles.length) {
            // Remove particles
            while (this.particles.length > count) {
                this.removeParticle(this.particles.length - 1);
            }
        }

        this.config.particleCount = count;
    }

    /**
     * Remove a particle
     */
    removeParticle(index) {
        if (index >= 0 && index < this.particles.length) {
            this.particles.splice(index, 1);

            // Remove meshes
            const mesh = this.particleMeshes[index];
            if (mesh) {
                this.scene.remove(mesh);
                mesh.geometry.dispose();
                mesh.material.dispose();
            }
            this.particleMeshes.splice(index, 1);

            const trail = this.trailMeshes[index];
            if (trail) {
                this.scene.remove(trail);
                trail.geometry.dispose();
                trail.material.dispose();
            }
            this.trailMeshes.splice(index, 1);
        }
    }

    /**
     * Update audio data from external source
     */
    setAudioData(audioData) {
        this.audioData = audioData;
    }

    /**
     * Parameter setters
     */
    setAudioSensitivity(value) {
        this.config.audioSensitivity = value;
    }

    setSpeed(value) {
        this.config.speed = value;
    }

    setTrailLength(value) {
        this.config.trailLength = value;
    }

    setBlendLorenz(value) {
        this.config.blendLorenz = value;
    }

    setPhiHarmonics(enabled) {
        this.config.phiHarmonics = enabled;
    }

    setParameter(name, value) {
        if (this.config.hasOwnProperty(name)) {
            this.config[name] = value;
        }
    }

    /**
     * Load preset configuration
     */
    loadPreset(preset) {
        Object.keys(preset).forEach(key => {
            if (key === 'particleCount') {
                this.setParticleCount(preset[key]);
            } else if (key === 'colorPalette') {
                this.setColorPalette(preset[key]);
            } else if (this.config.hasOwnProperty(key)) {
                this.config[key] = preset[key];
            } else if (key === 'physics') {
                Object.assign(this.config, preset.physics);
            } else if (key === 'camera') {
                // Camera settings handled by main app
            } else if (key === 'postProcessing') {
                // Post-processing handled by renderer
            }
        });
    }

    /**
     * Generate UUID for particles
     */
    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Get current metrics for display
     */
    getMetrics() {
        return this.metrics;
    }

    /**
     * Clean up resources
     */
    dispose() {
        this.particles.forEach((_, i) => {
            this.removeParticle(0);
        });
        this.particles = [];
        this.particleMeshes = [];
        this.trailMeshes = [];
    }
}

export default CosmicSynapseEngine;
