import { join } from 'node:path'
import process from 'node:process'
import { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'

let hidenWindow: BrowserWindow

function createWindow(): BrowserWindow {
  hidenWindow = new BrowserWindow({
    show: false
  })

  windowListener()

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    hidenWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    hidenWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return hidenWindow
}

function windowListener() {
  if (!hidenWindow) {
    return
  }
}

export { createWindow as createHidenWindow }
