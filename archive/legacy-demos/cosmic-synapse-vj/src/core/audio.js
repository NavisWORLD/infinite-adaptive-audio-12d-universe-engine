/**
 * Audio Analysis System
 * Real-time FFT analysis and audio feature extraction
 * Supports microphone input and audio file playback
 */

export class AudioAnalyzer {
    constructor(options = {}) {
        this.audioContext = null;
        this.analyser = null;
        this.microphone = null;
        this.audioElement = null;
        this.sourceNode = null;

        // FFT configuration
        this.fftSize = options.fftSize || 2048;
        this.smoothingTimeConstant = options.smoothing || 0.8;

        // Data buffers
        this.frequencyData = null;
        this.timeDomainData = null;

        // Extracted features
        this.features = {
            rms: 0,
            fundamentalFreq: 440,
            spectralCentroid: 440,
            spectrum: new Float32Array(128),
            bands: {
                sub: 0,      // 20-60 Hz
                bass: 0,     // 60-250 Hz
                low: 0,      // 250-500 Hz
                mid: 0,      // 500-2000 Hz
                high: 0,     // 2000-4000 Hz
                presence: 0  // 4000-6000 Hz
            }
        };

        this.isActive = false;
    }

    /**
     * Initialize Web Audio API
     */
    async init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = this.fftSize;
            this.analyser.smoothingTimeConstant = this.smoothingTimeConstant;

            const bufferLength = this.analyser.frequencyBinCount;
            this.frequencyData = new Uint8Array(bufferLength);
            this.timeDomainData = new Uint8Array(bufferLength);

            console.log('✅ Audio system initialized');
            return true;
        } catch (error) {
            console.error('❌ Audio initialization failed:', error);
            return false;
        }
    }

    /**
     * Start microphone input
     */
    async startMicrophone() {
        if (!this.audioContext) await this.init();

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.microphone = stream;
            this.sourceNode = this.audioContext.createMediaStreamSource(stream);
            this.sourceNode.connect(this.analyser);
            this.isActive = true;

            console.log('🎤 Microphone started');
            return true;
        } catch (error) {
            console.error('❌ Microphone access denied:', error);
            return false;
        }
    }

    /**
     * Stop microphone input
     */
    stopMicrophone() {
        if (this.microphone) {
            this.microphone.getTracks().forEach(track => track.stop());
            this.microphone = null;
        }
        if (this.sourceNode) {
            this.sourceNode.disconnect();
            this.sourceNode = null;
        }
        this.isActive = false;
        console.log('🎤 Microphone stopped');
    }

    /**
     * Load and play audio file
     */
    async loadAudioFile(file) {
        if (!this.audioContext) await this.init();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = async (e) => {
                try {
                    const arrayBuffer = e.target.result;
                    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

                    // Create audio element for playback
                    this.audioElement = new Audio();
                    this.audioElement.src = URL.createObjectURL(file);
                    this.audioElement.loop = true;

                    // Connect to analyser
                    this.sourceNode = this.audioContext.createMediaElementSource(this.audioElement);
                    this.sourceNode.connect(this.analyser);
                    this.analyser.connect(this.audioContext.destination);

                    // Play
                    await this.audioElement.play();
                    this.isActive = true;

                    console.log('🎵 Audio file loaded:', file.name);
                    resolve(true);
                } catch (error) {
                    console.error('❌ Audio file load error:', error);
                    reject(error);
                }
            };

            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    /**
     * Stop audio file playback
     */
    stopAudioFile() {
        if (this.audioElement) {
            this.audioElement.pause();
            this.audioElement = null;
        }
        if (this.sourceNode) {
            this.sourceNode.disconnect();
            this.sourceNode = null;
        }
        this.isActive = false;
    }

    /**
     * Analyze current audio frame
     */
    analyze() {
        if (!this.analyser || !this.isActive) {
            return this.features;
        }

        // Get frequency and time domain data
        this.analyser.getByteFrequencyData(this.frequencyData);
        this.analyser.getByteTimeDomainData(this.timeDomainData);

        // Compute RMS energy
        this.features.rms = this.computeRMS();

        // Compute spectral centroid
        this.features.spectralCentroid = this.computeSpectralCentroid();

        // Find fundamental frequency
        this.features.fundamentalFreq = this.computeFundamentalFrequency();

        // Compute frequency bands
        this.features.bands = this.computeFrequencyBands();

        // Simplified spectrum for visualization
        this.features.spectrum = this.getSimplifiedSpectrum(128);

        return this.features;
    }

    /**
     * Compute RMS (Root Mean Square) energy
     */
    computeRMS() {
        let sum = 0;
        for (let i = 0; i < this.timeDomainData.length; i++) {
            const normalized = (this.timeDomainData[i] - 128) / 128;
            sum += normalized * normalized;
        }
        return Math.sqrt(sum / this.timeDomainData.length);
    }

    /**
     * Compute spectral centroid (brightness)
     */
    computeSpectralCentroid() {
        let weightedSum = 0;
        let sum = 0;

        const sampleRate = this.audioContext.sampleRate;
        const binWidth = sampleRate / this.fftSize;

        for (let i = 0; i < this.frequencyData.length; i++) {
            const frequency = i * binWidth;
            const magnitude = this.frequencyData[i];
            weightedSum += frequency * magnitude;
            sum += magnitude;
        }

        return sum > 0 ? weightedSum / sum : 440;
    }

    /**
     * Compute fundamental frequency using autocorrelation
     */
    computeFundamentalFrequency() {
        const sampleRate = this.audioContext.sampleRate;

        // Simple peak detection in frequency domain
        let maxMagnitude = 0;
        let maxIndex = 0;

        const startBin = Math.floor(80 / (sampleRate / this.fftSize));  // Start at 80 Hz
        const endBin = Math.floor(1000 / (sampleRate / this.fftSize));  // End at 1000 Hz

        for (let i = startBin; i < endBin && i < this.frequencyData.length; i++) {
            if (this.frequencyData[i] > maxMagnitude) {
                maxMagnitude = this.frequencyData[i];
                maxIndex = i;
            }
        }

        const binWidth = sampleRate / this.fftSize;
        const freq = maxIndex * binWidth;

        return freq > 20 && freq < 5000 ? freq : 440;
    }

    /**
     * Compute frequency band energies
     */
    computeFrequencyBands() {
        const sampleRate = this.audioContext.sampleRate;
        const binWidth = sampleRate / this.fftSize;

        const bands = {
            sub: 0,      // 20-60 Hz
            bass: 0,     // 60-250 Hz
            low: 0,      // 250-500 Hz
            mid: 0,      // 500-2000 Hz
            high: 0,     // 2000-4000 Hz
            presence: 0  // 4000-6000 Hz
        };

        const ranges = {
            sub: [20, 60],
            bass: [60, 250],
            low: [250, 500],
            mid: [500, 2000],
            high: [2000, 4000],
            presence: [4000, 6000]
        };

        for (const [band, [minFreq, maxFreq]] of Object.entries(ranges)) {
            const minBin = Math.floor(minFreq / binWidth);
            const maxBin = Math.ceil(maxFreq / binWidth);

            let sum = 0;
            let count = 0;

            for (let i = minBin; i <= maxBin && i < this.frequencyData.length; i++) {
                sum += this.frequencyData[i];
                count++;
            }

            bands[band] = count > 0 ? sum / count / 255 : 0;
        }

        return bands;
    }

    /**
     * Get simplified spectrum for visualization
     */
    getSimplifiedSpectrum(targetSize) {
        const spectrum = new Float32Array(targetSize);
        const binSize = Math.floor(this.frequencyData.length / targetSize);

        for (let i = 0; i < targetSize; i++) {
            let sum = 0;
            for (let j = 0; j < binSize; j++) {
                const index = i * binSize + j;
                if (index < this.frequencyData.length) {
                    sum += this.frequencyData[index];
                }
            }
            spectrum[i] = sum / binSize / 255;
        }

        return spectrum;
    }

    /**
     * Get current audio features
     */
    getFeatures() {
        return this.features;
    }

    /**
     * Resume audio context (needed after user interaction)
     */
    async resume() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
    }

    /**
     * Clean up resources
     */
    dispose() {
        this.stopMicrophone();
        this.stopAudioFile();

        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }

        this.analyser = null;
        this.frequencyData = null;
        this.timeDomainData = null;
    }
}

export default AudioAnalyzer;
