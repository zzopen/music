import { app } from 'electron'
import {
  appBeforeReadyInit,
  appListenEventInit,
  businessInit,
  ipcMainInit
} from '@main/modules/init'
import process from 'node:process'
import { threadId } from 'worker_threads'

appBeforeReadyInit()
appListenEventInit()

app.whenReady().then(async () => {
  await businessInit()
  ipcMainInit()
})

console.log('process.pid:', process.pid)
console.log('init threadId:', threadId)
