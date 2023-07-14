import { consoleLog, delay } from '@main/utils'
import { createMainWindow } from '@main/modules/main-win'

async function init() {
  // await delay(3000)
  consoleLog('async-init', '异步方法 初始化')
  createMainWindow()
}

export { init as businessInit }
