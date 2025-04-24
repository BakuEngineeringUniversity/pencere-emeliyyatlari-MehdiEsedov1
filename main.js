const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    backgroundColor: '#FFF',
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    maxWidth: 1024,
    maxHeight: 768,
    resizable: true,
    movable: true,
    alwaysOnTop: false,
    title: 'Goodbye, Moon?',
    frame: false,
    transparent: true,
    titleBarStyle: 'hidden-inset'
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
