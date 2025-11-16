#!/bin/bash
# Start Web Interface - Internal Dimension AI

cd "$(dirname "$0")"

echo "========================================================================="
echo "  INTERNAL DIMENSION AI - WEB INTERFACE"
echo "========================================================================="
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Virtual environment not found. Running setup first..."
    ./setup.sh
fi

# Activate environment
source venv/bin/activate

# Start web server
echo "Starting web server..."
echo "The browser will open automatically at: http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================================================="
echo ""

python web_server.py
