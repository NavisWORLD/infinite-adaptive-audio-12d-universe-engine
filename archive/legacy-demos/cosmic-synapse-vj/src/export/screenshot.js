/**
 * Screenshot Export System
 * High-resolution canvas capture
 */

export class ScreenshotExporter {
    constructor(canvas, licenseManager = null) {
        this.canvas = canvas;
        this.licenseManager = licenseManager;
    }

    /**
     * Capture screenshot
     */
    capture(options = {}) {
        const {
            resolution = this.licenseManager?.isPro ? '4K' : '1080p',
            format = 'png',
            quality = 1.0
        } = options;

        // Check if pro features are gated
        if (resolution === '4K' || resolution === '8K') {
            if (this.licenseManager && !this.licenseManager.featureGated('4K_export')) {
                return;
            }
        }

        const resolutions = {
            '1080p': { width: 1920, height: 1080 },
            '4K': { width: 3840, height: 2160 },
            '8K': { width: 7680, height: 4320 },
            'native': { width: this.canvas.width, height: this.canvas.height }
        };

        const targetRes = resolutions[resolution] || resolutions['1080p'];

        // Create temporary canvas
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = targetRes.width;
        tempCanvas.height = targetRes.height;
        const ctx = tempCanvas.getContext('2d');

        // Draw scaled canvas
        ctx.drawImage(this.canvas, 0, 0, targetRes.width, targetRes.height);

        // Convert to blob and download
        const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
        const dataURL = tempCanvas.toDataURL(mimeType, quality);

        this.download(dataURL, `cosmic-synapse-${Date.now()}.${format}`);

        return true;
    }

    /**
     * Download file
     */
    download(dataURL, filename) {
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

export default ScreenshotExporter;
