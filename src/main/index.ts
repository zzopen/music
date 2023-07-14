import { app } from 'electron'
import { beforeAppReady, appInitListen, businessInit } from '@main/modules/init'

// before app ready to do something
beforeAppReady()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  appInitListen()
  await businessInit()
})
