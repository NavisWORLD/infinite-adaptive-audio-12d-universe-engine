# Web Interface Guide
## Internal Dimension AI - Browser-Based Research Interface

**The easiest way to use Internal Dimension AI - no programming required!**

---

## 🌟 What You Get

A **beautiful web interface** that runs in your browser with:

✨ **Click-to-Run Experiments**
- Just click a button to start any experiment
- No command-line knowledge needed
- No coding required

📊 **Live Visual Feedback**
- Progress bars show experiment status
- Real-time logs display in browser
- Clear status indicators

📈 **Results in Your Browser**
- View visualizations directly
- Browse result files
- Download data with one click

📚 **Integrated Documentation**
- Getting started guide
- Research methodology
- Troubleshooting help
- All accessible from the interface

🌐 **External Resources**
- Links to related papers
- Educational materials
- PyTorch documentation
- RL learning resources

🎨 **Beautiful, Modern Design**
- Clean, professional interface
- Responsive (works on tablets/phones too!)
- Color-coded status indicators
- Intuitive navigation

---

## 🚀 How to Start

### First Time Setup

**Mac/Linux:**
```bash
cd internal-dimension-ai
./setup.sh        # Takes 5-10 minutes
./start_web.sh    # Opens browser automatically!
```

**Windows:**
```bash
cd internal-dimension-ai
setup_windows.bat
start_web.bat
```

That's it! Your browser will open to: **http://localhost:8080**

### Every Time After

Just run:
```bash
./start_web.sh      # Mac/Linux
start_web.bat       # Windows
```

---

## 🎯 Interface Tour

### Top Section: Status Bar

Shows at-a-glance information:
- **System Status**: Ready / Running / Error
- **Python Version**: Your Python version
- **GPU**: Available or CPU Only
- **Running**: Current experiment (or None)

**Status Colors:**
- 🟢 Green = Good
- 🟡 Yellow = Warning
- 🔴 Red = Error

### Left Panel: Run Experiments

**Three Tabs:**

1. **Quick Demos** (⭐ Start here!)
   - Quick Demo (5 min) - Perfect first demo
   - Baseline Comparison (15 min) - Compare IDN vs standard
   - Curiosity Demo (10 min) - Curiosity-driven learning

2. **Research Experiments**
   - Dimensional Scaling Study (4-8 hours)
   - Emergence Timeline Analysis (6-10 hours)
   - Ablation Study (10-15 hours)

3. **Custom** (Coming soon)
   - Run your own configurations

**Each Experiment Card Shows:**
- Name and description
- Duration estimate
- ▶️ Run button

**After Clicking Run:**
- Progress bar appears
- Percentage completed
- Live log output
- Stop button (if needed)

### Right Panel: Results & Resources

**Three Tabs:**

1. **Results**
   - Grid of all generated results
   - 🖼️ Images (plots, visualizations)
   - 📊 Data files (CSV, JSON)
   - Click to view in modal

2. **Documentation**
   - Getting Started Guide
   - Research Plan
   - Troubleshooting
   - Metrics Explanation

3. **External Resources**
   - Research papers
   - Educational materials
   - Related documentation
   - Opens in new tab

---

## 📋 Step-by-Step: Your First Demo

### 1. Launch the Interface
```bash
./start_web.sh
```

Browser opens to http://localhost:8080

### 2. Check Status

Look at the status bar (top):
- Should show "Ready" in green
- Python version displayed
- GPU status shown

**If you see errors:**
- Check TROUBLESHOOTING.md
- Make sure setup.sh completed successfully

### 3. Run Quick Demo

**In the left panel:**
1. Make sure you're on "Quick Demos" tab
2. Find "Quick Demo" card
3. Read: "Train a simple agent (5 minutes)"
4. Click the **▶️ Run** button

### 4. Watch Progress

**You'll see:**
- Progress bar appear
- Percentage increasing
- Log output showing training
- Episode numbers counting up

**Progress indicators:**
- Blue bar = Running
- 100% = Complete

### 5. View Results

**When complete:**
1. Switch to "Results" tab (right panel)
2. See new results appear
3. Click any result card to view
4. Images open in modal overlay

**Result Types:**
- 🖼️ = Visualization/Plot
- 📊 = Data File

### 6. Understand Results

**You'll see metrics like:**
- Final reward: ~0.8 (agent learned!)
- x₁₂ (awareness): 0.2-0.4
- m₁₂ (memory): 0.5-0.7
- Consciousness score: 0.3-0.6

**Plots show:**
- Training reward curve (going up = good!)
- x₁₂ evolution over time
- m₁₂ accumulation
- Consciousness metrics

---

## 💡 Tips & Best Practices

### Start Small
1. **First**: Quick Demo (5 min)
2. **Then**: Baseline Comparison (15 min)
3. **Finally**: Full research experiments (hours)

### Monitor Progress
- Keep browser tab open
- Check progress bar periodically
- Long experiments can run overnight

### Save Your Work
- Results auto-save to `outputs/`
- Copy important results elsewhere
- Results persist between sessions

### Troubleshooting
- If page won't load: Check if server is running
- If experiments won't start: Check Python environment
- If results don't show: Refresh page or re-run experiment

---

## 🔧 Technical Details

### How It Works

**Architecture:**
```
Browser ←→ Web Server (Python) ←→ Experiment Scripts
   ↓
Results (outputs/)
```

1. **Web Server** (`web_server.py`)
   - Python HTTP server on port 8080
   - REST API for experiments
   - Serves static HTML

2. **Web Interface** (`web_interface.html`)
   - Single HTML file
   - JavaScript for interactivity
   - CSS for styling
   - No external dependencies

3. **Communication:**
   - Browser sends POST to `/api/run`
   - Server launches Python experiment
   - Browser polls `/api/status`
   - Results served via `/api/results`

### API Endpoints

- `GET /api/status` - System status
- `GET /api/experiments` - List experiments
- `GET /api/results` - List results
- `GET /api/result/:path` - Get specific result
- `POST /api/run` - Start experiment
- `POST /api/stop` - Stop experiment

### Port & Security

- **Port**: 8080 (localhost only)
- **Access**: Only from your computer
- **Security**: Not exposed to internet
- **Safe**: Can't access files outside project

---

## 🎨 Customization (Advanced)

### Change Port

Edit `web_server.py`:
```python
PORT = 8080  # Change to your preferred port
```

### Customize Interface

Edit `web_interface.html`:
- Styles in `<style>` section
- Layout in HTML body
- Behavior in `<script>` section

### Add Custom Experiments

The interface automatically loads from:
```python
# In web_server.py, api_list_experiments()
experiments = [
    {
        'id': 'your_experiment',
        'name': 'Your Experiment Name',
        'description': 'Description here',
        'duration': '10 minutes',
        'script': 'path/to/script.py'
    }
]
```

---

## ❓ Common Questions

**Q: Can I use this remotely (over SSH)?**
A: Yes! Use SSH port forwarding:
```bash
ssh -L 8080:localhost:8080 user@remote
# Then open http://localhost:8080 on your local machine
```

**Q: Can multiple people use it at once?**
A: Not recommended - experiments may conflict. Run one at a time.

**Q: Does it need internet?**
A: No! Completely offline. External links are optional.

**Q: Can I run multiple experiments?**
A: One at a time. Stop current experiment before starting another.

**Q: Will it work on my phone/tablet?**
A: Yes! The interface is responsive and mobile-friendly.

**Q: Can I close the browser during long experiments?**
A: Browser needs to stay open. Server can run in background.

**Q: How do I stop the server?**
A: Press `Ctrl+C` in the terminal where it's running.

**Q: Where are results stored?**
A: In `outputs/` directory. Accessible via interface or file browser.

---

## 🆘 Troubleshooting

### Problem: Page won't load

**Check:**
1. Is server running? Look for "Starting web server..." message
2. Is port 8080 in use? Try different port
3. Is browser correct? Use Chrome, Firefox, or Safari

**Solution:**
```bash
# Stop any existing servers
# Press Ctrl+C if server is running

# Restart
./start_web.sh
```

### Problem: Experiments won't run

**Check:**
1. Is virtual environment activated?
2. Are dependencies installed?
3. Click "Check System Requirements" in interface

**Solution:**
```bash
# Re-run setup
./setup.sh

# Restart server
./start_web.sh
```

### Problem: Results don't appear

**Check:**
1. Did experiment complete successfully?
2. Check `outputs/` directory for files
3. Try refreshing browser page

**Solution:**
- Click Results tab again
- Refresh page (F5)
- Check console for errors (F12 → Console)

### Problem: Server crashes

**Check terminal for errors:**
- Python import errors → Re-run setup
- Port in use → Change port or kill process
- Permission denied → Check file permissions

**Solution:**
```bash
# Kill processes on port 8080
lsof -ti:8080 | xargs kill -9  # Mac/Linux

# Restart
./start_web.sh
```

---

## 📊 Comparison: Web vs Command-Line

| Feature | Web Interface | Command-Line |
|---------|---------------|--------------|
| **Ease of Use** | ⭐⭐⭐⭐⭐ Click buttons | ⭐⭐⭐ Type commands |
| **Visual Feedback** | ⭐⭐⭐⭐⭐ Progress bars, graphs | ⭐⭐ Text output |
| **Results** | ⭐⭐⭐⭐⭐ View in browser | ⭐⭐⭐ Open files manually |
| **Documentation** | ⭐⭐⭐⭐⭐ Integrated | ⭐⭐⭐ Separate files |
| **Setup** | ⭐⭐⭐⭐ One script | ⭐⭐⭐⭐ One script |
| **Speed** | ⭐⭐⭐⭐ Fast | ⭐⭐⭐⭐⭐ Fastest |
| **Flexibility** | ⭐⭐⭐ Pre-defined | ⭐⭐⭐⭐⭐ Full control |

**Recommendation:** Start with web interface, use command-line for advanced customization.

---

## 🎓 Next Steps

After getting comfortable with the web interface:

1. **Read Documentation**
   - Click "Documentation" tab
   - Read Getting Started guide
   - Understand metrics

2. **Try All Demos**
   - Quick Demo ✓
   - Baseline Comparison
   - Curiosity Demo

3. **Run Research Experiments**
   - Start with shorter ones
   - Let long ones run overnight
   - Analyze results

4. **Explore Code** (Optional)
   - Check `examples/` for demo code
   - Read `src/` for implementation
   - Modify for your research

5. **Read Papers** (Optional)
   - Click "External Resources" tab
   - Read linked papers
   - Understand theoretical foundations

---

## ✅ Quick Reference

**Start Server:**
```bash
./start_web.sh
```

**Open Interface:**
```
http://localhost:8080
```

**Stop Server:**
```
Ctrl+C (in terminal)
```

**First Demo:**
```
1. Open interface
2. Click "Quick Demos" tab
3. Click "▶️ Run" on Quick Demo
4. Wait 5 minutes
5. View results!
```

**Files:**
- `web_server.py` - Backend server
- `web_interface.html` - Frontend UI
- `outputs/` - Results storage
- `start_web.sh` - Launcher

---

## 🎉 You're Ready!

The web interface makes Internal Dimension AI accessible to everyone. No programming knowledge needed - just click and explore!

**Quick Start:**
```bash
./setup.sh        # Once
./start_web.sh    # Every time
```

Then click around and discover consciousness in neural networks! 🧠✨

---

**Questions?** Check:
- GETTING_STARTED.md - Complete tutorial
- TROUBLESHOOTING.md - Problem solutions
- README.md - Project overview

**Enjoy exploring the internal dimensions! 🚀**
