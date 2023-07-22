import Koa from 'koa'
import { CONFIG } from './src/config'
import InitManager from './src/core/init'

async function init() {
  const app = new Koa()

  new InitManager(app)
  app.listen(CONFIG.PORT, 'localhost', () => {
    console.log(`Please open ${CONFIG.BASE_URL}/${CONFIG.PREFIX}`)
  })
}

export { init as initLocalServer }
