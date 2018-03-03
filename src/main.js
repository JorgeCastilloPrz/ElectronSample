const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// retain a ref to avoid gc() to clean the app T_T
let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.webContents.openDevTools();

  win.on("closed", () => {
    // remove ref to the window so gc is able to clean it. For multiple
    // screens you'd retain those refs in an array()
    win = null;
  });
}

// Called by electron when initialization is complete and it's ready to create
// windows in the browser. Some APIs can be used just after this event.
app.on("ready", createWindow);

// Close the app when all the windows are closed. If it's MacOS (darwin) we
// don't do it since it's usual to keep windows open until explicit cmd+Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // recreate the app window if the app icon is clicked.
  if (win === null) {
    createWindow();
  }
});
