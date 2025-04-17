const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 820,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 可选
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  })

  // 加载 Vite 开发服务器或打包后的文件
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173') // Vite 默认开发服务器地址
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html')) // 打包后的文件
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
