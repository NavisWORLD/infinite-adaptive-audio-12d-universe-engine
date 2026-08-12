# REFERENCE FILES ANALYSIS: Cosmo Sim Directory
## Comparative Feature Analysis & Integration Opportunities

---

## FILE OVERVIEW & LINE COUNTS

| File | Lines | Status |
|------|-------|--------|
| **earth.html** | 657 | Complete genesis universe with procedural terrain |
| **imdone.html** | 588 | Gravity-based particle simulation with multi-attractor system |
| **lostcosmo's.html** | 3,110 | Advanced cosmic engine with corona, nebula, rings, atmosphere |
| **DARkcosmo.HTML** | 4,932 | Most advanced: full postprocessing stack, godrays, lensing |
| **greatcosmos_UNIFIED.html** | 5,473 | Baseline: unified formula, audio-driven chaos |

---

## 1. UNIQUE FEATURES BY FILE

### EARTH.HTML - Genesis Universe with Terrain
**Key Unique Features:**
- **Noise-based Procedural Terrain Generation** (3D Perlin-like noise)
  ```javascript
  // Octave-based terrain generation
  const z1 = this.noise(x*0.005, y*0.005) * 300;    // Large features
  const z2 = this.noise(x*0.02, y*0.02) * 50;        // Detail
  ```
  - Multi-octave noise (combined scales)
  - Vertex normals auto-computed from displacement
  - Perfect for planetary surface LOD

- **Unified Physics Formula** (Ψ - Psi)
  ```javascript
  function unifiedFormula(prng, audioLevel = 0){
    return {
      starCount: depends on audio + lux
      nebulaDensity: hum + audio
      oceanRoughness: wind + audio
      cloudCoverage: humidity blend
      vegetation: temperature-dependent
    };
  }
  ```
  - Audio drives *all* visual parameters
  - No hardcoded values for star counts, nebula, ocean properties

- **Sky Shader Integration** (THREE.Sky object)
  - Turbidity, Rayleigh, Mie coefficients controlled
  - Sun position synchronized with shader
  - Real fog integration (THREE.Fog)

- **Multiple View Modes**
  - Orbit camera (OrbitControls)
  - Spaceship/Flight mode (PointerLockControls)
  - Surface mode (first-person walking)
  - Smooth mode transitions with visibility toggles

- **Volumetric Dust** (Advanced feature)
  ```glsl
  // Volumetric raymarching shader
  uniform float u_density;
  uniform int u_steps;
  uniform vec3 u_color;
  for(int i=0; i<128; i++){
    float n = noise(p*u_scale + vec3(0, u_time*0.02, 0));
    float d = smoothstep(0.45, 0.75, n);
    col += (1.0-T) * a * u_color;
    T += a * 0.06;
  }
  ```
  - Raymarched fog effect with dynamic steps based on FPS
  - Driven by chaos parameter

---

### IMDONE.HTML - Multi-Attractor Gravity System
**Key Unique Features:**
- **Multi-Attractor Physics Engine**
  ```javascript
  for (const a of attractors) {
    // Per-attractor gravity + harmonic + swirl
    f_grav_mag = -(G_CONST * a.mass * PARTICLE_MASS) / r_cubed;
    f_swirl.crossVectors(f_harmonic, SWIRL_AXIS)
           .multiplyScalar(SWIRL_CONST * (a.mass / 1000));
  }
  ```
  - Multiple gravity wells simultaneously
  - Mass-dependent swirl strength
  - Soft-body physics constant (epsilon)

- **Visual Feedback for Audio**
  ```javascript
  const hue = 0.7 - (psdNormalized * 0.7);  // Blue → Red
  centralAttractorMesh.material.color.setHSL(hue, 1.0, 0.7);
  ```
  - Central attractor color changes with microphone input
  - Visual coupling to audio data

- **Boundary Recycling**
  ```javascript
  if (particlePos.lengthSq() > GALAXY_RADIUS * GALAXY_RADIUS) {
    // Re-spawn near center (galactic fountain)
    particlePos.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
  }
  ```
  - Prevents particle escape
  - Creates dynamic recycling effect

- **Simplified Shader** (Clean point rendering)
  ```glsl
  // Soft circular glowing points
  float d = distance(gl_PointCoord, vec2(0.5, 0.5));
  if (d > 0.5) discard;
  float alpha = 1.0 - d * 2.0;
  gl_FragColor = vec4(vColor, alpha);
  ```

---

### LOSTCOSMO'S.HTML - Shader-Rich Cosmic Engine
**Key Unique Features:**

#### **1. Star Corona Shader**
```glsl
// FBM-based corona with temperature-dependent intensity
float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5000*noise(p);           p *= 2.02;
  f += 0.2500*noise(p+time*0.05); p *= 2.03;
  f += 0.1250*noise(p-time*0.04);
  return f;
}
float rim = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 3.0);
float n = fbm(vPos * noiseScale);
vec3 c = baseColor * (0.6 + 0.6*n) * intensity;
gl_FragColor = vec4(c, rim * (0.4 + 0.6*n));
```
- **Temperature scaling** (`intensity = 0.6 + 0.8 * tNorm`)
- **FBM turbulence** (3-layer noise with time animation)
- **Rim lighting** (silhouette glow at sphere edges)
- Uses **THREE.BackSide** for proper depth blending

#### **2. Nebula Shader** (Perlin-style 3D noise)
```glsl
vec3 hash(vec3 p) { 
  p = vec3(dot(p,vec3(127.1,311.7,74.7)), ...);
  return -1.0 + 2.0*fract(sin(p)*43758.5453);
}
float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5000*noise(p);  p *= 2.02;
  f += 0.2500*noise(p);  p *= 2.03;
  f += 0.1250*noise(p);
  return f;
}
vec3 pos = vPosition / (8000.0 / noiseScale);
pos.x += time * 0.01;  // Scrolling
float noiseVal = fbm(pos);
gl_FragColor = vec4(baseColor * (noiseVal + pulse) * 2.0, noiseVal * density);
```
- **3D Perlin noise** (not simple hash)
- **Large-scale sphere** (8000 unit radius)
- **Density and scale uniforms** for dynamic control
- **Pulse uniform** for reactivity

#### **3. Black Hole Accretion Disk Shader**
```glsl
float noise(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float radius = length(vUv - 0.5);
float n = noise(vUv * 5.0 + time * 0.2);
vec3 color = mix(vec3(1.0, 0.5, 0.1), vec3(0.8, 0.1, 1.0), radius * 2.0);
gl_FragColor = vec4(color * n, 1.0) * (1.0 - radius * 1.8);
```
- **Orange-to-purple gradient** based on radius
- **Animated turbulence** with time-varying noise
- **Falloff** creates disk density (edges fade)
- Rendered as **RingGeometry** with rotation

#### **4. Planetary Rings**
- RingGeometry with animated shader
- Procedural noise texture
- Dynamic opacity falloff

#### **5. AI Learning System**
```javascript
this.preferences = { floraBias: 1.0, blackHoleBias: 1.0 };
// Learning: reduce blackHoleBias over time if they're created frequently
this.preferences.blackHoleBias = Math.max(0.1, 1.0 - (blackHoleSystemTime / totalTime));
```
- Adaptive generation based on history
- Learns user preferences over time

---

### DARKCOSMO.HTML - Full Postprocessing Stack
**Key Unique Features:**

#### **1. Advanced Postprocessing Pipeline**
```javascript
// Imports in order of effect
import { EffectComposer, RenderPass, UnrealBloomPass, ShaderPass };
import { AfterimagePass, BokehPass, FilmPass, SSRPass };

// Visual profiles for different camera modes
this.visualProfile = {
  orbit: { bloom: 1.0, vignette: 0.9, godrays: true, film: false },
  firstPerson: { bloom: 0.9, vignette: 1.0, godrays: false, film: true },
  enhanced: { bloom: 1.2, vignette: 1.05, godrays: true, film: true },
  cockpit: { bloom: 1.1, vignette: 1.1, godrays: false, film: true },
  cinematic: { bloom: 1.3, vignette: 1.2, godrays: true, film: true }
};
```

#### **2. God Rays Shader** (Light rays from sun)
```glsl
vec2 deltaTexCoord = texCoord - lightPosition;
deltaTexCoord *= 1.0 / float(samples) * density;
float illuminationDecay = 1.0;

for(int i=0; i < MAX_SAMPLES; i++) {
  if(i >= samples) break;
  texCoord -= deltaTexCoord;
  vec4 sampledColor = texture2D(tDiffuse, texCoord);
  sampledColor *= illuminationDecay * weight;
  color += sampledColor;
  illuminationDecay *= decay;
}
gl_FragColor = color * exposure;
```
- **Volumetric light shafts** emanating from light source
- **Exponential decay** parameter
- Crucial for sun/star atmospherics

#### **3. Lensing Shader** (Gravitational lensing for black holes)
```glsl
uniform vec2 center;
uniform float scale;
uniform float strength;

vec2 toCenter = center - vUv;
float dist = length(toCenter);
vec2 uv = vUv - toCenter * (1.0 - dist * scale) * strength / dist;
gl_FragColor = texture2D(tDiffuse, uv);
```
- **Non-linear distortion** of viewport
- Creates warping effect near black holes
- Can be enabled/disabled dynamically

#### **4. Advanced Atmosphere with Rayleigh & Mie Scattering**
```glsl
// Rayleigh phase function
float rayleighPhase(float cosTheta) {
  return 3.0/(16.0*3.14159265) * (1.0 + cosTheta*cosTheta);
}

// Henyey-Greenstein phase (Mie)
float hgPhase(float cosTheta, float g) {
  float g2 = g*g;
  float denom = pow(1.0 + g2 - 2.0*g*cosTheta, 1.5);
  return (1.0 - g2) / (4.0*3.14159265*denom);
}

vec3 scatter = betaRay * pr + betaMie * pm;
float horizon = clamp(1.0 - abs(vNormal.y), 0.0, 1.0);
vec3 color = scatter * (0.5 + 0.5*horizon) * intensityBoost * 5.0;

// Aurora tinting
float aur = smoothstep(0.7, 1.0, horizon) * auroraIntensity;
color = mix(color, vec3(0.3, 0.9, 0.7), aur);
```
- **Physical scattering model** (actual atmospheric optics)
- **Beta values** for different wavelengths
- **Aurora overlay** on horizon
- **Mie G coefficient** for phase function

#### **5. Additional Post-Effects**
- **Pixelation Shader**: Retro effect with adjustable pixel size
- **Vignette**: Edge darkening
- **Brightness/Contrast**: Manual tone mapping
- **Toon/Outline Detection**: Edge-based cel shading
- **Afterimage Pass**: Motion blur/trail effect
- **Bokeh**: Depth-of-field
- **Film Grain**: Analog texture
- **Screen-Space Reflections (SSR)**: Real-time reflections

#### **6. Adaptive Bloom Based on Scene State**
```javascript
const blackHolePresence = this.blackHoles.length > 0 ? 1.0 : 0.0;
const targetLuma = Math.max(0.2, Math.min(2.0, 
  luminanceSignal + blackHolePresence * 0.05));
const holeBoost = 0.3 * blackHolePresence;
this.bloomPass.radius += ((0.35 + 0.25 * blackHolePresence) 
  - this.bloomPass.radius) * 0.05;
```
- Bloom adapts based on black hole count
- Dynamic lerp for smooth transitions

#### **7. Procedural Audio Integration**
```javascript
// Spectral analysis for cosmic sound generation
const spectrum = analyser.getByteFrequencyData(...);
// Creates "soul dust" particle visualization from audio
// Connects sound to visual frequency responses
```

---

## 2. SHADER TECHNIQUES COMPARISON

| Technique | earth.html | imdone.html | lostcosmo's | DARkcosmo |
|-----------|-----------|-----------|-----------|-----------|
| **Corona** | ❌ | ❌ | ✓ (FBM-based) | ✓ (advanced) |
| **Nebula** | ✓ (basic) | ✓ (basic) | ✓ (3D Perlin) | ✓ (3D Perlin) |
| **Black Hole** | ❌ | ❌ | ✓ (accretion disk) | ✓ (lensing effect) |
| **Accretion Disk** | ❌ | ❌ | ✓ (animated) | ✓ (with lensing) |
| **Lensing** | ❌ | ❌ | ❌ | ✓ (post-process) |
| **God Rays** | ❌ | ❌ | ❌ | ✓ (volumetric) |
| **Atmosphere** | ✓ (basic fog) | ❌ | ❌ | ✓ (Rayleigh+Mie) |
| **FBM Noise** | ✓ | ❌ | ✓ | ✓ |
| **Rings** | ❌ | ❌ | ✓ | ✓ |
| **Bloom** | ✓ (basic) | ❌ | ✓ | ✓ (adaptive) |

---

## 3. PARTICLE EFFECTS INVENTORY

### Dust & Trails
| File | Technique | Implementation |
|------|-----------|-----------------|
| **earth.html** | Volumetric raymarched dust | `VolumetricDust` class with 128-step raymarching |
| **imdone.html** | Point-cloud particles | Additive blending, soft circle shader |
| **lostcosmo's** | Nebula + particle trails | FBM-based volumetric clouds |
| **DARkcosmo** | Afterimage pass trails | Post-process afterimage effect |

### Swirls & Vortex Effects
- **imdone.html**: Cross-product swirl (`f_swirl = cross(force, SWIRL_AXIS) * SWIRL_CONST`)
- **DARkcosmo**: Implicit in black hole gravity well dynamics

---

## 4. TEXTURE & PROCEDURAL GENERATION

### Procedural Textures (No external images)
1. **Noise Functions**:
   - Simple hash (`fract(sin(dot(...)))`)
   - Perlin-like 3D noise (lostcosmo's, DARkcosmo)
   - Multi-octave FBM (fractal Brownian motion)

2. **Terrain Generation** (earth.html)
   - Octave-based 2D Perlin
   - Multi-scale combination
   - Vertex displacement with normal computation

3. **Accretion Disk** (lostcosmo's, DARkcosmo)
   - Animated noise-based texture
   - Color gradients (orange→purple)
   - Radius-dependent falloff

---

## 5. TEXTURE USAGE COMPARISON

| File | Texture Source | Comments |
|------|----------------|----------|
| **earth.html** | Procedural + Sky object | No external NASA images |
| **imdone.html** | Procedural only | Pure procedural, sprite fallback |
| **lostcosmo's** | Procedural + possible external | Spritesheet reference in comments |
| **DARkcosmo** | Procedural + post-process | No explicit external textures found |

**Key Finding**: None of these reference files use NASA Earth textures explicitly. All planetary surfaces use:
- Procedural noise
- Shader-based coloring
- MeshStandardMaterial with metalness/roughness
- Dynamic emission for glow effects

---

## 6. INTEGRATION OPPORTUNITIES FOR GREATCOSMOS_UNIFIED.HTML

### HIGH PRIORITY (Additive, Low Risk)

#### 1. **Add Corona Shader to Stars** ✓ SAFE
```javascript
// From lostcosmo's.html
const coronaGeo = new THREE.SphereGeometry(size * 1.3, 64, 64);
const coronaMat = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0.0 },
    baseColor: { value: color },
    intensity: { value: 0.6 + 0.8 * tNorm },  // Temperature-dependent
    noiseScale: { value: 1.5 + 2.5 * tNorm }
  },
  vertexShader: `varying vec3 vPos; varying vec3 vNormal; 
    void main(){
      vPos = position; 
      vNormal = normalize(normalMatrix * normal); 
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }`,
  fragmentShader: `varying vec3 vPos; varying vec3 vNormal; 
    uniform vec3 baseColor; uniform float intensity; uniform float noiseScale; uniform float time;
    float noise(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,151.7182))) * 43758.5453); }
    float fbm(vec3 p){
      float f=0.0;
      f += 0.5000*noise(p);           p*=2.02;
      f += 0.2500*noise(p+time*0.05); p*=2.03;
      f += 0.1250*noise(p-time*0.04);
      return f;
    }
    void main(){
      float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))), 3.0);
      float n = fbm(vPos * noiseScale);
      vec3 c = baseColor * (0.6 + 0.6*n) * intensity;
      gl_FragColor = vec4(c, rim * (0.4 + 0.6*n));
    }`,
  blending: THREE.AdditiveBlending,
  transparent: true,
  depthWrite: false,
  side: THREE.BackSide
});
```
**Integration Point**: Add to `ObjectLibrary.createStar()` or new `createStarCorona()` method

#### 2. **Upgrade Nebula to 3D Perlin** ✓ SAFE
Current nebula shader is basic. Replace with lostcosmo's FBM-based 3D Perlin:
```javascript
// Much more detailed nebula cloud
float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5000*noise(p);  p *= 2.02;
  f += 0.2500*noise(p);  p *= 2.03;
  f += 0.1250*noise(p);
  return f;
}
```
**Integration Point**: Cosmos class, nebula material uniforms

#### 3. **Add Black Hole Accretion Disk** ✓ SAFE
```javascript
// When creating black holes, add visual disk
const diskGeom = new THREE.RingGeometry(size * 1.2, size * 3, 128);
const diskMat = new THREE.ShaderMaterial({
  uniforms: { time: { value: 0 } },
  fragmentShader: `
    uniform float time; varying vec2 vUv;
    float noise(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      float radius = length(vUv - 0.5);
      float n = noise(vUv * 5.0 + time * 0.2);
      vec3 color = mix(vec3(1.0, 0.5, 0.1), vec3(0.8, 0.1, 1.0), radius * 2.0);
      gl_FragColor = vec4(color * n, 1.0) * (1.0 - radius * 1.8);
    }`,
  side: THREE.DoubleSide, 
  transparent: true, 
  blending: THREE.AdditiveBlending
});
const disk = new THREE.Mesh(diskGeom, diskMat);
disk.rotation.x = Math.PI / 2;
blackHole.add(disk);
```
**Integration Point**: Cosmos or ObjectLibrary, `createBlackHole()` enhancement

#### 4. **Add God Rays Postprocessing** ⚠️ MEDIUM RISK
```javascript
// Add after bloom in composer
const godrayShader = {
  uniforms: {
    tDiffuse: { value: null },
    lightPosition: { value: new THREE.Vector2(0.5, 0.5) },
    exposure: { value: 0.3 },
    decay: { value: 0.96 },
    density: { value: 0.96 },
    weight: { value: 0.4 },
    samples: { value: 50 }
  },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 lightPosition;
    uniform float exposure;
    uniform float decay;
    uniform float density;
    uniform float weight;
    uniform int samples;
    varying vec2 vUv;
    const int MAX_SAMPLES = 100;
    void main() {
      vec2 texCoord = vUv;
      vec2 deltaTexCoord = texCoord - lightPosition;
      deltaTexCoord *= 1.0 / float(samples) * density;
      float illuminationDecay = 1.0;
      vec4 color = texture2D(tDiffuse, texCoord);
      for(int i=0; i < MAX_SAMPLES; i++) {
        if(i >= samples) break;
        texCoord -= deltaTexCoord;
        vec4 sampledColor = texture2D(tDiffuse, texCoord);
        sampledColor *= illuminationDecay * weight;
        color += sampledColor;
        illuminationDecay *= decay;
      }
      gl_FragColor = color * exposure;
    }`
};
this.godrayPass = new ShaderPass(godrayShader);
this.composer.addPass(this.godrayPass);
```
**Integration Point**: Add ShaderPass import, add after bloom, control visibility with flag

#### 5. **Add Lensing Distortion for Black Holes** ⚠️ MEDIUM RISK
```javascript
// Gravitational lensing around black holes (post-process)
const lensingShader = {
  uniforms: {
    tDiffuse: { value: null },
    center: { value: new THREE.Vector2(0.5, 0.5) },
    scale: { value: 50.0 },
    strength: { value: 0.05 }
  },
  fragmentShader: `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    uniform vec2 center;
    uniform float scale;
    uniform float strength;
    void main() {
      vec2 toCenter = center - vUv;
      float dist = length(toCenter);
      vec2 uv = vUv - toCenter * (1.0 - dist * scale) * strength / dist;
      gl_FragColor = texture2D(tDiffuse, uv);
    }`
};
this.lensingPass = new ShaderPass(lensingShader);
this.lensingPass.enabled = false;
this.composer.addPass(this.lensingPass);
```
**Integration Point**: Add after godrays, enable when black holes present + camera near

#### 6. **Add Rings to Planets** ✓ SAFE
```javascript
createRings(planet, planetSize) {
  const ringGeom = new THREE.RingGeometry(planetSize * 2.0, planetSize * 3.0, 64);
  const ringMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    fragmentShader: `
      uniform float time; varying vec2 vUv;
      float noise(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        float n = noise(vUv * 2.0 + time * 0.1) * 0.7;
        n += noise(vUv * 8.0 - time * 0.3) * 0.3;
        gl_FragColor = vec4(0.8, 0.7, 0.6, n * 0.6);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    blending: THREE.AdditiveBlending
  });
  const ring = new THREE.Mesh(ringGeom, ringMat);
  ring.rotation.x = Math.PI * 0.25;
  planet.add(ring);
}
```
**Integration Point**: Cosmos, when creating planets (optional based on random)

---

### MEDIUM PRIORITY (Enhanced Capabilities)

#### 7. **Rayleigh-Mie Atmosphere Scattering** ⚠️ HIGH COMPLEXITY
Upgrade from simple fog to physical atmosphere. **Very advanced**, requires:
- Beta coefficient setup (per-wavelength scattering)
- Phase function evaluation
- Proper view-dependent calculations
- Example: DARkcosmo's `createAtmosphere()` at line 2482

**Not recommended for immediate integration** - high risk of breaking existing sky.

#### 8. **Adaptive Visual Profiles** (Low Risk)
From DARkcosmo, apply different postprocessing based on camera mode:
```javascript
visualProfiles = {
  orbit: { bloom: 1.0, vignette: 0.9, godrays: true, film: false },
  ship: { bloom: 0.9, vignette: 1.0, godrays: false, film: true },
  surface: { bloom: 0.8, vignette: 1.2, godrays: false, film: false }
};
```

---

### LOWER PRIORITY (Experimental)

#### 9. **Afterimage/Motion Blur** (AfterimagePass)
Creates trailing effect for fast-moving objects

#### 10. **Screen-Space Reflections** (SSRPass)
Adds reflections without ray tracing

#### 11. **Procedural Audio Synthesis**
From DARkcosmo - generate sounds from cosmic visuals

---

## 7. CODE ORGANIZATION PATTERNS

### Pattern 1: Class-Based Architecture (earth.html, DARkcosmo)
```javascript
class Cosmos { 
  resize(N) {...} 
  update(dt, now) {...}
}
class Renderer { ... }
class Player { ... }
```
**Benefit**: Modular, easy to extend

### Pattern 2: Direct Script (imdone.html)
```javascript
// Global setup
init3D();
setupParticles();
function animate() { ... }
```
**Benefit**: Simpler, fewer abstractions

### Pattern 3: Component System (DARkcosmo)
```javascript
this.bloomPass, this.godrayPass, this.lensingPass, etc.
// Enable/disable individually
this.godrayPass.enabled = true/false;
```
**Benefit**: Flexible postprocessing pipeline

---

## 8. ADDITIVE INTEGRATION CHECKLIST

### Phase 1: Visual Enhancements (NO LOGIC CHANGES)
- [ ] Add corona shader to stars
- [ ] Upgrade nebula to 3D FBM Perlin
- [ ] Add black hole accretion disk
- [ ] Add planetary rings (optional, random)

### Phase 2: Post-Processing (Careful, Test FPS)
- [ ] Import ShaderPass (if not already)
- [ ] Add god rays pass
- [ ] Add lensing pass (disabled by default, activate near black holes)
- [ ] Test combined effect on all platforms

### Phase 3: Advanced Features (Optional)
- [ ] Adaptive bloom based on scene state
- [ ] Visual profiles per camera mode
- [ ] Rayleigh-Mie atmosphere (advanced)
- [ ] Procedural audio synthesis

---

## 9. TESTING RECOMMENDATIONS

Before committing integrations:

1. **Visual Regression Testing**
   - Ensure existing stars, planets, nebulas look better or identical
   - Test all camera modes (orbit, ship, surface)
   - Verify FPS on low-end devices (target: 30 FPS minimum)

2. **Shader Compilation**
   - Test on different GPU vendors (NVIDIA, AMD, Intel)
   - Verify WebGL version compatibility (ES 3.0 preferred)

3. **Integration Conflicts**
   - Ensure corona shader doesn't conflict with existing lighting
   - Verify black hole gravity wells still work
   - Test audio-driven parameters still respond

4. **Performance Profiling**
   - Track drawcall count before/after
   - Monitor GPU memory usage
   - Profile shader compilation time

---

## FINAL RECOMMENDATIONS

### MUST DO (High Value, Low Risk):
1. Add corona shader to all stars
2. Upgrade nebula to 3D FBM
3. Add accretion disks to black holes
4. Add optional planetary rings

### SHOULD DO (High Value, Medium Risk):
1. Add god rays postprocessing
2. Implement lensing distortion near black holes
3. Add adaptive bloom based on black hole presence

### COULD DO (Medium Value, Medium Risk):
1. Implement visual profiles per camera mode
2. Add Rayleigh-Mie atmosphere
3. Add procedural audio synthesis

### DO NOT (Risk vs Reward):
1. Replace core physics with lostcosmo's (already similar)
2. Refactor entire architecture (working well)
3. Add unrelated features (earth simulation, L-system flora)

