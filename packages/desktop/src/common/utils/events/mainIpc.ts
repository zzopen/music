import { ipcMain } from 'electron'
import { IpcMainEventListener, IpcMainInvokeEventListener } from './ipcEvent'

/**** ipcMain.remove ****/
export function mainOff(name: string, listener: (...args: any[]) => void) {
  ipcMain.removeListener(name, listener)
}

export function mainOffAll(name: string) {
  ipcMain.removeAllListeners(name)
}

export function mainHandleRemove(name: string) {
  ipcMain.removeHandler(name)
}

/**** ipcMain.on  ****/
export function mainOn<T, V>(name: string, listener: IpcMainEventListener<T, V>): void {
  ipcMain.on(name, async (event, p) => {
    await listener({ event, p })
  })
}

/**** ipcMain.once  ****/
export function mainOnce<T, V>(name: string, listener: IpcMainEventListener<T, V>): void {
  ipcMain.once(name, async (event, p) => {
    await listener({ event, p })
  })
}

/**** ipcMain.handle  ****/
export function mainHandle<T, V>(name: string, listener: IpcMainInvokeEventListener<T, V>): void {
  ipcMain.handle(name, async (event, p) => {
    return await listener({ event, p })
  })
}

/**** ipcMain.handleOnce  ****/
export function mainHandleOnce<T, V>(
  name: string,
  listener: IpcMainInvokeEventListener<T, V>
): void {
  ipcMain.handleOnce(name, async (event, p) => {
    return await listener({ event, p })
  })
}

/**** window.webContents.send  ****/
export function mainSend<T = undefined>(window: Electron.BrowserWindow, name: string, p?: T): void {
  window.webContents.send(name, p)
}
