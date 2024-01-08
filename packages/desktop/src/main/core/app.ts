import process from 'node:process'
import { threadId } from 'worker_threads'
import { app, session } from 'electron'
import { initGlobalData, initAppListenEvent, initRenderer, initIpcMain } from '@main/core/init'
import { consoleLog } from '@main/utils'

consoleLog('process.pid:', process.pid)
consoleLog('init threadId:', threadId)

const beforeReady = async () => {
  initAppListenEvent()
  await initGlobalData()
  initIpcMain()
}

const whenReady = async () => {
  await app.whenReady()
  initRenderer()
  // ipcMainInit()
  // session.defaultSession.webRequest.onSendHeaders(filter, (details) => {
  //   console.log('before:', details)
  // })

  // session.defaultSession.webRequest.onBeforeRequest(filter, (details, callback) => {
  //   console.log('details:', details)
  //   // 返回内容可以是 base64加密的文本。
  //   callback({ redirectURL: `http://localhost:8999/api/hello` })
  // })
}

const startApp = async () => {
  beforeReady()
  whenReady()
}

export { startApp }
