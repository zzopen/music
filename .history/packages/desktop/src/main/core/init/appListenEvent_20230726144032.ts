import { app, BrowserWindow } from 'electron'
import { createMainWindow } from '@main/modules/main-win'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { consoleLog } from '@main/utils'

async function init() {
  consoleLog('app-listen-init', '触发')
  // initSingletonApplication()

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.music-desktop')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
}

function initSingletonApplication() {
  // 保证只有一个实例在运行
  if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
  }
}

export { init as initAppListenEvent }
