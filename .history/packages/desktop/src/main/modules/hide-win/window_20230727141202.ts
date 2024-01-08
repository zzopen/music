import { join } from 'node:path'
import process from 'node:process'
import { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'

let hideWindow: BrowserWindow

function createWindow(): BrowserWindow {
  hideWindow = new BrowserWindow({
    show: false
  })

  windowListener()

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    hideWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    hideWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return hideWindow
}

function windowListener() {
  if (!hideWindow) {
    return
  }
}

function getHideWindow() {
  return hideWindow
}

function closeHideWindow() {
  hideWindow && hideWindow.close()
}

export { createWindow as createHideWindow, getHideWindow, closeHideWindow }
