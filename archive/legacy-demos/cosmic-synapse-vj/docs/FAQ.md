# ❓ Cosmic Synapse VJ - FAQ

Frequently Asked Questions

---

## General Questions

### What is Cosmic Synapse VJ?
A professional audio visualizer built on 12D Cosmic Synapse Theory. It creates beautiful, physics-based visualizations that react to music in real-time.

### Is it really based on real physics?
Yes! The 12D Cosmic Synapse Theory is a mathematical framework that unifies chaos theory, synchronization, and consciousness. The Lorenz attractor, golden ratio harmonics, and synchronization metrics are all real physics and mathematics.

### Do I need to understand the physics to use it?
Nope! Just click a preset and enjoy. The physics runs behind the scenes.

---

## Pricing & Licensing

### Is it free?
Yes! The core version is 100% free and open source (MIT license).

### What do I get with Pro?
- MIDI controller support
- 4K/8K screenshot export
- 4K60fps video recording
- Audio file upload (not just mic)
- 10+ premium presets
- Commercial use license

### How much is Pro?
$20 one-time payment OR $5/month subscription.

### Can I use the free version commercially?
No. Free version is for personal use only. Commercial use requires Pro license.

### What counts as "commercial use"?
- Live performances (paid gigs)
- YouTube monetization
- Twitch streaming (if monetized)
- Client work
- Art installations (paid)

Personal, non-monetized use is always free!

---

## Technical Questions

### What browsers are supported?
- ✅ Chrome (recommended)
- ✅ Firefox
- ⚠️ Safari (limited MIDI support)
- ❌ Internet Explorer

### What are the system requirements?
**Minimum:**
- Modern browser (last 2 years)
- Integrated graphics
- 4GB RAM

**Recommended:**
- Chrome browser
- Dedicated GPU (any from last 5 years)
- 8GB RAM

**For 4K recording:**
- Dedicated GPU
- 16GB RAM
- SSD storage

### Can I run this on my phone/tablet?
Not optimized yet. Desktop browsers only for now. Mobile support coming in v1.1.

### Does it work offline?
Yes! Download the files and open index.html locally. No internet needed (except for THREE.js CDN - can be downloaded locally too).

---

## Audio Questions

### Why isn't it reacting to my music?
**Check:**
1. Is microphone picking up the audio?
2. Is audio sensitivity too low?
3. Is volume loud enough?
4. Try increasing audio sensitivity to 1.0-1.5

### Can I use Spotify/YouTube audio?
**With microphone:** Yes! Play audio near your mic.

**Direct audio (Pro):** Upload audio files instead. Can't capture system audio directly due to browser security.

### How do I capture system audio?
**Option 1:** Use virtual audio cable (like VB-Audio Cable)
**Option 2:** Upload audio files (Pro version)
**Option 3:** Play music near microphone

### What audio formats are supported? (Pro)
- MP3
- WAV
- OGG
- M4A
- AAC

---

## MIDI Questions

### Do I need special hardware?
Any MIDI controller works! DJ controllers, keyboard controllers, pad controllers, etc.

### My MIDI controller isn't detected
**Try:**
1. Connect controller BEFORE opening page
2. Refresh page after connecting
3. Check browser console for errors
4. Try different USB port
5. Use Chrome (best MIDI support)

### Can I use wireless MIDI?
Yes, if your browser supports it. Bluetooth MIDI works on some browsers.

### How many parameters can I map?
As many as you have MIDI controls! No limit.

---

## Export Questions

### What resolution are screenshots?
**Free:** Up to 1080p (1920×1080)
**Pro:** Up to 8K (7680×4320)

### What format are videos?
WebM (VP9 codec) by default. Can be converted to MP4 with free tools.

### How do I convert WebM to MP4?
Use free tools like:
- FFmpeg (command line)
- HandBrake (GUI)
- CloudConvert (online)

### Video export isn't working
**Check:**
- Using Chrome? (best support)
- Enough RAM? (4K needs 8GB+)
- Close other apps
- Try lower resolution

### Can I export GIFs?
Not yet. Coming in v1.1. For now, convert video to GIF with online tools.

---

## Presets Questions

### Can I create custom presets?
Not in the UI yet. But you can:
1. Edit preset JSON files manually
2. Save your settings
3. Share with community

Coming in v1.1: Save/load custom presets in UI.

### Can I share presets?
Yes! Export your JSON file and share. Others can import it.

### Where can I find community presets?
Check the `presets-community/` folder in the repo. Submit yours via pull request!

---

## Performance Questions

### Why is it laggy?
**Too many particles:** Lower from 50 to 20-30
**Long trails:** Reduce from 5000 to 2000
**Other apps:** Close Chrome tabs, other programs
**Old GPU:** Lower settings or upgrade hardware

### What FPS should I target?
60 FPS is ideal. 30+ FPS is acceptable. Below 30 = lower settings.

### How many particles can my computer handle?
**Integrated GPU:** 20-40 particles
**Mid-range GPU:** 40-80 particles
**High-end GPU:** 100+ particles

Test and see! FPS counter shows real-time performance.

---

## Customization Questions

### Can I change the colors?
Yes! Use the Color Palette dropdown. 5 palettes included.

**Custom colors:** Edit `src/core/engine.js` and add your palette.

### Can I change the physics?
Yes! Advanced controls let you blend Lorenz chaos with gravity.

**Full customization:** Edit `src/core/engine.js` for complete control.

### Can I add my own presets?
Yes! Create a JSON file in `src/presets/` following the existing format.

---

## Troubleshooting

### Nothing appears when I start microphone
1. Grant microphone permission
2. Refresh page
3. Check browser console
4. Try incognito mode
5. Try different browser

### Page won't load
1. Check internet (for THREE.js CDN)
2. Try different browser
3. Check browser console for errors
4. Make sure JavaScript is enabled

### Weird colors/flickering
This is normal with chaotic systems! Try:
- Different preset
- Lower audio sensitivity
- Different audio source

### Export buttons don't work
**Pro features:** Screenshot 4K and video export require Pro license.

**Free features:** 1080p screenshot should work. If not, check browser console.

---

## Business Questions

### Can I use this for paid gigs?
Only with Pro license ($20).

### Can I white-label this?
Contact us for enterprise licensing.

### Can I integrate this into my app?
It's open source (MIT)! Fork it and integrate. Give credit.

**Commercial redistribution:** Contact us for licensing.

### Do you offer custom development?
Yes! Email: support@cosmicvj.com

---

## Comparison Questions

### How is this different from Milkdrop/ProjectM?
- Modern web-based (no install)
- MIDI support (Pro)
- Based on real physics (12D CST)
- Simpler, cleaner interface
- Export features (Pro)

### How is this different from TouchDesigner?
TouchDesigner is a professional tool with 1000+ features. This is focused on audio visualization with minimal learning curve.

**Use TouchDesigner if:** You want ultimate control
**Use Cosmic Synapse VJ if:** You want beautiful visuals NOW

### How is this different from GLSL shader toys?
- No coding required
- Audio reactivity built-in
- MIDI support
- Presets for instant results

---

## Future Features

### What's coming in v1.1?
- Mobile support
- More presets (10+)
- Save custom presets
- Better performance
- Keyboard shortcuts
- GIF export

### What about v2.0?
- Desktop app (Electron)
- OBS plugin
- Twitch integration
- VR mode
- AI preset generation

### When is the next release?
v1.1 target: 30 days after v1.0 launch

---

## Support

### How do I report a bug?
1. GitHub Issues (preferred)
2. Email: support@cosmicvj.com
3. Discord community

### How do I request a feature?
Same as above! We love ideas.

### Is there a community?
Yes! Join our Discord: [link]

---

## Legal

### Can I fork this project?
Yes! It's MIT licensed (free version). Fork away!

### Can I sell modified versions?
Free features: Yes, as long as you follow MIT license (give credit).

Pro features: No, those are proprietary.

### Can I use this in my YouTube videos?
**Free version:** Yes, personal use.

**Monetized videos:** Requires Pro license.

### What data do you collect?
None! Everything runs locally in your browser. No analytics, no tracking.

---

## Still have questions?

📧 Email: support@cosmicvj.com
💬 Discord: [Community server]
📝 GitHub: [Issues page]

**Response time:** Usually 24-48 hours

---

*Updated: 2025-11-16*
