const { app, BrowserWindow, session, shell } = require('electron');
const http = require('http');
const fs = require('fs');
const path = require('path');

const APP_ROOT = path.join(__dirname, '..', 'app');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg'
};

function safeFileFromUrl(requestUrl) {
  const url = new URL(requestUrl, 'http://127.0.0.1');
  let relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  if (!relative) relative = 'index.html';
  const normalized = path.normalize(relative);
  if (normalized.startsWith('..') || path.isAbsolute(normalized)) return null;
  const candidate = path.join(APP_ROOT, normalized);
  if (!candidate.startsWith(APP_ROOT)) return null;
  return candidate;
}

function startLocalAppServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const file = safeFileFromUrl(req.url || '/');
      if (!file) {
        res.writeHead(403);
        return res.end('Forbidden');
      }

      fs.stat(file, (statErr, stat) => {
        let target = file;
        if (!statErr && stat.isDirectory()) target = path.join(file, 'index.html');
        fs.readFile(target, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end('Not found');
          }
          res.writeHead(200, {
            'Content-Type': MIME[path.extname(target).toLowerCase()] || 'application/octet-stream',
            'Cache-Control': 'no-cache'
          });
          res.end(data);
        });
      });
    });

    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({ server, url: `http://127.0.0.1:${address.port}/index.html` });
    });
  });
}

async function createWindow() {
  const { server, url } = await startLocalAppServer();

  const allowedPermissions = new Set(['media', 'fullscreen']);
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(allowedPermissions.has(permission));
  });
  session.defaultSession.setPermissionCheckHandler((_webContents, permission) => allowedPermissions.has(permission));

  const win = new BrowserWindow({
    width: 1220,
    height: 860,
    minWidth: 760,
    minHeight: 620,
    backgroundColor: '#060814',
    title: 'COSMOS Music',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.webContents.setWindowOpenHandler(({ url: externalUrl }) => {
    shell.openExternal(externalUrl);
    return { action: 'deny' };
  });

  win.on('closed', () => server.close());
  await win.loadURL(url);
}

app.whenReady().then(async () => {
  await createWindow();
  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) await createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
