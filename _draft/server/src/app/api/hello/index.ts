import { Context, Next } from 'koa'

async function hello(ctx: Context) {
  console.log(222222)
  ctx.body = { id: 1, name: '许磊' }
}

export default { hello }
