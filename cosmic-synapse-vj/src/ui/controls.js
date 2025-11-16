/**
 * UI Controls Manager
 * Handles all user interface interactions and state management
 */

export class UIControls {
    constructor(engine, audioAnalyzer) {
        this.engine = engine;
        this.audioAnalyzer = audioAnalyzer;
        this.currentPreset = null;

        this.init();
    }

    init() {
        this.setupPresetButtons();
        this.setupBasicControls();
        this.setupAdvancedControls();
        this.setupCollapsiblePanels();
        this.setupAudioControls();
    }

    /**
     * Setup preset buttons
     */
    setupPresetButtons() {
        const buttons = document.querySelectorAll('.preset-button');

        buttons.forEach(button => {
            button.addEventListener('click', async () => {
                const presetName = button.dataset.preset;
                await this.loadPreset(presetName);

                // Update active state
                buttons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    /**
     * Load preset from JSON file
     */
    async loadPreset(presetName) {
        try {
            const response = await fetch(`presets/${presetName}.json`);
            const preset = await response.json();

            this.engine.loadPreset(preset);
            this.updateUIFromPreset(preset);
            this.currentPreset = presetName;

            this.showNotification(`Loaded preset: ${preset.name}`, 'success');
        } catch (error) {
            console.error('Failed to load preset:', error);
            this.showNotification('Failed to load preset', 'error');
        }
    }

    /**
     * Update UI controls to match preset
     */
    updateUIFromPreset(preset) {
        // Update basic controls
        if (preset.particleCount !== undefined) {
            this.setSliderValue('particle-count', preset.particleCount);
        }
        if (preset.audioSensitivity !== undefined) {
            this.setSliderValue('audio-sensitivity', preset.audioSensitivity);
        }
        if (preset.speed !== undefined) {
            this.setSliderValue('speed', preset.speed);
        }
        if (preset.colorPalette !== undefined) {
            document.getElementById('color-palette').value = preset.colorPalette;
        }

        // Update advanced controls
        if (preset.trailLength !== undefined) {
            this.setSliderValue('trail-length', preset.trailLength);
        }
        if (preset.physics && preset.physics.blendLorenz !== undefined) {
            this.setSliderValue('blend-lorenz', preset.physics.blendLorenz);
        }
        if (preset.phiHarmonics !== undefined) {
            document.getElementById('phi-harmonics').checked = preset.phiHarmonics;
        }
        if (preset.camera && preset.camera.autoRotate !== undefined) {
            document.getElementById('auto-rotate').checked = preset.camera.autoRotate;
        }
    }

    /**
     * Helper to set slider value and update display
     */
    setSliderValue(id, value) {
        const slider = document.getElementById(id);
        if (slider) {
            slider.value = value;
            const display = slider.nextElementSibling;
            if (display && display.classList.contains('value-display')) {
                display.textContent = value;
            }
        }
    }

    /**
     * Setup basic controls
     */
    setupBasicControls() {
        // Particle Count
        this.setupSlider('particle-count', (value) => {
            this.engine.setParticleCount(parseInt(value));
        });

        // Audio Sensitivity
        this.setupSlider('audio-sensitivity', (value) => {
            this.engine.setAudioSensitivity(parseFloat(value));
        });

        // Color Palette
        const paletteSelect = document.getElementById('color-palette');
        paletteSelect.addEventListener('change', (e) => {
            this.engine.setColorPalette(e.target.value);
        });

        // Speed
        this.setupSlider('speed', (value) => {
            this.engine.setSpeed(parseFloat(value));
        });
    }

    /**
     * Setup advanced controls
     */
    setupAdvancedControls() {
        // Trail Length
        this.setupSlider('trail-length', (value) => {
            this.engine.setTrailLength(parseInt(value));
        });

        // Physics Blend
        this.setupSlider('blend-lorenz', (value) => {
            this.engine.setBlendLorenz(parseFloat(value));
        });

        // φ-Harmonics
        const phiCheckbox = document.getElementById('phi-harmonics');
        phiCheckbox.addEventListener('change', (e) => {
            this.engine.setPhiHarmonics(e.target.checked);
        });

        // Auto Rotate (handled by main app)
        const autoRotateCheckbox = document.getElementById('auto-rotate');
        autoRotateCheckbox.addEventListener('change', (e) => {
            this.engine.config.autoRotate = e.target.checked;
        });
    }

    /**
     * Setup slider with callback
     */
    setupSlider(id, callback) {
        const slider = document.getElementById(id);
        if (!slider) return;

        const valueDisplay = slider.nextElementSibling;

        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            if (valueDisplay && valueDisplay.classList.contains('value-display')) {
                valueDisplay.textContent = value;
            }
            callback(value);
        });
    }

    /**
     * Setup collapsible panels
     */
    setupCollapsiblePanels() {
        const panels = [
            { header: 'advanced-header', content: 'advanced-controls' },
            { header: 'midi-header', content: 'midi-controls' },
            { header: 'export-header', content: 'export-controls' }
        ];

        panels.forEach(({ header, content }) => {
            const headerElement = document.getElementById(header);
            const contentElement = document.getElementById(content);

            if (headerElement && contentElement) {
                headerElement.addEventListener('click', () => {
                    const section = headerElement.parentElement;
                    section.classList.toggle('open');
                    contentElement.classList.toggle('open');
                });
            }
        });
    }

    /**
     * Setup audio controls
     */
    setupAudioControls() {
        // Microphone button
        const micButton = document.getElementById('mic-button');
        micButton.addEventListener('click', async () => {
            if (this.audioAnalyzer.isActive && this.audioAnalyzer.microphone) {
                this.audioAnalyzer.stopMicrophone();
                micButton.classList.remove('active');
                micButton.innerHTML = '<span class="icon">🎤</span> Start Microphone';
                document.getElementById('audio-indicator').classList.remove('active');
            } else {
                const success = await this.audioAnalyzer.startMicrophone();
                if (success) {
                    micButton.classList.add('active');
                    micButton.innerHTML = '<span class="icon">🎤</span> Stop Microphone';
                    document.getElementById('audio-indicator').classList.add('active');
                    this.showNotification('Microphone activated', 'success');
                } else {
                    this.showNotification('Microphone access denied', 'error');
                }
            }
        });

        // Audio file upload
        const audioFileInput = document.getElementById('audio-file');
        audioFileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    await this.audioAnalyzer.loadAudioFile(file);
                    document.getElementById('audio-indicator').classList.add('active');
                    this.showNotification(`Playing: ${file.name}`, 'success');
                } catch (error) {
                    this.showNotification('Failed to load audio file', 'error');
                }
            }
        });
    }

    /**
     * Update metrics display
     */
    updateMetricsDisplay(metrics) {
        const elements = {
            'metric-r-omega': metrics.R_omega.toFixed(3),
            'metric-r-psi': metrics.R_psi.toFixed(3),
            'metric-causal': metrics.causalDensity.toFixed(3),
            'metric-rms': (this.audioAnalyzer.features.rms * 100).toFixed(1) + '%'
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        container.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

export default UIControls;
