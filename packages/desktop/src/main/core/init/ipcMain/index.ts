import { initTokenServiceIpcMain } from './service'

async function init() {
  initTokenServiceIpcMain()
}

export { init as initIpcMain }
