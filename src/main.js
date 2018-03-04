const electron = require("electron");
const app = electron.app;
const {BrowserWindow} = require('electron')
const path = require("path");
const url = require("url");

// Ref for avoid gc
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 1280, height: 1024});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
      mainWindow = null;
    });

  mainWindow.webContents.openDevTools();

  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
  } = require("electron-devtools-installer");

  installExtension(REACT_DEVELOPER_TOOLS);
  installExtension(REDUX_DEVTOOLS);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", createWindow);

// Quit app except on Mac where CMD+Q is usual.
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
