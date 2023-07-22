import process from 'node:process'
import { threadId } from 'worker_threads'
import { app, session } from 'electron'
import { initGlobalData, initAppListenEvent, initRenderer, initLocalServer } from '@main/core/init'

const beforeReady = async () => {
  initAppListenEvent()
  await initGlobalData()
  initLocalServer()
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
  console.log('process.pid:', process.pid)
  console.log('init threadId:', threadId)
}

export { startApp }
