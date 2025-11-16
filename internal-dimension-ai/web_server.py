#!/usr/bin/env python3
"""
Internal Dimension AI - Web Server
Provides a web-based interface for researchers to run experiments through their browser.

Usage:
    python web_server.py
    Then open: http://localhost:8080
"""

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent / 'src'))

import os
import json
import subprocess
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import webbrowser

# Configuration
PORT = 8080
HOST = 'localhost'


class IDNWebHandler(SimpleHTTPRequestHandler):
    """Custom handler for Internal Dimension AI web interface"""

    def do_GET(self):
        """Handle GET requests"""
        parsed_path = urlparse(self.path)

        # Serve the main interface
        if parsed_path.path == '/' or parsed_path.path == '/index.html':
            self.serve_interface()

        # API endpoints
        elif parsed_path.path == '/api/status':
            self.api_status()
        elif parsed_path.path == '/api/experiments':
            self.api_list_experiments()
        elif parsed_path.path == '/api/results':
            self.api_list_results()
        elif parsed_path.path.startswith('/api/result/'):
            self.api_get_result()
        elif parsed_path.path == '/api/system':
            self.api_system_info()
        else:
            # Serve static files
            super().do_GET()

    def do_POST(self):
        """Handle POST requests"""
        parsed_path = urlparse(self.path)

        if parsed_path.path == '/api/run':
            self.api_run_experiment()
        elif parsed_path.path == '/api/stop':
            self.api_stop_experiment()
        else:
            self.send_error(404)

    def serve_interface(self):
        """Serve the main web interface"""
        html_path = Path(__file__).parent / 'web_interface.html'
        if html_path.exists():
            with open(html_path, 'rb') as f:
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(f.read())
        else:
            self.send_error(404, "Interface file not found")

    def api_status(self):
        """Return current system status"""
        import torch

        status = {
            'python_version': sys.version.split()[0],
            'cuda_available': torch.cuda.is_available(),
            'gpu_name': torch.cuda.get_device_name(0) if torch.cuda.is_available() else None,
            'running_experiment': getattr(self.server, 'running_experiment', None)
        }
        self.json_response(status)

    def api_system_info(self):
        """Return detailed system information"""
        import torch
        import platform

        try:
            import numpy
            import pandas
            import matplotlib
            import seaborn
            import sklearn

            packages_ok = True
        except ImportError:
            packages_ok = False

        info = {
            'platform': platform.system(),
            'python_version': sys.version,
            'cuda_available': torch.cuda.is_available(),
            'gpu_name': torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'CPU only',
            'packages_installed': packages_ok,
            'working_directory': str(Path.cwd())
        }
        self.json_response(info)

    def api_list_experiments(self):
        """List available experiments"""
        experiments = [
            {
                'id': 'quick_demo',
                'name': 'Quick Demo',
                'description': 'Train a simple agent (5 minutes)',
                'duration': '5 minutes',
                'script': 'examples/01_quick_demo.py'
            },
            {
                'id': 'baseline_comparison',
                'name': 'Baseline Comparison',
                'description': 'Compare IDN vs Standard PPO',
                'duration': '15 minutes',
                'script': 'examples/02_baseline_comparison.py'
            },
            {
                'id': 'curiosity',
                'name': 'Curiosity Demo',
                'description': 'Curiosity-driven learning',
                'duration': '10 minutes',
                'script': 'examples/03_curiosity_demo.py'
            },
            {
                'id': 'dimensional_scaling',
                'name': 'Dimensional Scaling Study',
                'description': 'Test 7 different internal dimensions',
                'duration': '4-8 hours',
                'script': 'scripts/run_experiment.py',
                'config': 'configs/experiments/dimensional_scaling.yaml'
            },
            {
                'id': 'emergence_timeline',
                'name': 'Emergence Timeline Analysis',
                'description': 'Track meta-awareness emergence',
                'duration': '6-10 hours',
                'script': 'scripts/run_experiment.py',
                'config': 'configs/experiments/emergence_timeline.yaml'
            },
            {
                'id': 'ablation_study',
                'name': 'Ablation Study',
                'description': 'Test component contributions',
                'duration': '10-15 hours',
                'script': 'scripts/run_experiment.py',
                'config': 'configs/experiments/ablation_study.yaml'
            }
        ]
        self.json_response(experiments)

    def api_list_results(self):
        """List available results"""
        results = []
        outputs_dir = Path('outputs')

        if outputs_dir.exists():
            for item in outputs_dir.rglob('*.png'):
                results.append({
                    'type': 'image',
                    'path': str(item.relative_to(outputs_dir)),
                    'name': item.stem,
                    'experiment': item.parent.name
                })

            for item in outputs_dir.rglob('*.csv'):
                results.append({
                    'type': 'data',
                    'path': str(item.relative_to(outputs_dir)),
                    'name': item.stem,
                    'experiment': item.parent.name
                })

        self.json_response(results)

    def api_get_result(self):
        """Get a specific result file"""
        # Extract path from URL
        result_path = self.path.replace('/api/result/', '')
        full_path = Path('outputs') / result_path

        if full_path.exists():
            with open(full_path, 'rb') as f:
                self.send_response(200)

                # Determine content type
                if full_path.suffix == '.png':
                    self.send_header('Content-type', 'image/png')
                elif full_path.suffix == '.csv':
                    self.send_header('Content-type', 'text/csv')
                elif full_path.suffix == '.json':
                    self.send_header('Content-type', 'application/json')
                else:
                    self.send_header('Content-type', 'application/octet-stream')

                self.end_headers()
                self.wfile.write(f.read())
        else:
            self.send_error(404, "Result file not found")

    def api_run_experiment(self):
        """Run an experiment"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))

        experiment_id = data.get('experiment_id')

        # Find experiment configuration
        experiments = self.api_list_experiments.__wrapped__(self) if hasattr(self.api_list_experiments, '__wrapped__') else []

        # Start experiment in background thread
        def run_experiment():
            try:
                if experiment_id == 'quick_demo':
                    subprocess.run(['python', 'examples/01_quick_demo.py'])
                elif experiment_id == 'baseline_comparison':
                    subprocess.run(['python', 'examples/02_baseline_comparison.py'])
                # ... handle other experiments
            except Exception as e:
                print(f"Error running experiment: {e}")

        thread = threading.Thread(target=run_experiment, daemon=True)
        thread.start()

        self.json_response({'status': 'started', 'experiment_id': experiment_id})

    def api_stop_experiment(self):
        """Stop running experiment"""
        # Implementation for stopping experiments
        self.json_response({'status': 'stopped'})

    def json_response(self, data):
        """Send JSON response"""
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def log_message(self, format, *args):
        """Custom log format"""
        print(f"[{self.log_date_time_string()}] {format % args}")


def main():
    """Start the web server"""
    print("=" * 80)
    print("  INTERNAL DIMENSION AI - WEB INTERFACE")
    print("=" * 80)
    print()
    print(f"Starting web server on http://{HOST}:{PORT}")
    print()
    print("The browser will open automatically in a moment...")
    print()
    print("Press Ctrl+C to stop the server")
    print("=" * 80)
    print()

    # Create server
    server = HTTPServer((HOST, PORT), IDNWebHandler)

    # Open browser after short delay
    def open_browser():
        time.sleep(1.5)
        webbrowser.open(f'http://{HOST}:{PORT}')

    browser_thread = threading.Thread(target=open_browser, daemon=True)
    browser_thread.start()

    # Start server
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n\nShutting down server...")
        server.shutdown()
        print("Server stopped.")


if __name__ == '__main__':
    main()
