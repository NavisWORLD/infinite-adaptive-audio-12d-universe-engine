/**
 * Video Recording System
 * Canvas recording to WebM/MP4
 */

export class VideoRecorder {
    constructor(canvas, licenseManager = null) {
        this.canvas = canvas;
        this.licenseManager = licenseManager;
        this.mediaRecorder = null;
        this.chunks = [];
        this.isRecording = false;
    }

    /**
     * Start recording
     */
    start(options = {}) {
        // Check license
        if (this.licenseManager && !this.licenseManager.featureGated('video_recording')) {
            return false;
        }

        if (this.isRecording) return false;

        const {
            mimeType = 'video/webm;codecs=vp9',
            videoBitsPerSecond = 10000000, // 10 Mbps
            fps = 60
        } = options;

        try {
            const stream = this.canvas.captureStream(fps);

            this.mediaRecorder = new MediaRecorder(stream, {
                mimeType,
                videoBitsPerSecond
            });

            this.mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    this.chunks.push(e.data);
                }
            };

            this.mediaRecorder.onstop = () => {
                this.saveVideo(mimeType);
            };

            this.chunks = [];
            this.mediaRecorder.start();
            this.isRecording = true;

            return true;
        } catch (error) {
            console.error('Recording failed:', error);
            return false;
        }
    }

    /**
     * Stop recording
     */
    stop() {
        if (!this.isRecording) return;

        this.mediaRecorder.stop();
        this.isRecording = false;
    }

    /**
     * Save recorded video
     */
    saveVideo(mimeType) {
        const blob = new Blob(this.chunks, { type: mimeType });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `cosmic-synapse-${Date.now()}.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
        this.chunks = [];
    }
}

export default VideoRecorder;
