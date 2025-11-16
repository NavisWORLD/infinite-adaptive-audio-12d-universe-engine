# 🌌 Cosmic Synapse VJ

**Professional Audio-Reactive Visualization Tool Based on 12D Cosmic Synapse Theory**

Transform your music into living, breathing universes. Built on real physics, designed for artists.

![Cosmic Synapse VJ](marketing/screenshots/hero-screenshot.png)

---

## 🎯 What Is This?

Cosmic Synapse VJ is a **professional audio visualizer** for:
- **Musicians & Producers** - Visualize your compositions with scientific precision
- **VJs & DJs** - MIDI-controlled live visuals for performances
- **Meditators** - Calm, flowing visuals tuned to meditation frequencies
- **Psychonauts** - Visuals worthy of expanded consciousness

Not just another audio visualizer. Built on **12D Cosmic Synapse Theory** - a mathematical framework unifying chaos, synchronization, and consciousness.

---

## ✨ Features

### Core Features (Free Version)
- ✅ **Live Audio Reactivity** - Microphone input with real-time FFT analysis
- ✅ **5 Beautiful Presets** - Meditation, Psychedelic, Minimal, Cosmic, Golden Ratio
- ✅ **Simple Controls** - Particle count, sensitivity, color palettes, speed
- ✅ **1080p Screenshots** - Capture your visuals
- ✅ **Metrics Display** - R_ω, R_ψ, Causal Density in real-time

### Pro Features ($20 one-time)
- 🔒 **MIDI Support** - Map any controller to any parameter
- 🔒 **4K/8K Export** - Ultra high-resolution screenshots
- 🔒 **Video Recording** - 4K60fps WebM/MP4 export
- 🔒 **Audio File Upload** - Use any audio file, not just microphone
- 🔒 **Premium Presets** - 10+ additional presets
- 🔒 **Commercial License** - Use in commercial projects

---

## 🚀 Quick Start

### Option 1: Use Directly (No Installation)
1. Open `src/index.html` in a modern browser (Chrome/Firefox recommended)
2. Click "Start Microphone" to begin
3. Choose a preset
4. Enjoy!

### Option 2: Run a Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000/src/
```

### Option 3: Development Setup
```bash
# Clone repo
git clone https://github.com/yourusername/cosmic-synapse-vj.git
cd cosmic-synapse-vj

# Install dependencies (optional, for build tools)
npm install

# Open in browser
open src/index.html
```

---

## 🎨 How to Use

### 1. Choose Your Audio Source
- **Microphone**: Click "Start Microphone" (requires permission)
- **Audio File**: Click "Load Audio File" and select an MP3/WAV

### 2. Select a Preset
- **Meditation** 🧘 - Calm, flowing, peaceful (15 particles, low sensitivity)
- **Psychedelic** 🌀 - Intense, complex, trippy (50 particles, high sensitivity)
- **Minimal** ◼️ - Clean, geometric, simple (8 particles, monochrome)
- **Cosmic** 🌌 - Space, galaxies, stars (30 particles, balanced)
- **Golden Ratio** φ - All parameters tuned to φ = 1.618...

### 3. Tweak Parameters
- **Particle Count** (5-100): More particles = more complexity
- **Audio Sensitivity** (0-2): How reactive to audio
- **Color Palette**: Cosmic, Warm, Cool, Psychedelic, Monochrome
- **Speed** (0.1-2): Slow meditation → fast chaos

### 4. Advanced Controls (Optional)
- **Trail Length**: How long particle trails persist
- **Physics Blend**: Balance between gravity and Lorenz chaos
- **φ-Harmonics**: Enable golden ratio harmonic generation
- **Auto Rotate**: Camera orbits automatically

### 5. Export Your Visuals
- **Screenshot**: Capture current frame (1080p free, 4K Pro)
- **Video**: Record session (Pro only, 4K60fps)

---

## 🎹 MIDI Mapping (Pro)

1. Connect your MIDI controller
2. Open the MIDI panel
3. Click "Learn MIDI Mapping"
4. Select a parameter (e.g., Particle Count)
5. Move a knob/fader on your controller
6. Done! Mapping is saved automatically

**Recommended Mappings:**
- Knob 1 → Particle Count
- Knob 2 → Audio Sensitivity
- Knob 3 → Speed
- Fader 1 → Trail Length

---

## 🧠 The Science Behind It

### 12D Cosmic Synapse Theory

This isn't just pretty visuals - it's **real physics**:

1. **12 Dimensions**
   - 3D space (x, y, z)
   - Time (t)
   - 8 internal dimensions (consciousness, memory, phase, etc.)

2. **The ψ Function**
   ```
   ψ = φE/c² + λ + ∫v·dt + ∫Δx₁₂·dt + ΩE + U₁₁D
   ```
   - **φE/c²**: Golden ratio mass-energy
   - **λ**: Lyapunov exponent (chaos measure)
   - **∫v·dt**: Velocity integral (motion history)
   - **∫Δx₁₂·dt**: Internal dimension changes
   - **ΩE**: Angular frequency × energy
   - **U₁₁D**: Potential field

3. **Key Metrics**
   - **R_ω**: Omega synchronization (1.0 = perfect sync = death)
   - **R_ψ**: Phase coherence (1.0 = complete order)
   - **Causal Density**: Audio-particle correlation

4. **φ-Harmonics** (Golden Ratio)
   - Frequencies spaced by φ^(n/2)
   - Not too consonant, not too dissonant
   - Creates naturally interesting patterns

**Why this matters:**
- Chaotic systems (like Lorenz attractor) never repeat
- Golden ratio creates optimal complexity
- Audio influence is mathematically modeled, not random

---

## 📁 Project Structure

```
cosmic-synapse-vj/
├── src/
│   ├── index.html              # Main entry point
│   ├── app.js                  # Application bootstrap
│   ├── core/
│   │   ├── engine.js           # 12D physics engine
│   │   └── audio.js            # Audio analysis (FFT)
│   ├── ui/
│   │   ├── controls.js         # UI event handling
│   │   └── midi.js             # MIDI controller
│   ├── export/
│   │   ├── screenshot.js       # Screenshot export
│   │   └── video-recorder.js   # Video recording
│   ├── presets/
│   │   ├── meditation.json
│   │   ├── psychedelic.json
│   │   ├── minimal.json
│   │   ├── cosmic.json
│   │   └── golden-ratio.json
│   └── styles/
│       ├── main.css            # Main styling
│       └── controls.css        # UI controls styling
├── docs/                       # Documentation
├── marketing/                  # Marketing materials
└── README.md                   # This file
```

---

## 🛠️ Technical Details

### Dependencies
- **THREE.js** (r128) - 3D rendering
- **Web Audio API** - Audio analysis
- **Web MIDI API** - MIDI support (Pro)
- **MediaRecorder API** - Video export (Pro)

### Browser Support
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ⚠️ Safari (limited MIDI support)
- ❌ Internet Explorer (not supported)

### Performance
- Target: 60 FPS with 50 particles
- Tested on: Intel i5 + integrated graphics
- Recommended: Dedicated GPU for 100+ particles

---

## 💰 Pricing

### Free Version
- Core visualization engine
- 5 presets
- Microphone input
- 1080p screenshots
- Perfect for personal use

### Pro Version - $20 (one-time)
- **MIDI support**
- **4K/8K screenshots**
- **4K60fps video recording**
- **Audio file upload**
- **10+ premium presets**
- **Commercial use license**
- **Priority support**

[Buy Pro →](https://gumroad.com/l/cosmic-vj)

*(Or subscribe: $5/month)*

---

## 🤝 Contributing

Want to contribute? Amazing!

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

**Ideas for contributions:**
- New presets
- Additional color palettes
- Performance optimizations
- Mobile support
- New physics modes

---

## 📜 License

**Dual License:**
- **Free Version**: MIT License (open source)
- **Pro Features**: Commercial license required

See [LICENSE](LICENSE) for details.

---

## 🙏 Credits

- **Physics Engine**: Based on 12D Cosmic Synapse Theory
- **Visualization**: THREE.js
- **Audio Analysis**: Web Audio API
- **Inspiration**: Lorenz attractor, Kuramoto model, φ harmonics

Built with 🧠 by [Your Name]

---

## 📞 Support

- **Documentation**: [docs/USER_GUIDE.md](docs/USER_GUIDE.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/cosmic-synapse-vj/issues)
- **Email**: support@cosmicvj.com
- **Discord**: [Join our community](https://discord.gg/cosmic-vj)

---

## 🗺️ Roadmap

### v1.1 (Next Release)
- [ ] Mobile/tablet support
- [ ] More presets (10+ total)
- [ ] Preset sharing community
- [ ] Improved performance

### v2.0 (Future)
- [ ] Desktop app (Electron)
- [ ] OBS integration
- [ ] Twitch integration
- [ ] VR mode
- [ ] AI-generated presets

---

**Start visualizing the universe. Download now. ↓**

[Download Free Version](src/index.html) | [Buy Pro - $20](https://gumroad.com/l/cosmic-vj)
