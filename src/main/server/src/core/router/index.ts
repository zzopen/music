import Router from '@koa/router'
import Config from '../../config'
import { helloController } from '@main/server/src/app/api'

const router = new Router({ prefix: Config.PREFIX, strict: false, sensitive: true })
router.get('/hello', helloController.hello)

export default router
