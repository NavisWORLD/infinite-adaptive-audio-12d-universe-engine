/**
 * Cosmic Synapse VJ - Main Application Bootstrap
 * Brings together all components: engine, audio, UI, MIDI, export
 */

import { CosmicSynapseEngine } from './core/engine.js';
import { AudioAnalyzer } from './core/audio.js';
import { UIControls } from './ui/controls.js';
import { MIDIController } from './ui/midi.js';
import { ScreenshotExporter } from './export/screenshot.js';
import { VideoRecorder } from './export/video-recorder.js';

class CosmicSynapseVJ {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.engine = null;
        this.audioAnalyzer = null;
        this.uiControls = null;
        this.midiController = null;
        this.screenshotExporter = null;
        this.videoRecorder = null;

        this.isRunning = false;
        this.lastTime = 0;
        this.fpsHistory = [];

        this.init();
    }

    /**
     * Initialize application
     */
    async init() {
        console.log('🚀 Cosmic Synapse VJ initializing...');

        // Setup THREE.js scene
        this.setupScene();

        // Initialize engine
        this.engine = new CosmicSynapseEngine(this.scene);

        // Initialize audio system
        this.audioAnalyzer = new AudioAnalyzer();
        await this.audioAnalyzer.init();

        // Initialize UI controls
        this.uiControls = new UIControls(this.engine, this.audioAnalyzer);

        // Initialize MIDI (Pro feature)
        this.midiController = new MIDIController(this.engine);
        this.midiController.setupLearnButton();

        // Initialize export systems
        this.screenshotExporter = new ScreenshotExporter(this.renderer.domElement);
        this.videoRecorder = new VideoRecorder(this.renderer.domElement);

        // Setup export buttons
        this.setupExportButtons();

        // Setup notification listener
        this.setupNotificationListener();

        // Load default preset
        await this.uiControls.loadPreset('cosmic');

        // Start render loop
        this.isRunning = true;
        this.animate();

        console.log('✅ Cosmic Synapse VJ ready!');
    }

    /**
     * Setup THREE.js scene
     */
    setupScene() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);

        // Create camera
        const canvas = document.getElementById('main-canvas');
        const aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        this.camera.position.z = 50;

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true // For screenshots
        });
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // Add point light
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(10, 10, 10);
        this.scene.add(pointLight);

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());

        console.log('✅ THREE.js scene initialized');
    }

    /**
     * Handle window resize
     */
    onWindowResize() {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

    /**
     * Main animation loop
     */
    animate(currentTime = 0) {
        if (!this.isRunning) return;

        requestAnimationFrame((time) => this.animate(time));

        // Calculate delta time
        const dt = this.lastTime ? (currentTime - this.lastTime) / 1000 : 0.016;
        this.lastTime = currentTime;

        // Analyze audio
        const audioData = this.audioAnalyzer.analyze();
        this.engine.setAudioData(audioData);

        // Update engine
        this.engine.update(dt);

        // Auto-rotate camera if enabled
        if (this.engine.config.autoRotate) {
            this.camera.position.x = Math.sin(currentTime * 0.0001) * 50;
            this.camera.position.z = Math.cos(currentTime * 0.0001) * 50;
            this.camera.lookAt(0, 0, 0);
        }

        // Render scene
        this.renderer.render(this.scene, this.camera);

        // Update UI metrics
        const metrics = this.engine.getMetrics();
        this.uiControls.updateMetricsDisplay(metrics);

        // Update FPS
        this.updateFPS(dt);
    }

    /**
     * Update FPS counter
     */
    updateFPS(dt) {
        const fps = dt > 0 ? 1 / dt : 60;
        this.fpsHistory.push(fps);
        if (this.fpsHistory.length > 30) {
            this.fpsHistory.shift();
        }

        const avgFPS = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;
        const fpsElement = document.getElementById('fps');
        if (fpsElement) {
            fpsElement.textContent = Math.round(avgFPS);
        }
    }

    /**
     * Setup export buttons
     */
    setupExportButtons() {
        // Screenshot button
        const screenshotBtn = document.getElementById('screenshot-button');
        screenshotBtn.addEventListener('click', () => {
            this.screenshotExporter.capture({ resolution: '4K', format: 'png' });
            this.showNotification('Screenshot saved!', 'success');
        });

        // Video record button
        const videoBtn = document.getElementById('video-record-button');
        videoBtn.addEventListener('click', () => {
            if (this.videoRecorder.isRecording) {
                this.videoRecorder.stop();
                videoBtn.classList.remove('recording');
                videoBtn.innerHTML = '<span class="icon">🎥</span> Record Video';
                this.showNotification('Recording stopped and saved', 'success');
            } else {
                const success = this.videoRecorder.start();
                if (success) {
                    videoBtn.classList.add('recording');
                    videoBtn.innerHTML = '<span class="icon">⏹️</span> Stop Recording';
                    this.showNotification('Recording started...', 'info');
                }
            }
        });
    }

    /**
     * Setup notification listener
     */
    setupNotificationListener() {
        window.addEventListener('show-notification', (e) => {
            this.showNotification(e.detail.message, e.detail.type);
        });
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        this.uiControls.showNotification(message, type);
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.cosmicVJ = new CosmicSynapseVJ();
    });
} else {
    window.cosmicVJ = new CosmicSynapseVJ();
}

export default CosmicSynapseVJ;
