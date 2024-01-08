import { rendererInvoke, IpcEvent } from '@common/utils/events'

async function setToken(token: string): Promise<boolean> {
  return await rendererInvoke<{ token: string }, boolean>(IpcEvent.TOKEN.SET_TOKEN, {
    token
  })
}

async function getToken(): Promise<string> {
  return await rendererInvoke<undefined, string>(IpcEvent.TOKEN.GET_TOKEN)
}

export const tokenService = {
  setToken,
  getToken
}

export type TokenService = typeof tokenService
