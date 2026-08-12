# 📖 Cosmic Synapse VJ - User Guide

Complete guide to using Cosmic Synapse VJ like a pro.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Audio Input](#audio-input)
3. [Presets](#presets)
4. [Controls](#controls)
5. [MIDI Mapping](#midi-mapping)
6. [Export](#export)
7. [Tips & Tricks](#tips--tricks)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### First Launch

1. Open `src/index.html` in your browser
2. Grant microphone permission when prompted
3. Click "Start Microphone"
4. Choose the "Cosmic" preset to start
5. Adjust particle count and sensitivity to taste

### Recommended Settings by Use Case

**For Live Performance:**
- Preset: Psychedelic or Cosmic
- Particle Count: 40-60
- Audio Sensitivity: 1.0-1.5
- Enable MIDI mapping

**For Meditation:**
- Preset: Meditation
- Particle Count: 10-20
- Audio Sensitivity: 0.3-0.5
- Enable Auto Rotate

**For Recording/Streaming:**
- Preset: Your choice
- Particle Count: 30 (balance quality/performance)
- Enable Auto Rotate for dynamic camera
- Test performance before recording

---

## Audio Input

### Microphone Input

**Best Practices:**
- Use in a quiet environment for meditation
- Use with music playing for reactive visuals
- Adjust mic volume in system settings if needed

**Troubleshooting:**
- If no visuals appear, check mic permission
- Try refreshing the page
- Check browser console for errors

### Audio File Upload (Pro)

**Supported Formats:**
- MP3
- WAV
- OGG
- M4A

**Steps:**
1. Click "Load Audio File"
2. Select your audio file
3. Audio plays on loop automatically

**Tips:**
- Higher quality audio = better frequency analysis
- 320kbps MP3 or WAV recommended
- Audio must be stereo or mono

---

## Presets

### Meditation 🧘

**Best For:** Meditation, yoga, relaxation

**Characteristics:**
- 15 particles (minimal)
- Low audio sensitivity (0.3)
- Slow speed (0.3)
- Cool colors (blues, teals)
- Long trails (3000)
- Gentle camera rotation

**Audio Recommendations:**
- Ambient music
- Nature sounds
- Binaural beats
- Singing bowls

---

### Psychedelic 🌀

**Best For:** Festivals, psychedelic experiences, intense visuals

**Characteristics:**
- 50 particles (maximum complexity)
- High audio sensitivity (1.5)
- Fast speed (0.8)
- Rainbow colors
- Very long trails (5000)
- Intense camera rotation

**Audio Recommendations:**
- Psytrance
- Techno
- Bass music
- Anything with strong beats

---

### Minimal ◼️

**Best For:** Minimalist aesthetics, geometric art

**Characteristics:**
- 8 particles (ultra minimal)
- Medium sensitivity (0.5)
- Slow-medium speed (0.4)
- Monochrome (grayscale)
- Short trails (1000)
- No camera rotation

**Audio Recommendations:**
- Minimal techno
- Ambient
- Classical
- Jazz

---

### Cosmic 🌌

**Best For:** General use, space themes, all-rounder

**Characteristics:**
- 30 particles (balanced)
- Medium sensitivity (0.6)
- Medium speed (0.5)
- Cosmic colors (purples, blues)
- Medium trails (2000)
- Gentle rotation

**Audio Recommendations:**
- Any genre
- Default preset for first-time users
- Best for showing off to friends

---

### Golden Ratio φ

**Best For:** Mathematical beauty, harmonic music

**Characteristics:**
- 21 particles (3 × 7, Fibonacci)
- Golden ratio sensitivity (0.8)
- Golden ratio speed (0.618)
- Warm colors (golds, oranges)
- φ-tuned trails (1618)
- φ-based camera rotation

**Special Features:**
- ALL parameters tuned to φ = 1.618...
- Emphasizes φ-harmonic frequencies
- Creates naturally pleasing patterns

**Audio Recommendations:**
- Classical music
- Jazz
- World music
- Anything with harmonic richness

---

## Controls

### Basic Controls

#### Particle Count (5-100)
- **Low (5-15)**: Clean, easy to track individual particles
- **Medium (20-40)**: Balanced complexity
- **High (50-100)**: Dense, intricate patterns

**Pro Tip:** Start low, increase gradually. More ≠ better.

---

#### Audio Sensitivity (0-2)
- **Low (0.1-0.4)**: Subtle reactions, calm
- **Medium (0.5-0.8)**: Noticeable reactions
- **High (1.0-2.0)**: Extreme reactions, chaotic

**Pro Tip:** Lower for ambient music, higher for bass-heavy music.

---

#### Color Palette
- **Cosmic**: Purple/blue (default, space vibes)
- **Warm**: Orange/red (energetic, sunset)
- **Cool**: Blue/cyan (calm, ice)
- **Psychedelic**: Rainbow (festivals, trips)
- **Monochrome**: Grayscale (minimal, elegant)

**Pro Tip:** Match to your music genre or mood.

---

#### Speed (0.1-2)
- **Slow (0.1-0.3)**: Meditative, peaceful
- **Medium (0.4-0.7)**: Natural pace
- **Fast (0.8-2.0)**: Frantic, exciting

**Pro Tip:** Slower = easier to follow, faster = more chaotic.

---

### Advanced Controls

#### Trail Length (100-5000)
- **Short (100-1000)**: Clean, geometric
- **Medium (1500-3000)**: Balanced
- **Long (3500-5000)**: Ethereal, dreamy

**Pro Tip:** Longer trails = more GPU usage. Lower if laggy.

---

#### Physics Blend (0-1)
- **0**: Pure gravity simulation
- **0.5**: Balanced chaos/gravity
- **1**: Pure Lorenz chaos (default)

**Pro Tip:** 0.7-0.9 gives best visual variety.

---

#### φ-Harmonics (On/Off)
- **On**: Generates golden ratio harmonics
- **Off**: No harmonic generation

**What This Does:**
- Analyzes fundamental frequency
- Generates harmonics at φ^(n/2) intervals
- Influences particle frequencies
- Creates "naturally pleasing" patterns

**Pro Tip:** Turn ON for harmonic music, OFF for noise/experimental.

---

#### Auto Rotate Camera (On/Off)
- **On**: Camera orbits slowly
- **Off**: Fixed camera position

**Pro Tip:** ON for recordings, OFF for VJ performance (manual control).

---

## MIDI Mapping (Pro)

### Setup

1. Connect MIDI controller via USB
2. Open MIDI panel in app
3. Browser should detect automatically
4. You'll see "MIDI device connected: [name]"

### Learning Mode

1. Click "Learn MIDI Mapping"
2. Select parameter (e.g., Particle Count)
3. Move a knob/fader on your controller
4. Mapping saved automatically!

### Recommended Mappings

**8-Knob Controller:**
1. Knob 1 → Particle Count
2. Knob 2 → Audio Sensitivity
3. Knob 3 → Speed
4. Knob 4 → Trail Length
5. Knob 5 → Physics Blend
6. Knob 6-8 → (your choice)

**Performance Controller:**
- Fader 1 → Audio Sensitivity (quick tweaks)
- Fader 2 → Speed
- Knobs → Particle Count, Trail Length, etc.

### Managing Mappings

- **View**: Open MIDI panel to see all mappings
- **Remove**: Click ✕ next to any mapping
- **Clear All**: Clear browser localStorage
- **Export**: Save to file (coming soon)

---

## Export

### Screenshots

**Free Version:**
- Resolution: Up to 1080p (1920×1080)
- Format: PNG
- Quality: 100%

**Pro Version:**
- Resolution: Up to 8K (7680×4320)
- Formats: PNG, JPG
- Quality: Adjustable

**Steps:**
1. Get the visual exactly how you want it
2. Click "Screenshot (4K)"
3. Image downloads automatically

**Pro Tips:**
- Capture during interesting moments
- Use high particle count for screenshots
- Adjust camera angle first (if auto-rotate is off)

---

### Video Recording (Pro)

**Specs:**
- Resolution: Up to 4K (3840×2160)
- Frame Rate: 60 FPS
- Format: WebM (VP9 codec)
- Bitrate: 10 Mbps

**Steps:**
1. Set up your visual
2. Click "Record Video"
3. Let it run (30-60 seconds recommended)
4. Click "Stop Recording"
5. Video downloads automatically

**Pro Tips:**
- Close other apps for best performance
- Test with short recording first
- 30-60 seconds = 30-60 MB file size
- Use compression software if file too large

---

## Tips & Tricks

### Performance Optimization

**If experiencing lag:**
1. Lower particle count (30 → 20)
2. Shorten trail length (3000 → 1500)
3. Close other tabs/apps
4. Use Chrome (best WebGL performance)
5. Lower browser window size

**Target:** 60 FPS steady

---

### Visual Composition

**Golden Rules:**
1. **Less is more**: Start with fewer particles
2. **Match the mood**: Calm music = calm preset
3. **Color matters**: Cool colors = calm, warm = energy
4. **Motion tells story**: Slow = meditative, fast = exciting

**Advanced:**
- Layer recordings in video editor
- Combine with other visuals
- Use as background for streams
- Project onto surfaces (projection mapping)

---

### Creative Uses

**Live Performance:**
- Map MIDI to create "visual instrument"
- Sync with music software via virtual MIDI
- Use multiple instances with different presets

**Recording:**
- Record various segments
- Edit together in video editor
- Add music in post-production
- Apply additional effects

**Meditation:**
- Use with binaural beats
- Project on ceiling
- Combine with guided meditation

**Art Installation:**
- Run fullscreen on dedicated display
- Use with live music
- Interactive via MIDI controller

---

## Troubleshooting

### No Audio Detected

**Check:**
- ✅ Microphone permission granted?
- ✅ Microphone selected in browser?
- ✅ Volume not muted?
- ✅ Playing audio near microphone?

**Fix:**
- Refresh page, grant permission again
- Try different audio source
- Check system audio settings

---

### Low FPS / Lag

**Solutions:**
1. Lower particle count (50 → 20)
2. Reduce trail length (5000 → 1500)
3. Close other applications
4. Use Chrome browser
5. Update graphics drivers

---

### MIDI Not Working

**Check:**
- ✅ Pro version activated?
- ✅ Controller connected before opening page?
- ✅ Browser supports MIDI (Chrome/Edge)?

**Fix:**
- Reconnect controller
- Refresh page
- Check browser console for errors
- Try different browser

---

### Video Export Fails

**Common Issues:**
- Browser doesn't support MediaRecorder
- Insufficient memory
- Too high resolution

**Solutions:**
- Use Chrome (best support)
- Lower particle count before recording
- Record shorter clips
- Try native resolution instead of 4K

---

### Colors Look Wrong

**Check:**
- Display color profile
- Browser color management
- Palette selection

**Note:** Colors look different on each display. This is normal.

---

## Keyboard Shortcuts (Coming Soon)

- `Space` - Pause/Resume
- `S` - Screenshot
- `R` - Start/Stop Recording
- `F` - Fullscreen
- `1-5` - Load presets 1-5
- `↑↓` - Adjust particle count
- `←→` - Adjust sensitivity

---

## Getting Help

- **Documentation**: This file + README.md
- **Issues**: GitHub Issues
- **Email**: support@cosmicvj.com
- **Discord**: [Community server]

---

**Happy visualizing! 🌌**

*Remember: There are no rules. Experiment. Discover. Create.*
