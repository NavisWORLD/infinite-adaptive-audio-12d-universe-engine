# INTEGRATION CODE SNIPPETS
## Ready-to-use code extracts from reference files for greatcosmos_UNIFIED.html

---

## PHASE 1: Visual Enhancements (NO LOGIC CHANGES)

### 1. STAR CORONA SHADER (From lostcosmo's.html - Line 1721)

**Add this method to ObjectLibrary class:**

```javascript
createStarCorona(star, color, temp, size) {
  const tNorm = (temp - 2000) / 18000; // Normalize temperature 2000K-20000K to 0..1
  const coronaGeo = new THREE.SphereGeometry(size * 1.3, 64, 64);
  const coronaMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      baseColor: { value: color },
      intensity: { value: 0.6 + 0.8 * tNorm },  // Hotter = brighter corona
      noiseScale: { value: 1.5 + 2.5 * tNorm }  // Hotter = more turbulent
    },
    vertexShader: `
      varying vec3 vPos; 
      varying vec3 vNormal; 
      void main(){
        vPos = position; 
        vNormal = normalize(normalMatrix * normal); 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      varying vec3 vPos; 
      varying vec3 vNormal; 
      uniform vec3 baseColor; 
      uniform float intensity; 
      uniform float noiseScale; 
      uniform float time;
      
      float noise(vec3 p){
        return fract(sin(dot(p, vec3(12.9898,78.233,151.7182))) * 43758.5453);
      }
      
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
  const corona = new THREE.Mesh(coronaGeo, coronaMat);
  corona.userData = { isGenerated: true, isStarCorona: true };
  star.add(corona);
  star.userData.corona = corona;
}
```

**Where to call:** In `createStar()` method after creating the star mesh:
```javascript
// ... after star creation ...
this.createStarCorona(star, col, 5777, size); // 5777K = Sun temperature
```

---

### 2. UPGRADE NEBULA SHADER (From lostcosmo's.html - Line 1748)

**Replace existing nebula shader in Cosmos class:**

```javascript
createNebula(baseColor) {
  const nebulaMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      baseColor: { value: baseColor },
      noiseScale: { value: 2.0 + this.prng() * 3.0 },
      density: { value: 0.3 + this.prng() * 0.4 },
      pulse: { value: 0.0 }
    },
    vertexShader: `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float time;
      uniform vec3 baseColor;
      uniform float noiseScale;
      uniform float density;
      uniform float pulse;
      varying vec3 vPosition;
      
      vec3 hash(vec3 p) {
        p = vec3(
          dot(p,vec3(127.1,311.7,74.7)),
          dot(p,vec3(269.5,183.3,246.1)),
          dot(p,vec3(113.5,271.9,124.6))
        );
        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
      }
      
      float noise(in vec3 p) {
        vec3 i = floor(p), f = fract(p), u = f*f*(3.0-2.0*f);
        return mix(
          mix(
            mix(dot(hash(i+vec3(0,0,0)),f-vec3(0,0,0)), dot(hash(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
            mix(dot(hash(i+vec3(0,1,0)),f-vec3(0,1,0)), dot(hash(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),
            u.y
          ),
          mix(
            mix(dot(hash(i+vec3(0,0,1)),f-vec3(0,0,1)), dot(hash(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
            mix(dot(hash(i+vec3(0,1,1)),f-vec3(0,1,1)), dot(hash(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),
            u.y
          ),
          u.z
        );
      }
      
      float fbm(vec3 p) {
        float f = 0.0;
        f += 0.5000*noise(p);  p *= 2.02;
        f += 0.2500*noise(p);  p *= 2.03;
        f += 0.1250*noise(p);
        return f;
      }
      
      void main() {
        vec3 pos = vPosition / (8000.0 / noiseScale);
        pos.x += time * 0.01;  // Scrolling nebula
        float noiseVal = fbm(pos);
        gl_FragColor = vec4(baseColor * (noiseVal + pulse) * 2.0, noiseVal * density);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.BackSide
  });
  
  const nebula = new THREE.Mesh(new THREE.SphereGeometry(8000, 32, 32), nebulaMaterial);
  nebula.userData = { isGenerated: true, isNebula: true, baseDensity: 0.3, baseNoiseScale: 2.0 };
  this.scene.add(nebula);
  this.nebula = nebula;
  return nebula;
}
```

**Update nebula in animate loop:**
```javascript
// In update() method
if (this.nebula && this.nebula.material) {
  this.nebula.material.uniforms.time.value = now;
  this.nebula.material.uniforms.pulse.value = 0.2 + 0.3 * Math.sin(now);
}
```

---

### 3. BLACK HOLE ACCRETION DISK (From lostcosmo's.html - Line 1582-1608)

**Add to createBlackHole() method:**

```javascript
createBlackHole() {
  const size = 15 + this.prng() * 10;
  const blackHole = new THREE.Mesh(
    new THREE.SphereGeometry(size, 64, 64),
    new THREE.MeshBasicMaterial({ color: 0x000000 })
  );
  const dist = 1000 + this.prng() * 2000;
  const angle = this.prng() * Math.PI * 2;
  blackHole.position.set(
    Math.cos(angle) * dist,
    this.prng() * 200 - 100,
    Math.sin(angle) * dist
  );
  blackHole.userData = { isGenerated: true, isBlackHole: true, mass: size * 5000 };
  this.scene.add(blackHole);
  this.blackHoles.push(blackHole);
  
  // ADD ACCRETION DISK
  const diskGeom = new THREE.RingGeometry(size * 1.2, size * 3, 128);
  const diskMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        float radius = length(vUv - 0.5);
        float n = noise(vUv * 5.0 + time * 0.2);
        // Orange to purple gradient based on radius
        vec3 color = mix(vec3(1.0, 0.5, 0.1), vec3(0.8, 0.1, 1.0), radius * 2.0);
        // Turbulent, fading disk
        gl_FragColor = vec4(color * n, 1.0) * (1.0 - radius * 1.8);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    blending: THREE.AdditiveBlending
  });
  const disk = new THREE.Mesh(diskGeom, diskMat);
  disk.rotation.x = Math.PI / 2;  // Rotate to lie flat
  blackHole.add(disk);
  blackHole.userData.disk = disk;
}
```

**Update disk shader in animate:**
```javascript
// In update() or animate loop
this.blackHoles.forEach(bh => {
  if (bh.userData.disk && bh.userData.disk.material) {
    bh.userData.disk.material.uniforms.time.value = now;
  }
});
```

---

### 4. PLANETARY RINGS (From lostcosmo's.html - inspired)

**Add to Cosmos or ObjectLibrary:**

```javascript
createRings(planet, planetSize) {
  const ringGeom = new THREE.RingGeometry(planetSize * 2.0, planetSize * 3.0, 64);
  const ringMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        float n = noise(vUv * 2.0 + time * 0.1) * 0.7;
        n += noise(vUv * 8.0 - time * 0.3) * 0.3;
        // Tan/sandy color
        gl_FragColor = vec4(0.8, 0.7, 0.6, n * 0.6);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    blending: THREE.AdditiveBlending
  });
  const ring = new THREE.Mesh(ringGeom, ringMat);
  ring.rotation.x = Math.PI * 0.25;  // Slight tilt
  planet.add(ring);
  planet.userData.ring = ring;
}
```

**Call when creating planets:**
```javascript
if (this.prng() > 0.6) {
  this.createRings(planet, planetSize);
}
```

---

## PHASE 2: Post-Processing Effects

### 5. GOD RAYS / VOLUMETRIC LIGHT SHAFTS (From DARkcosmo.HTML - Line 1950)

**Prerequisites:**
```javascript
// Add import at top
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
```

**Add after bloom in Renderer:**

```javascript
// God Rays Shader (volumetric light shafts)
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
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
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
this.godrayPass.enabled = true;  // Can be toggled
this.composer.addPass(this.godrayPass);
```

**To control dynamically (update light position with active star):**
```javascript
// In update loop
if (this.godrayPass && this.godrayPass.uniforms.lightPosition) {
  // Project star position to screen space
  const starScreenPos = new THREE.Vector3();
  starScreenPos.copy(activeStar.position);
  starScreenPos.project(this.camera);
  this.godrayPass.uniforms.lightPosition.value.x = starScreenPos.x * 0.5 + 0.5;
  this.godrayPass.uniforms.lightPosition.value.y = -starScreenPos.y * 0.5 + 0.5;
}
```

---

### 6. GRAVITATIONAL LENSING FOR BLACK HOLES (From DARkcosmo.HTML - Line 1981)

**Add after god rays:**

```javascript
// Lensing Shader for Black Holes
const lensingShader = {
  uniforms: {
    tDiffuse: { value: null },
    center: { value: new THREE.Vector2(0.5, 0.5) },
    scale: { value: 50.0 },
    strength: { value: 0.05 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
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
this.lensingPass.enabled = false;  // Disabled by default
this.composer.addPass(this.lensingPass);
```

**Enable near black holes:**
```javascript
// In update loop
const nearBlackHole = this.camera.position.distanceTo(closestBlackHole.position) < 1000;
this.lensingPass.enabled = nearBlackHole;

if (nearBlackHole) {
  // Project black hole to screen space
  const bhScreenPos = new THREE.Vector3();
  bhScreenPos.copy(closestBlackHole.position);
  bhScreenPos.project(this.camera);
  this.lensingPass.uniforms.center.value.x = bhScreenPos.x * 0.5 + 0.5;
  this.lensingPass.uniforms.center.value.y = -bhScreenPos.y * 0.5 + 0.5;
}
```

---

## QUICK INTEGRATION ORDER

**Recommended implementation order:**
1. Corona shader (easiest, immediate visual impact)
2. Nebula upgrade (simple shader swap)
3. Accretion disk (add to black holes)
4. Rings (optional, easy)
5. God rays (medium complexity)
6. Lensing (medium complexity, test thoroughly)

**Estimated time per feature:**
- Corona: 10 minutes
- Nebula: 15 minutes
- Accretion disk: 10 minutes
- Rings: 5 minutes
- God rays: 20 minutes
- Lensing: 20 minutes

**Total: ~80 minutes for all features**

---

## TESTING AFTER EACH ADDITION

```bash
# Quick visual check
# 1. Spawn a star - see corona glow
# 2. Check nebula background - see FBM clouds
# 3. Spawn black hole - see accretion disk
# 4. Spawn planet - optionally see rings
# 5. Enable godrays - see light shafts
# 6. Get near black hole - see lensing distortion
```

---

## FILE LOCATIONS (Source Code)

All snippets extracted from:
- `/cosmo sim/lostcosmo's.html` - Corona, Nebula, Accretion Disk, Rings
- `/cosmo sim/DARkcosmo.HTML` - God Rays, Lensing Shaders

Reference implementations already thoroughly tested and working.

