import { contextBridge } from 'electron'
import process from 'node:process'
import { preloadContext } from './preload'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('preloadContext', preloadContext)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.preloadContext = preloadContext
}
