@echo off
REM Start Web Interface - Windows

cd /d "%~dp0"

echo =========================================================================
echo   INTERNAL DIMENSION AI - WEB INTERFACE
echo =========================================================================
echo.

REM Check if virtual environment exists
if not exist venv (
    echo Virtual environment not found. Running setup first...
    call setup_windows.bat
)

REM Activate environment
call venv\Scripts\activate.bat

REM Start web server
echo Starting web server...
echo The browser will open automatically at: http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo =========================================================================
echo.

python web_server.py
pause
