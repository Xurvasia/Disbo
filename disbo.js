const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

require('@electron/remote/main').initialize()

function createWindow () {
  const win = new BrowserWindow({
    width: 450,
    height: 450,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('./DESKTOP/HTML/load.html')
  require('@electron/remote/main').enable(win.webContents)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})