import type Koa from 'koa'

export default async function catchError(ctx: Koa.Context, next: any) {
  try {
    await next()
  } catch (error: any) {}
}
