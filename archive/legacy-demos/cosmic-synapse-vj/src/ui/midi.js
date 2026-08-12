/**
 * MIDI Controller Integration
 * Auto-detect MIDI devices and map controls to parameters
 */

export class MIDIController {
    constructor(engine, licenseManager = null) {
        this.engine = engine;
        this.licenseManager = licenseManager;
        this.midiAccess = null;
        this.mappings = new Map(); // CC number -> parameter name
        this.learning = null; // Currently learning CC
        this.isEnabled = false;

        this.init();
    }

    /**
     * Initialize MIDI system
     */
    async init() {
        // Check license
        if (this.licenseManager && !this.licenseManager.featureGated('midi')) {
            console.log('MIDI requires Pro version');
            this.updateStatus('MIDI requires Pro version');
            return;
        }

        if (!navigator.requestMIDIAccess) {
            console.warn('MIDI not supported in this browser');
            this.updateStatus('MIDI not supported in this browser');
            return;
        }

        try {
            this.midiAccess = await navigator.requestMIDIAccess();
            this.setupMIDIInputs();
            this.loadMappings();
            this.isEnabled = true;
            this.updateStatus('MIDI ready - no devices connected');
            console.log('✅ MIDI initialized');
        } catch (err) {
            console.error('MIDI initialization failed:', err);
            this.updateStatus('MIDI initialization failed');
        }
    }

    /**
     * Setup MIDI inputs
     */
    setupMIDIInputs() {
        let deviceCount = 0;

        for (const input of this.midiAccess.inputs.values()) {
            input.onmidimessage = (msg) => this.handleMIDIMessage(msg);
            console.log(`MIDI device: ${input.name}`);
            deviceCount++;
        }

        // Listen for device connections
        this.midiAccess.onstatechange = (e) => {
            if (e.port.type === 'input') {
                if (e.port.state === 'connected') {
                    e.port.onmidimessage = (msg) => this.handleMIDIMessage(msg);
                    this.updateStatus(`MIDI device connected: ${e.port.name}`);
                    this.showMIDIIndicator(true);
                } else {
                    this.updateStatus('MIDI device disconnected');
                }
            }
        };

        if (deviceCount > 0) {
            this.updateStatus(`${deviceCount} MIDI device(s) connected`);
            this.showMIDIIndicator(true);
        }
    }

    /**
     * Handle incoming MIDI message
     */
    handleMIDIMessage(msg) {
        const [status, cc, value] = msg.data;

        // Control Change (CC) messages
        if (status >= 176 && status <= 191) {
            // Learning mode
            if (this.learning) {
                this.addMapping(cc, this.learning);
                this.learning = null;
                this.updateLearningButton(false);
                this.showNotification(`Mapped CC${cc} to ${this.learning}`);
                this.updateMappingsDisplay();
                return;
            }

            // Apply existing mapping
            const param = this.mappings.get(cc);
            if (param) {
                this.applyMIDIValue(param, value);
                this.showMIDIActivity(cc, value);
            }
        }
    }

    /**
     * Apply MIDI value to parameter
     */
    applyMIDIValue(param, midiValue) {
        const normalized = midiValue / 127;

        const ranges = {
            particleCount: { min: 5, max: 100, integer: true },
            audioSensitivity: { min: 0, max: 2 },
            speed: { min: 0.1, max: 2 },
            trailLength: { min: 100, max: 5000, integer: true },
            blendLorenz: { min: 0, max: 1 }
        };

        const range = ranges[param];
        if (range) {
            let value = range.min + normalized * (range.max - range.min);
            if (range.integer) value = Math.round(value);

            // Update engine
            this.engine.setParameter(param, value);

            // Update UI slider
            const slider = document.getElementById(this.paramToElementId(param));
            if (slider) {
                slider.value = value;
                const display = slider.nextElementSibling;
                if (display && display.classList.contains('value-display')) {
                    display.textContent = value;
                }
            }
        }
    }

    /**
     * Convert parameter name to element ID
     */
    paramToElementId(param) {
        // Convert camelCase to kebab-case
        return param.replace(/([A-Z])/g, '-$1').toLowerCase();
    }

    /**
     * Start MIDI learning mode
     */
    startLearning(parameterName) {
        this.learning = parameterName;
        this.showNotification(`Move a MIDI control to map to "${parameterName}"...`);
        this.updateLearningButton(true);
    }

    /**
     * Add MIDI mapping
     */
    addMapping(cc, parameter) {
        this.mappings.set(cc, parameter);
        this.saveMappings();
        console.log(`MIDI mapping: CC${cc} -> ${parameter}`);
    }

    /**
     * Remove MIDI mapping
     */
    removeMapping(cc) {
        this.mappings.delete(cc);
        this.saveMappings();
        this.updateMappingsDisplay();
    }

    /**
     * Save mappings to localStorage
     */
    saveMappings() {
        const mappingsObj = Object.fromEntries(this.mappings);
        localStorage.setItem('cosmic_vj_midi_mappings', JSON.stringify(mappingsObj));
    }

    /**
     * Load mappings from localStorage
     */
    loadMappings() {
        const saved = localStorage.getItem('cosmic_vj_midi_mappings');
        if (saved) {
            try {
                const mappingsObj = JSON.parse(saved);
                this.mappings = new Map(Object.entries(mappingsObj).map(([k, v]) => [parseInt(k), v]));
                this.updateMappingsDisplay();
                console.log(`Loaded ${this.mappings.size} MIDI mappings`);
            } catch (error) {
                console.error('Failed to load MIDI mappings:', error);
            }
        }
    }

    /**
     * Update mappings display
     */
    updateMappingsDisplay() {
        const container = document.getElementById('midi-mappings');
        if (!container) return;

        container.innerHTML = '';

        if (this.mappings.size === 0) {
            container.innerHTML = '<div class="status-message">No MIDI mappings configured</div>';
            return;
        }

        this.mappings.forEach((param, cc) => {
            const item = document.createElement('div');
            item.className = 'midi-mapping-item';
            item.innerHTML = `
                <span class="cc-number">CC${cc}</span>
                <span class="parameter">${param}</span>
                <span class="remove-btn" data-cc="${cc}">✕</span>
            `;

            const removeBtn = item.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                this.removeMapping(cc);
            });

            container.appendChild(item);
        });
    }

    /**
     * Update status message
     */
    updateStatus(message) {
        const statusElement = document.getElementById('midi-status');
        if (statusElement) {
            statusElement.textContent = message;
        }
    }

    /**
     * Update learning button state
     */
    updateLearningButton(isLearning) {
        const button = document.getElementById('midi-learn');
        if (button) {
            if (isLearning) {
                button.textContent = 'Cancel Learning';
                button.classList.add('midi-learning');
            } else {
                button.textContent = 'Learn MIDI Mapping';
                button.classList.remove('midi-learning');
            }
        }
    }

    /**
     * Show MIDI activity indicator
     */
    showMIDIActivity(cc, value) {
        // Flash MIDI indicator
        const indicator = document.getElementById('midi-indicator');
        if (indicator) {
            indicator.style.opacity = '1';
            setTimeout(() => {
                if (!this.isActive) {
                    indicator.style.opacity = '0.5';
                }
            }, 100);
        }
    }

    /**
     * Show/hide MIDI indicator
     */
    showMIDIIndicator(show) {
        const indicator = document.getElementById('midi-indicator');
        if (indicator) {
            if (show) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        }
    }

    /**
     * Show notification (use UI controls notification system)
     */
    showNotification(message) {
        const event = new CustomEvent('show-notification', {
            detail: { message, type: 'info' }
        });
        window.dispatchEvent(event);
    }

    /**
     * Setup learn button
     */
    setupLearnButton() {
        const button = document.getElementById('midi-learn');
        if (button) {
            button.addEventListener('click', () => {
                if (this.learning) {
                    this.learning = null;
                    this.updateLearningButton(false);
                } else {
                    // For demo, learn particle count
                    // In full implementation, show parameter selector
                    this.startLearning('particleCount');
                }
            });
        }
    }
}

export default MIDIController;
