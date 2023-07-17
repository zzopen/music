import { songServiceIpcMainInit } from './dbService'

async function init() {
  songServiceIpcMainInit()
}

export { init as ipcMainInit }
