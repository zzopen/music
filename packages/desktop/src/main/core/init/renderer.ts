import { consoleLog } from '@main/utils'
import { createMainWindow } from '@main/modules/main-win'
// import { __test__ } from '@main/storage/examples'

async function init() {
  consoleLog('business-init', '触发')
  createMainWindow()
}

export { init as initRenderer }
