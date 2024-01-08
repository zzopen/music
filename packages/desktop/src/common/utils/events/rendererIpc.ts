import { ipcRenderer } from 'electron'
import { IpcRendererEventListener } from './ipcEvent'

/**** ipcRenderer.remove ****/
export function rendererOff(name: string, listener: (...args: any[]) => any) {
  ipcRenderer.removeListener(name, listener)
}

export function rendererOffAll(name: string) {
  ipcRenderer.removeAllListeners(name)
}

/**** ipcRenderer.send ****/
export function rendererSend<T>(name: string, p?: T): void {
  ipcRenderer.send(name, p)
}

/**** ipcRenderer.sendSync ****/
export function rendererSendSync<T>(name: string, p?: T): void {
  ipcRenderer.sendSync(name, p)
}

/**** ipcRenderer.invoke ****/
export async function rendererInvoke<T, V>(name: string, p?: T): Promise<V> {
  return await ipcRenderer.invoke(name, p)
}

/**** ipcRenderer.on ****/
export function rendererOn<T>(name: string, listener: IpcRendererEventListener<T>): void {
  ipcRenderer.on(name, (event, p) => {
    listener({ event, p })
  })
}

export function rendererOnce<T>(name: string, listener: IpcRendererEventListener<T>): void {
  ipcRenderer.once(name, (event, p) => {
    listener({ event, p })
  })
}
