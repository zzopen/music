import { registMainWindow } from './main-win'

let isRegistered = false
async function registerModules() {
  if (isRegistered) {
    return
  }

  registMainWindow()
  isRegistered = true
}

export { registerModules }
