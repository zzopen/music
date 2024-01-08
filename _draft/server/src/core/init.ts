import type Koa from 'koa'
import cors from '@koa/cors'
import { koaBody } from 'koa-body'
import catchError from './exception'
import myRouter from './router'
import { initDb } from './database'

export default class InitManager {
  private app: Koa

  constructor(app: Koa) {
    this.app = app
    this.initCore()
  }

  initCore() {
    this.app.use(
      cors({
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept']
      })
    ) // cross-domain processing
    this.app.use(koaBody({ multipart: true })) // body parameter processing
    this.app.use(catchError) // global exception handling
    this.app.use(myRouter.routes()).use(myRouter.allowedMethods())
    initDb()
  }
}
