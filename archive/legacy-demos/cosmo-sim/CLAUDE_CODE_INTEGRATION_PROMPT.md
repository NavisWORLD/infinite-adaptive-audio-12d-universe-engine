# 🌌 COSMIC GENESIS MASTER INTEGRATION PROMPT
## Complete Unification of 12D Cosmic Synapse Theory Simulation Engine

---

## 🎯 MISSION OBJECTIVE

You are integrating **ALL features** from multiple partial simulation files into `greatcosmos.html` as the **definitive unified world model**. This is a **non-destructive, additive merge** that preserves every unique feature while creating a cohesive, production-ready simulation engine implementing the 12-Dimensional Cosmic Synapse Theory (12D CST v3).

**Repository Context:**
- GitHub repo folder: `cosmo sim/`
- Master skeleton: `greatcosmos.html` (~1,281 lines)
- Source files to merge:
  - `lostcosmo_s.html` (~3,110 lines) - UI shell, EventBus, sensors
  - `DARkcosmo.HTML` (~4,932 lines) - Telemetry, QuantumEventManager, logging
  - `earth.html` (~658 lines) - SurfaceManager, terrain, vegetation
  - `imdone.html` (~588 lines) - Additional features
  - `jecosmo.HTML` (~1,330 lines) - Additional simulation components

**Total Integration Scope:** ~11,900 lines → Single unified file

---

## 📋 PHASE 1: COMPREHENSIVE FILE ANALYSIS

### Step 1.1: Read All Files
Read every file in `cosmo sim/` directory and catalog:
1. **Core Systems** (EventBus, DataLogger, Sensors)
2. **Simulation Engines** (PGE, QEM, Surface, MemoryEcho, AudioReactive)
3. **UI Components** (tabs, panels, modals, HUD elements)
4. **External Data** (USGS, NASA, DONKI integrations)
5. **Theory Implementation** (12D state vectors, ψ computation)
6. **Rendering Pipeline** (post-processing, composer passes)
7. **AI/Cognitive** (CosmicAwarenessAgent, intention system)

### Step 1.2: Create Feature Matrix
Document in comments:
```javascript
/* FEATURE MATRIX ANALYSIS
 * ========================
 * lostcosmo_s.html:
 *   - EventBus with channel management
 *   - Sensor suite (audio/video/geolocation/light)
 *   - UI tab system with 7+ panels
 *   - Particlizer (file/live/j3 modes)
 *   - MemoryEcho system
 * 
 * DARkcosmo.HTML:
 *   - Dual-channel DataLogger (ledger + telemetry)
 *   - QuantumEventManager with Soul Dust
 *   - Sound-to-light spectral mapping
 *   - UUID-based entity tracking
 *   - Advanced telemetry filtering
 * 
 * earth.html:
 *   - SurfaceManager with terrain generation
 *   - Ocean + Sky + Vegetation systems
 *   - Sentinels + Motes (bio-inspired)
 *   - Day-night cycle
 *   - Surface collision + gravity
 * 
 * [Continue for all files...]
 */
```

### Step 1.3: Identify Overlaps & Conflicts
Flag duplicate implementations:
- EventBus variations
- DataLogger structures
- UI tab systems
- Camera controllers
- Animation loop structures

**Resolution Strategy:** Keep the MOST COMPLETE version, merge unique features from others.

---

## 🏗️ PHASE 2: ARCHITECTURAL FOUNDATION

### Step 2.1: Establish Initialization Order
Critical sequence (MUST BE RESPECTED):

```javascript
// 1. CORE INFRASTRUCTURE
const eventBus = new EventBus();
const dataLogger = new DataLogger(eventBus);

// 2. GRAPHICS FOUNDATION
const renderer = new THREE.WebGLRenderer({ ... });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( ... );
const composer = new EffectComposer(renderer);

// 3. SIMULATION ENGINES (order matters for dependencies)
const proceduralGenEngine = new ProceduralGenerationEngine(scene, eventBus, dataLogger);
const quantumEventManager = new QuantumEventManager(scene, eventBus, dataLogger);
const surfaceManager = new SurfaceManager(scene, eventBus, dataLogger);
const audioReactiveSystem = new AudioReactiveSystem(scene, eventBus);
const memoryEchoEngine = new MemoryEchoEngine(scene, eventBus);

// 4. SENSORS & EXTERNAL DATA
const sensorSuite = new SensorSuite(eventBus);
const externalDataManager = new ExternalDataManager(eventBus, dataLogger);

// 5. UI & CONTROLS
const uiManager = new UIManager(eventBus, dataLogger);
const inputController = new InputController(eventBus);

// 6. AI & COGNITIVE
const cosmicAI = new CosmicAwarenessAgent(eventBus, dataLogger);

// 7. THEORY IMPLEMENTATION
const cstCompute = new CSTComputeEngine(eventBus);

// 8. START READY FLAG
window.systemReady = true;
eventBus.emit('system:ready');
```

### Step 2.2: Unified State Management
Create centralized state object:

```javascript
const STATE = {
    // Mode Management
    currentMode: 'universe', // 'universe' | 'surface' | 'echo'
    
    // Simulation Parameters
    params: {
        Ec: 1.2,        // Energy scaling
        lambda: 0.25,   // Chaos factor
        zeta: 0.985,    // Motion damping
        omega: 0.62,    // Spectral hue
        U_grav: 0.55,   // Gravitational strength
        phi: 1.618033988749895 // Golden ratio
    },
    
    // Sensor Readings
    sensors: {
        audio: { avgFreq: 0, spectralBands: new Array(8).fill(0) },
        video: { detections: [] },
        geolocation: { lat: null, lon: null },
        ambientLight: { lux: null }
    },
    
    // External Data
    external: {
        usgs: { earthquakes: [] },
        nasa: { apod: null },
        donki: { events: [] }
    },
    
    // Theory State (12D CST)
    cst: {
        h12: new Array(12).fill(0),  // 12D state vector
        x12: new Array(12).fill(0),  // Internal state
        m12: new Array(12).fill(0),  // Memory (EMA)
        connectivity: 0,              // Ωᵢ
        psi: 0                        // ψ sum
    },
    
    // AI State
    ai: {
        seed: null,
        intention: '',
        futureEvents: [],
        bias: { exploration: 0.5, harmony: 0.5 }
    },
    
    // Runtime
    runtime: {
        fps: 0,
        frameCount: 0,
        deltaTime: 0,
        objectCount: 0
    }
};
```

---

## 🧩 PHASE 3: MODULAR INTEGRATION

### Step 3.1: EventBus Unification
Merge all EventBus implementations into a single, comprehensive version:

**Required Features:**
- Channel-based event routing
- Wildcard subscriptions (`*` and `namespace:*`)
- Event history buffer (last 100 events)
- Priority handling
- Async event emission
- Debug logging capability

```javascript
class EventBus {
    constructor() {
        this.listeners = new Map(); // channel -> Set of callbacks
        this.history = [];          // Last 100 events
        this.maxHistory = 100;
        this.debugMode = false;
    }
    
    on(channel, callback, priority = 0) { /* ... */ }
    emit(channel, data) { /* ... */ }
    off(channel, callback) { /* ... */ }
    once(channel, callback) { /* ... */ }
    clear(channel) { /* ... */ }
    getHistory(channel, limit = 10) { /* ... */ }
    enableDebug() { this.debugMode = true; }
}
```

### Step 3.2: DataLogger Integration
Merge dual-channel logging system:

**Required Channels:**
1. **Ledger** - Human-readable narrative log
   - Seed generation events
   - AI intentions
   - Status updates
   - Anomalies/warnings

2. **Telemetry** - Machine-readable data stream
   - Sensor readings
   - CST parameters
   - External data feeds
   - Performance metrics

```javascript
class DataLogger {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.ledger = [];      // Narrative entries
        this.telemetry = [];   // Data snapshots
        this.filters = {
            ledger: { level: 'all', categories: [] },
            telemetry: { channels: [], timeRange: null }
        };
    }
    
    logLedger(level, category, message, metadata = {}) { /* ... */ }
    logTelemetry(channel, data, timestamp = Date.now()) { /* ... */ }
    exportJSON() { /* ... */ }
    applyFilter(type, filterConfig) { /* ... */ }
}
```

### Step 3.3: Sensor Suite Consolidation
Unified sensor management:

```javascript
class SensorSuite {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.sensors = {
            audio: null,
            video: null,
            geolocation: null,
            ambientLight: null
        };
        this.active = new Set();
    }
    
    async initAudio() {
        // Tone.js integration
        // FFT analysis → 8 spectral bands
        // Emit: 'sensor:audio', { avgFreq, bands, waveform }
    }
    
    async initVideo() {
        // ml5 object detection
        // Emit: 'sensor:video', { detections: [{ label, confidence, bbox }] }
    }
    
    async initGeolocation() {
        // Navigator API
        // Emit: 'sensor:geolocation', { lat, lon, accuracy }
    }
    
    async initAmbientLight() {
        // AmbientLightSensor API (if available)
        // Emit: 'sensor:ambientLight', { lux }
    }
}
```

### Step 3.4: Simulation Engine Integration

#### ProceduralGenerationEngine (PGE)
**Features:**
- Star field generation (10k-100k particles)
- Procedural planets (texture, rings, moons)
- Nebula clouds (instanced sprites)
- Asteroid belts (orbital mechanics)
- Comets (tail particles)
- Black holes (Schwarzschild radius, accretion disk, lensing effect)
- Gravitational interactions

**Implementation Notes:**
- Uses instanced rendering for performance
- Entities store 12D state in `userData.h12`
- Mass/radius computed from audio signatures
- Orbital parameters from φ-based harmonics

#### QuantumEventManager (QEM)
**Features:**
- Soul Dust instantiation (audio-driven)
- Swirl dynamics (vortex attraction)
- Spectral color mapping (frequency → HSL)
- Particle genealogy tracking
- Lifecycle management (birth → maturation → decay)

**Implementation Notes:**
- Each particle is a "quantum event"
- Position influenced by: audio amplitude, spectral band, chaos factor
- Velocity damping via ζ parameter
- Cleanup threshold: particles beyond 500 units or age > 60s

#### SurfaceManager
**Features:**
- Terrain generation (Perlin noise, multi-octave)
- Ocean surface (animated plane with refraction)
- Sky dome (gradient + day-night cycle)
- Vegetation (instanced grass/trees, L-system potential)
- Sentinels (stationary observation points)
- Motes (bio-inspired, camera-reactive)
- Collision detection
- Local gravity simulation

**Implementation Notes:**
- Only active in 'surface' mode
- HUD shows terrain stats
- Flora density based on AI intention
- Seed dispersal system (future feature hook)

#### AudioReactiveSystem
**Features:**
- Secondary particle emission (beat-reactive)
- Spectrum line visualization
- Camera shake on bass hits
- Bloom intensity modulation

#### MemoryEchoEngine
**Features:**
- File particlization (ROM/binary data)
- Emulator integration hooks
- Echo mode visualization
- Data catalyst loading

---

## 🎨 PHASE 4: UI & RENDERING

### Step 4.1: Unified UI System
Merge all UI panels into cohesive tab structure:

**Tab Structure:**
1. **Controls** - Session, modes, quick actions
2. **Graphics** - Quality presets, post-processing toggles
3. **Data** - Seed visualizer, AI intention, sensor status
4. **Telemetry** - Live data streams, filters, export
5. **Cognitive** - AI controls, future events, bias sliders
6. **Surface** - Terrain params, vegetation, day-night cycle
7. **CST ψ** - Live theory computations, 12D state overlay

**Hotkeys:**
- `H` - Toggle all UI
- `Ctrl+Alt+D` - Developer mode
- `M` - Motion blur toggle
- `B` - Bloom toggle
- `V` - Vignette toggle
- `1-9` - View presets
- `Esc` - Exit pointer lock

### Step 4.2: Post-Processing Pipeline
Integrate ALL composer passes:

```javascript
const passes = {
    // Core
    fxaa: new FXAAPass(),
    
    // Effects
    bloom: new UnrealBloomPass(resolution, strength, radius, threshold),
    vignette: new ShaderPass(VignetteShader),
    film: new FilmPass(noiseIntensity, scanlinesIntensity, scanlinesCount, grayscale),
    afterimage: new AfterimagePass(damp),
    rgbShift: new ShaderPass(RGBShiftShader),
    
    // Advanced
    godrays: new ShaderPass(GodraysShader), // Near massive bodies
    pixelation: new ShaderPass(PixelShader),
    toon: new ShaderPass(ToonShader),
    lensing: new ShaderPass(GravitationalLensingShader), // Near black holes
    swirl: new ShaderPass(SwirlShader) // QEM mode
};
```

**Quality Presets:**
- **Anime** - Toon + pixelation + reduced particles
- **Low** - FXAA only, 10k particles max
- **Medium** - FXAA + bloom + vignette, 50k particles
- **High** - All effects except toon/pixel, 100k particles
- **Ultra** - All effects, unlimited particles

---

## 🔬 PHASE 5: THEORY IMPLEMENTATION (12D CST v3)

### Step 5.1: Entity State Tracking
Every simulation entity gets:

```javascript
entity.userData = {
    // Core Identity
    uuid: uuidv4(),
    type: 'star' | 'planet' | 'blackhole' | 'soul_dust' | 'sentinel' | 'mote',
    createdAt: Date.now(),
    
    // 12D State Vector
    h12: new Float32Array(12), // [h₁, h₂, ..., h₁₂]
    
    // Internal State
    x12: new Float32Array(12), // Current internal state
    
    // Memory (Exponential Moving Average)
    m12: new Float32Array(12), // m₁₂(t) = α·x₁₂(t) + (1-α)·m₁₂(t-1)
    memoryAlpha: 0.1,
    
    // Connectivity
    connectivity: 0.0, // Ωᵢ heuristic
    
    // Physics
    mass: 1.0,
    radius: 1.0,
    velocity: new THREE.Vector3(),
    
    // Audio Signature
    audioSignature: {
        birthFreq: 0,
        spectralBucket: 0, // 0-7
        amplitudeHistory: []
    },
    
    // ML Similarity (if video active)
    mlOverlap: []
};
```

### Step 5.2: ψ Computation Engine
Real-time CST formula evaluation:

```javascript
class CSTComputeEngine {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.c = 299792458; // Speed of light (m/s)
        this.phi = 1.618033988749895;
    }
    
    computePsi(STATE, entities) {
        const { Ec, lambda, omega, U_grav } = STATE.params;
        const { avgFreq, spectralBands } = STATE.sensors.audio;
        
        // Term 1: c² · φ · Ec
        const term1 = Math.pow(this.c, 2) * this.phi * Ec;
        
        // Term 2: λ (from audio)
        const term2 = lambda * avgFreq;
        
        // Term 3: Ω · Ec (spectral hue)
        const term3 = omega * Ec;
        
        // Term 4: U_grav (sum over massive bodies)
        let term4 = 0;
        entities.forEach(e => {
            if (e.userData.type === 'star' || e.userData.type === 'blackhole') {
                const G = 6.674e-11;
                const r = e.position.length();
                term4 += G * e.userData.mass / (r + 1); // Avoid divide-by-zero
            }
        });
        term4 *= U_grav;
        
        // Term 5: Σρ_sd (Soul Dust density)
        const soulDustEntities = entities.filter(e => e.userData.type === 'soul_dust');
        const term5 = soulDustEntities.length * 0.01; // Proxy density
        
        // Sum
        const psi = term1 + term2 + term3 + term4 + term5;
        
        // Update STATE
        STATE.cst.psi = psi;
        
        // Emit for logging
        this.eventBus.emit('cst:psi_update', {
            term1, term2, term3, term4, term5, psi,
            timestamp: Date.now()
        });
        
        return psi;
    }
    
    updateEntityState(entity, deltaTime) {
        // Update x12 based on physics/interactions
        // Update m12 with EMA
        // Compute connectivity Ωᵢ
        // Store in entity.userData
    }
}
```

### Step 5.3: ψ Overlay HUD
Real-time display panel:

```html
<div id="psiPanel" class="ui-panel">
    <h3>CST ψ — Live Terms</h3>
    <div class="grid">
        <div class="label">c²·φ·E_c</div><div class="value" id="psi_term1">--</div>
        <div class="label">λ (audio)</div><div class="value" id="psi_term2">--</div>
        <div class="label">Ω·E_c</div><div class="value" id="psi_term3">--</div>
        <div class="label">U_grav</div><div class="value" id="psi_term4">--</div>
        <div class="label">Σρ_sd</div><div class="value" id="psi_term5">--</div>
        <div class="label">ψ (sum)</div><div class="value" id="psi_sum">--</div>
    </div>
    <div class="history-graph" id="psi_graph">
        <!-- Canvas for ψ history plot -->
    </div>
</div>
```

---

## 🤖 PHASE 6: AI & COGNITIVE SYSTEMS

### Step 6.1: CosmicAwarenessAgent
**Responsibilities:**
- Generate deterministic seed from sensor inputs
- Formulate intentions based on seed + bias
- Schedule future events
- Learn preferences from user interactions
- Orchestrate world events

**Event Types:**
- `flora_growth` - Increase vegetation density
- `solar_flare` - Emit particles from nearest star
- `meteor_shower` - Spawn comet swarm
- `lightning_storm` - Surface electrical activity
- `comet_arrival` - Large comet with tail
- `black_hole_spawn` - Massive gravity well
- `bloom_surge` - Visual effect intensity

**Implementation:**
```javascript
class CosmicAwarenessAgent {
    constructor(eventBus, dataLogger) {
        this.eventBus = eventBus;
        this.logger = dataLogger;
        this.seed = null;
        this.intention = '';
        this.futureEvents = [];
        this.bias = { exploration: 0.5, harmony: 0.5 };
        this.preferences = { learned: [] };
    }
    
    generateSeed(sensorData) {
        // Combine: audio hash + geolocation + timestamp + video detections
        // Use φ-based mixing for determinism
        const hash = this.hashFunction([
            sensorData.audio.avgFreq,
            sensorData.geolocation.lat,
            sensorData.geolocation.lon,
            Date.now(),
            sensorData.video.detections.length
        ]);
        this.seed = hash;
        this.logger.logLedger('info', 'AI', `Seed generated: ${hash}`);
        this.eventBus.emit('ai:seed_generated', { seed: hash });
        return hash;
    }
    
    formulateIntention(seed) {
        // Simple Markov chain or template-based generation
        const templates = [
            "Seeking harmony in the quantum flux...",
            "Exploring dimensional boundaries...",
            "Orchestrating cosmic resonance...",
            "Observing emergent patterns..."
        ];
        this.intention = templates[seed % templates.length];
        this.logger.logLedger('info', 'AI', `Intention: ${this.intention}`);
        this.eventBus.emit('ai:intention_update', { intention: this.intention });
    }
    
    scheduleFutureEvent(eventType, delayMs) {
        const triggerTime = Date.now() + delayMs;
        this.futureEvents.push({ type: eventType, triggerTime });
        this.logger.logLedger('info', 'AI', `Scheduled ${eventType} in ${delayMs}ms`);
    }
    
    tick(currentTime) {
        // Check if any events should fire
        this.futureEvents = this.futureEvents.filter(evt => {
            if (currentTime >= evt.triggerTime) {
                this.eventBus.emit(`ai:event:${evt.type}`, { timestamp: currentTime });
                this.logger.logLedger('event', 'AI', `Triggered: ${evt.type}`);
                return false; // Remove from queue
            }
            return true;
        });
    }
}
```

---

## 🔄 PHASE 7: MODE MANAGEMENT

### Step 7.1: Non-Destructive Mode Switching
Implement `_applyMode(mode)` that toggles visibility WITHOUT destroying objects:

```javascript
function _applyMode(newMode) {
    STATE.currentMode = newMode;
    
    switch(newMode) {
        case 'universe':
            // Show: PGE objects, QEM particles, AudioReactive
            proceduralGenEngine.setVisible(true);
            quantumEventManager.setVisible(true);
            audioReactiveSystem.setVisible(true);
            
            // Hide: Surface, MemoryEcho
            surfaceManager.setVisible(false);
            memoryEchoEngine.setVisible(false);
            
            // Camera: Free orbit/spaceship
            // Effects: Godrays near massive bodies, lensing near black holes
            composer.passes.find(p => p.name === 'godrays').enabled = true;
            composer.passes.find(p => p.name === 'lensing').enabled = true;
            
            // HUD: Hide surface stats
            document.getElementById('surface-hud').classList.add('hidden');
            break;
            
        case 'surface':
            // Show: Surface terrain, vegetation, sentinels, motes
            surfaceManager.setVisible(true);
            
            // Hide: Galaxy particles (far), QEM (optional: keep ambient)
            proceduralGenEngine.setVisibleByType('star', false);
            proceduralGenEngine.setVisibleByType('planet', false);
            quantumEventManager.setVisible(false);
            
            // Camera: First-person on terrain
            // Enable collision + gravity
            inputController.enableSurfacePhysics(true);
            
            // Effects: Disable godrays/lensing
            composer.passes.find(p => p.name === 'godrays').enabled = false;
            composer.passes.find(p => p.name === 'lensing').enabled = false;
            
            // HUD: Show surface stats
            document.getElementById('surface-hud').classList.remove('hidden');
            break;
            
        case 'echo':
            // Show: MemoryEcho visualization
            memoryEchoEngine.setVisible(true);
            
            // Hide: All other engines
            proceduralGenEngine.setVisible(false);
            quantumEventManager.setVisible(false);
            surfaceManager.setVisible(false);
            audioReactiveSystem.setVisible(false);
            
            // Camera: Fixed orbit around data structure
            // Effects: Swirl pass, afterimage
            composer.passes.find(p => p.name === 'swirl').enabled = true;
            composer.passes.find(p => p.name === 'afterimage').enabled = true;
            break;
    }
    
    eventBus.emit('mode:changed', { mode: newMode });
    dataLogger.logLedger('info', 'System', `Mode switched to: ${newMode}`);
}
```

---

## 🔁 PHASE 8: ANIMATION LOOP

### Step 8.1: Master Update Loop
**Critical:** Only start loop AFTER all systems initialized (`window.systemReady === true`)

```javascript
let lastTime = performance.now();
let frameCount = 0;

function animate() {
    if (!window.systemReady) {
        requestAnimationFrame(animate);
        return;
    }
    
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
    lastTime = currentTime;
    frameCount++;
    
    // FPS calculation (every 60 frames)
    if (frameCount % 60 === 0) {
        STATE.runtime.fps = Math.round(1 / deltaTime);
        document.getElementById('hudFps').textContent = STATE.runtime.fps;
    }
    
    // ==============================
    // 1. UPDATE INPUT
    // ==============================
    inputController.update(deltaTime);
    
    // ==============================
    // 2. UPDATE SENSORS (throttled to avoid overhead)
    // ==============================
    if (frameCount % 10 === 0) { // Every 10 frames
        sensorSuite.poll(STATE.sensors);
    }
    
    // ==============================
    // 3. UPDATE EXTERNAL DATA (very low frequency)
    // ==============================
    if (frameCount % 1800 === 0) { // Every 30 seconds at 60fps
        externalDataManager.refresh();
    }
    
    // ==============================
    // 4. UPDATE AI
    // ==============================
    cosmicAI.tick(currentTime);
    
    // ==============================
    // 5. UPDATE SIMULATION ENGINES (mode-dependent)
    // ==============================
    switch(STATE.currentMode) {
        case 'universe':
            proceduralGenEngine.update(deltaTime, STATE);
            quantumEventManager.update(deltaTime, STATE);
            audioReactiveSystem.update(deltaTime, STATE);
            break;
        case 'surface':
            surfaceManager.update(deltaTime, STATE);
            break;
        case 'echo':
            memoryEchoEngine.update(deltaTime, STATE);
            break;
    }
    
    // ==============================
    // 6. COMPUTE CST THEORY TERMS
    // ==============================
    const allEntities = [
        ...proceduralGenEngine.getEntities(),
        ...quantumEventManager.getEntities(),
        ...surfaceManager.getEntities()
    ];
    cstCompute.computePsi(STATE, allEntities);
    
    // Update each entity's 12D state
    allEntities.forEach(entity => {
        cstCompute.updateEntityState(entity, deltaTime);
    });
    
    // ==============================
    // 7. UPDATE UI (throttled)
    // ==============================
    if (frameCount % 5 === 0) {
        uiManager.update(STATE);
    }
    
    // ==============================
    // 8. RENDER
    // ==============================
    composer.render(deltaTime);
    
    // ==============================
    // 9. LOG TELEMETRY (throttled)
    // ==============================
    if (frameCount % 60 === 0) {
        dataLogger.logTelemetry('runtime', {
            fps: STATE.runtime.fps,
            deltaTime: deltaTime,
            objectCount: allEntities.length,
            mode: STATE.currentMode
        });
    }
    
    requestAnimationFrame(animate);
}

// GATE START UNTIL READY
window.addEventListener('load', () => {
    // Initialization code here...
    
    // After all init:
    window.systemReady = true;
    eventBus.emit('system:ready');
    animate();
});
```

---

## ✅ PHASE 9: VERIFICATION CHECKLIST

After integration, verify each feature:

### 9.1 Core Systems
- [ ] EventBus emits and receives events correctly
- [ ] DataLogger writes to both ledger and telemetry
- [ ] All sensors initialize and emit data
- [ ] External data fetches (USGS, NASA) work with backoff

### 9.2 Simulation Engines
- [ ] PGE generates stars, planets, nebula correctly
- [ ] QEM Soul Dust responds to audio input
- [ ] Surface Manager renders terrain, vegetation, motes
- [ ] AudioReactive particles spawn on beats
- [ ] MemoryEcho loads file data

### 9.3 UI & Controls
- [ ] All 7 tabs render and switch correctly
- [ ] Hotkeys work (H, Ctrl+Alt+D, M, B, V, etc.)
- [ ] Sliders update STATE.params in real-time
- [ ] Seed visualizer pulses with data streams
- [ ] CST ψ overlay shows live computations

### 9.4 Rendering
- [ ] All post-processing passes can be toggled
- [ ] Quality presets change performance correctly
- [ ] Godrays appear near massive bodies
- [ ] Lensing activates near black holes
- [ ] No z-fighting or rendering artifacts

### 9.5 Theory Implementation
- [ ] Entities have valid `userData.h12`, `x12`, `m12`
- [ ] ψ computation runs without errors
- [ ] ψ overlay HUD updates in real-time
- [ ] Connectivity Ωᵢ shows non-zero values

### 9.6 Mode Switching
- [ ] 'universe' mode shows galaxy
- [ ] 'surface' mode swaps to terrain + HUD
- [ ] 'echo' mode isolates MemoryEcho
- [ ] No errors when switching modes
- [ ] Objects persist between switches

### 9.7 AI & Events
- [ ] Seed generation uses live sensor data
- [ ] Intention updates on seed change
- [ ] Future events fire at scheduled times
- [ ] Events log correctly to ledger

### 9.8 Data Export
- [ ] JSON export includes ledger + telemetry
- [ ] Filters apply correctly
- [ ] Download triggers browser save dialog

### 9.9 Performance
- [ ] FPS stays above 30 on medium preset
- [ ] No memory leaks after 5 minutes
- [ ] Object count stays reasonable (<200k)

### 9.10 Edge Cases
- [ ] No errors if sensors denied
- [ ] Graceful fallback if ml5 fails
- [ ] No crash on rapid mode switching
- [ ] CleanupScene only removes generated meshes, not engines

---

## 🚀 PHASE 10: FINAL POLISH & DOCUMENTATION

### 10.1 Code Organization
Structure the final `greatcosmos.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- METADATA & DEPENDENCIES -->
</head>
<body>
    <!-- UI STRUCTURE -->
    
    <script type="module">
        // ======================================
        // IMPORTS
        // ======================================
        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        // ... all imports
        
        // ======================================
        // CONSTANTS & CONFIGURATION
        // ======================================
        const CONFIG = { /* ... */ };
        
        // ======================================
        // STATE MANAGEMENT
        // ======================================
        const STATE = { /* ... */ };
        
        // ======================================
        // CLASS DEFINITIONS
        // ======================================
        class EventBus { /* ... */ }
        class DataLogger { /* ... */ }
        class SensorSuite { /* ... */ }
        class ProceduralGenerationEngine { /* ... */ }
        class QuantumEventManager { /* ... */ }
        class SurfaceManager { /* ... */ }
        class AudioReactiveSystem { /* ... */ }
        class MemoryEchoEngine { /* ... */ }
        class ExternalDataManager { /* ... */ }
        class UIManager { /* ... */ }
        class InputController { /* ... */ }
        class CosmicAwarenessAgent { /* ... */ }
        class CSTComputeEngine { /* ... */ }
        
        // ======================================
        // INITIALIZATION
        // ======================================
        async function init() { /* ... */ }
        
        // ======================================
        // ANIMATION LOOP
        // ======================================
        function animate() { /* ... */ }
        
        // ======================================
        // UTILITY FUNCTIONS
        // ======================================
        function _applyMode(mode) { /* ... */ }
        function cleanupScene() { /* ... */ }
        // ... other utilities
        
        // ======================================
        // ENTRY POINT
        // ======================================
        window.addEventListener('load', async () => {
            await init();
            window.systemReady = true;
            animate();
        });
    </script>
</body>
</html>
```

### 10.2 Inline Documentation
Add comprehensive JSDoc comments:

```javascript
/**
 * ProceduralGenerationEngine
 * ===========================
 * Generates and manages cosmic entities (stars, planets, nebula, etc.)
 * 
 * Features:
 * - Instanced rendering for performance (10k-100k particles)
 * - φ-based orbital mechanics
 * - 12D state tracking per entity
 * - Gravitational interactions
 * - Audio-reactive mass/radius
 * 
 * Dependencies:
 * - Three.js scene
 * - EventBus for coordination
 * - DataLogger for telemetry
 * 
 * Initialization:
 * ```
 * const pge = new ProceduralGenerationEngine(scene, eventBus, dataLogger);
 * await pge.init();
 * ```
 * 
 * Usage:
 * ```
 * pge.spawnStar({ mass: 100, radius: 50, position: [0, 0, 0] });
 * pge.update(deltaTime, STATE);
 * ```
 */
class ProceduralGenerationEngine {
    // ...
}
```

### 10.3 README Section
Add to repository README:

```markdown
## 🌌 GreatCosmos — Unified World Model

### Initialization Order
1. Core infrastructure (EventBus, DataLogger)
2. Graphics foundation (Renderer, Scene, Camera, Composer)
3. Simulation engines (PGE, QEM, Surface, AudioReactive, MemoryEcho)
4. Sensors & external data
5. UI & controls
6. AI & cognitive systems
7. Theory computation engine
8. Set `window.systemReady = true`
9. Start animation loop

### Mode Management
- **Universe Mode**: Galaxy-scale simulation with PGE + QEM
- **Surface Mode**: Planetary terrain with vegetation + motes
- **Echo Mode**: Memory artifact visualization

Switch modes via UI buttons or:
```javascript
_applyMode('surface');
```

### Runtime Verification
Open browser console and run:
```javascript
// Check system ready
console.log(window.systemReady); // Should be true

// Check entity count
console.log(proceduralGenEngine.getEntities().length);

// Check ψ computation
console.log(STATE.cst.psi);

// Verify event flow
eventBus.enableDebug();
```

### Performance Tuning
- **Quality Preset**: Set via UI → Graphics tab
- **Particle Limit**: Adjust in CONFIG object
- **Post-Processing**: Toggle individual passes via hotkeys

### Theory Implementation
Each entity tracks:
- `h12`: 12-dimensional state vector
- `x12`: Internal state
- `m12`: Memory (EMA)
- `connectivity`: Ωᵢ heuristic

ψ formula evaluated every frame:
```
ψ = c²·φ·Ec + λ·audio + Ω·Ec + U_grav + Σρ_sd
```

View live computations via CST ψ Overlay (hotkey: `P`)
```

---

## 📝 EXECUTION NOTES FOR CLAUDE CODE

### Critical Success Factors:
1. **READ ALL FILES FIRST** - Don't start coding until you have complete inventory
2. **PRESERVE EVERYTHING** - This is additive merge, not rewrite
3. **TEST INCREMENTALLY** - After each major module integration, verify it works
4. **RESPECT INITIALIZATION ORDER** - Wrong order = undefined errors
5. **USE COMMENTS LIBERALLY** - Mark every merged section with source file
6. **VERIFY HOTKEYS** - Many overlapping keybinds need deduplication
7. **CHECK EVENT CHANNELS** - EventBus channels must be consistent across modules
8. **VALIDATE CST MATH** - Theory computations must be numerically stable
9. **PERFORMANCE MATTERS** - Profile after integration, optimize instancing
10. **USER EXPERIENCE** - UI must be intuitive, no hidden features

### Common Pitfalls to Avoid:
- ❌ Starting animation loop before `systemReady` flag
- ❌ Overwriting EventBus/DataLogger instead of merging
- ❌ Forgetting to hide/show objects on mode switch
- ❌ Not throttling sensor polling (causes lag)
- ❌ Hardcoding values instead of using STATE object
- ❌ Missing cleanup in CleanupScene function
- ❌ Ignoring mobile/touch events
- ❌ Not handling sensor permission denials
- ❌ Leaving debug console.log statements
- ❌ Breaking existing Three.js import map

### Recommended Workflow:
1. Clone current `greatcosmos.html` to `greatcosmos_backup.html`
2. Read and analyze all source files (30 min)
3. Create integration plan comment block (15 min)
4. Merge EventBus + DataLogger (1 hour)
5. Merge UI system (1 hour)
6. Merge sensors + external data (45 min)
7. Merge PGE (1.5 hours)
8. Merge QEM (1 hour)
9. Merge Surface (1 hour)
10. Merge AudioReactive + MemoryEcho (45 min)
11. Integrate AI + CST compute (1 hour)
12. Wire animation loop (30 min)
13. Test and debug (2 hours)
14. Polish and document (1 hour)

**Total Estimated Time:** ~12-14 hours

### Testing Protocol:
After integration, run through this checklist in browser:
1. Open browser console (F12)
2. Grant all sensor permissions when prompted
3. Click "Initiate Genesis"
4. Verify no console errors
5. Check FPS > 30
6. Switch between all modes
7. Test all hotkeys
8. Verify CST ψ overlay shows non-zero values
9. Export JSON and verify contents
10. Run for 5 minutes, check memory usage

### Success Criteria:
✅ Single `greatcosmos.html` file  
✅ All features from source files present  
✅ No console errors  
✅ Smooth 30+ FPS on medium preset  
✅ Mode switching works flawlessly  
✅ CST theory computations active  
✅ AI generates seeds and intentions  
✅ UI fully functional  
✅ Hotkeys responsive  
✅ Data export works  

---

## 🎓 THEORETICAL CONTEXT (for documentation)

This simulation implements the **12-Dimensional Cosmic Synapse Theory (12D CST v3)**, a unified framework combining:
- Fundamental physics (E=mc², gravitational fields)
- Chaos theory (Lyapunov exponents, strange attractors)
- Golden Ratio harmonics (φ-based optimization)
- Stochastic resonance (signal amplification through noise)
- Graph signal processing (multi-dimensional state propagation)

The core formula:
```
ψ(t) = c²·φ·Ec + λ(audio) + Ω·Ec + U_grav + Σρ_sd
```

Where:
- `c²·φ·Ec` = Energy-information equivalence scaled by golden ratio
- `λ(audio)` = Real-time chaos injection from environmental audio
- `Ω·Ec` = Spectral hue coupling (color-frequency resonance)
- `U_grav` = Gravitational potential field
- `Σρ_sd` = Soul Dust (quantum event) density

Each entity maintains:
- **h12**: 12D state vector (position, momentum, spin, etc. in extended space)
- **x12**: Internal dynamics (hidden variables)
- **m12**: Memory trace (exponential moving average)
- **Ωᵢ**: Connectivity (graph Laplacian proxy)

This creates a deterministic yet audio-reactive universe where every particle is a "cosmic synapse" exchanging information through vibrational coupling.

---

## 🔚 DELIVERABLE

**Single file:** `greatcosmos_UNIFIED.html`

**Contains:**
- 11,000+ lines of integrated code
- All features from 6 source files
- Comprehensive inline documentation
- Working 12D CST implementation
- Production-ready UI
- Robust error handling
- Performance optimizations

**Ready for:**
- Academic publication
- Portfolio showcase
- Further development
- Community release

---

**END OF MASTER INTEGRATION PROMPT**

**Next Steps:** 
1. Ensure GitHub repo `cosmo sim/` folder is accessible
2. Run this prompt in Claude Code
3. Monitor integration process
4. Test final output thoroughly
5. Iterate based on verification checklist

Good luck with the integration! 🌌✨
