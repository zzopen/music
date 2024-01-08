import { shell, BrowserWindow, globalShortcut } from 'electron'
import { is } from '@electron-toolkit/utils'
import { join } from 'node:path'
import icon from '@resources/icon.png?asset'
import process from 'node:process'

let mainWindow: BrowserWindow
const MAIN_WINDOW_MIN_WIDTH = 1045
const MAIN_WINDOW_MIN_HEIGHT = 670

function createWindow(): BrowserWindow {
  mainWindow = new BrowserWindow({
    width: MAIN_WINDOW_MIN_WIDTH,
    height: MAIN_WINDOW_MIN_HEIGHT,
    minWidth: MAIN_WINDOW_MIN_WIDTH,
    minHeight: MAIN_WINDOW_MIN_HEIGHT,
    x: 200,
    y: 90,
    show: false,
    frame: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: true,
      contextIsolation: true, // 是否开启隔离上下文
      nodeIntegrationInWorker: false
      // nodeIntegration: true // 渲染进程使用Node API
    }
  })

  mainWindowListener()

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

function mainWindowListener() {
  if (!mainWindow) {
    return
  }
}

export { createWindow as createHidenWindow }
