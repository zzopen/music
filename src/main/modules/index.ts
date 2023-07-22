import { registMainWindow } from './main-win'

let isRegister = false
async function registerModules() {
  if (isRegister) {
    return
  }

  registMainWindow()
  isRegister = true
}

export { registerModules }
