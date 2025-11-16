# Getting Started - Internal Dimension AI
## For Researchers (No Programming Experience Needed!)

This guide will get you up and running in **less than 15 minutes**.

---

## 🎯 What You'll Do

1. **Setup** (5-10 minutes) - Install everything automatically
2. **Run a demo** (5 minutes) - See it work!
3. **Explore** - Try different experiments

No coding required! Everything uses simple menus and scripts.

---

## 📋 Before You Start

**You need:**
- A computer (Mac, Linux, or Windows)
- Internet connection
- 2GB of free disk space
- Python 3.8 or higher installed

**Check if you have Python:**
```bash
python3 --version
```

Should show something like `Python 3.8.10` or higher.

**Don't have Python?** Install it:
- **Mac**: Install from https://www.python.org/downloads/
- **Windows**: Install from https://www.python.org/downloads/ (check "Add to PATH")
- **Linux**: Usually pre-installed, or run `sudo apt install python3`

---

## 🚀 Step 1: Setup (First Time Only)

Open a terminal and navigate to this directory:

```bash
cd /path/to/internal-dimension-ai
```

### On Mac or Linux:

```bash
chmod +x setup.sh    # Make executable (only needed once)
./setup.sh           # Run setup
```

### On Windows:

```bash
setup_windows.bat
```

**What happens:**
- Creates a safe Python environment (won't affect your system)
- Installs all required packages
- Verifies everything works
- Takes 5-10 minutes

**You only do this once!**

---

## ▶️ Step 2: Run the Easy Interface

### On Mac or Linux:

```bash
./start.sh
```

### On Windows:

```bash
start_windows.bat
```

You'll see a menu like this:

```
===========================================================================
  INTERNAL DIMENSION AI - RESEARCHER INTERFACE
===========================================================================

What would you like to do?

  QUICK DEMOS (recommended for first-time users):
    1. Run Quick Demo (5 minutes) - Train a simple agent
    2. Run Baseline Comparison (15 minutes) - Compare IDN vs Standard
    3. Run Curiosity Demo (10 minutes) - Test curiosity-driven learning

  RESEARCH EXPERIMENTS (for comprehensive analysis):
    4. Dimensional Scaling Study - Test different internal dimensions
    5. Emergence Timeline Analysis - Track meta-awareness emergence
    6. Ablation Study - Test component contributions

  ANALYSIS TOOLS:
    7. Visualize Existing Results
    8. Evaluate Consciousness Metrics

  OTHER:
    9. Check System Requirements
    0. Exit

Enter your choice (0-9):
```

---

## 🎬 Step 3: Run Your First Demo

**Type `1` and press ENTER**

This will:
- Train a simple AI agent (5 minutes)
- Show consciousness metrics
- Generate visualizations
- Save results to `outputs/quick_demo/`

**You'll see:**
- Progress bar showing training
- Episode rewards increasing
- Consciousness metrics evolving
- Final results and visualization

**When it's done**, you'll find:
- `outputs/quick_demo/quick_demo_results.png` - Beautiful visualization
- Metrics showing the agent learned!

---

## 📊 Understanding the Results

After the demo finishes, you'll see:

```
Training Results:
   Final reward (last 10 episodes): 0.856
   Final x₁₂ (awareness):          0.234
   Final m₁₂ (memory):             0.567
   Consciousness score:            0.445

Consciousness Metrics:
   R_ω (Synaptic Diversity):      0.623 ✓
   R_ψ (Phase Coherence):         0.712
   Autonomy Score:                0.534
   Consciousness Level: Moderate
```

**What this means:**
- **Final reward**: How well the agent learned (higher is better)
- **x₁₂ (awareness)**: Internal surprise/novelty measure
- **m₁₂ (memory)**: Accumulated experience
- **R_ω, R_ψ**: Consciousness complexity metrics
- **Consciousness Level**: Overall assessment (None/Low/Moderate/High/Very High)

---

## 🔬 Running Research Experiments

After trying the demos, you can run full research experiments:

### Option 4: Dimensional Scaling Study
- **What**: Tests 7 different internal dimension sizes
- **Why**: Answers "Does dimension size affect learning?"
- **Time**: 4-8 hours
- **Trials**: 35 different configurations
- **Output**: Statistical analysis and visualizations

### Option 5: Emergence Timeline Analysis
- **What**: Tracks how meta-awareness emerges during training
- **Why**: Answers "Does consciousness gradually emerge?"
- **Time**: 6-10 hours
- **Trials**: 10 replications × 1000 episodes
- **Output**: Timeline visualizations and emergence statistics

### Option 6: Ablation Study
- **What**: Tests which components are necessary
- **Why**: Answers "What makes this architecture work?"
- **Time**: 10-15 hours
- **Trials**: 90 different configurations
- **Output**: Comprehensive component analysis

**Note**: These take many hours! Start them and let them run overnight or over a weekend.

---

## 📁 Where Are My Results?

All results are saved in the `outputs/` directory:

```
outputs/
├── quick_demo/
│   ├── quick_demo_results.png    # Visualization
│   └── training_log.txt          # Detailed log
├── baseline_comparison/
│   ├── comparison_plot.png
│   └── results.csv
└── experiments/
    ├── dimensional_scaling/
    │   ├── results.csv
    │   ├── plots/
    │   └── statistics.json
    └── ...
```

**To view:**
- PNG files: Open with any image viewer
- CSV files: Open with Excel, Google Sheets, or text editor
- JSON files: Open with text editor

---

## 🔄 Running Again

**Every time you want to use the system:**

### Mac/Linux:
```bash
./start.sh
```

### Windows:
```bash
start_windows.bat
```

That's it! The virtual environment activates automatically.

---

## 💡 Tips for Researchers

### Start Small
1. Run Quick Demo first (option 1)
2. Try Baseline Comparison (option 2)
3. Then move to full experiments (options 4-6)

### Save Your Work
- Results are automatically saved to `outputs/`
- Copy important results to a backup location
- Experiments can be re-run with different settings

### Modify Experiments
Want to change experiment settings? Edit the config files:
- `configs/experiments/dimensional_scaling.yaml`
- `configs/experiments/emergence_timeline.yaml`
- `configs/experiments/ablation_study.yaml`

Change things like:
- Number of episodes
- Number of replications
- Environment size
- Learning parameters

### Use GPU for Speed
If you have a NVIDIA GPU:
- The system automatically detects and uses it
- Experiments run 5-10x faster
- No configuration needed!

---

## ❓ Common Questions

**Q: How long do experiments take?**
A: Quick demos: 5-15 min. Full experiments: 4-15 hours depending on the experiment.

**Q: Can I stop an experiment and resume later?**
A: Currently no - experiments must run to completion. Start with shorter demos first.

**Q: Do I need to understand the code?**
A: No! The menu interface handles everything. Just pick options and press enter.

**Q: What if something breaks?**
A: Check `TROUBLESHOOTING.md` - it has solutions for common problems.

**Q: Can I use this on a remote server?**
A: Yes! SSH in and run the same commands. Copy results back using `scp`.

**Q: How much disk space do I need?**
A: About 2GB for installation, plus 1-5GB for experiment results.

**Q: Can multiple experiments run at once?**
A: Not recommended - they'll compete for resources. Run one at a time.

---

## 🆘 Help!

**Something not working?**

1. **Read error messages** - they usually tell you what's wrong
2. **Check TROUBLESHOOTING.md** - solutions for common problems
3. **Verify setup completed** - re-run `./setup.sh` if needed
4. **Make sure environment is activated** - use `./start.sh` not manual commands

**Still stuck?**

Check you:
- Are in the `internal-dimension-ai` directory
- Ran setup successfully
- Are using `./start.sh` to run
- Have Python 3.8 or higher

---

## 📚 Next Steps

Once you're comfortable:

1. **Read the research plan**: `RESEARCH_PLAN.md`
2. **Understand the metrics**: Check documentation in `docs/`
3. **Modify experiments**: Edit config files in `configs/experiments/`
4. **Write your own**: See examples in `examples/`

---

## 🎓 For Advanced Users

If you want to code your own experiments:

```bash
source venv/bin/activate  # Activate environment

# Run custom Python code
python your_experiment.py

# Or use the examples as templates
cp examples/01_quick_demo.py my_experiment.py
# Edit my_experiment.py
python my_experiment.py
```

See `README.md` for full programming documentation.

---

## ✅ Quick Reference

**First time:**
```bash
./setup.sh           # Setup (one time)
./start.sh           # Run easy interface
# Select option 1    # Try quick demo
```

**Every time after:**
```bash
./start.sh           # That's it!
```

**Results location:**
```bash
ls outputs/          # See all results
open outputs/quick_demo/quick_demo_results.png  # View visualization
```

---

**You're ready! Start with `./setup.sh` then `./start.sh` and choose option 1.**

Happy researching! 🧠✨
