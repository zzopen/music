import { mainHandle, IpcEvent } from '@common/utils/events'
import { setToken, getToken } from '@main/utils'
async function init() {
  /**** 存储 jwt token ****/
  mainHandle<{ token: string }, boolean>(IpcEvent.TOKEN.SET_TOKEN, async ({ p }) => {
    const { token } = p
    if (!token) {
      return false
    }

    setToken(token)
    return true
  })

  /**** 获取 jwt token ****/
  mainHandle<void, string>(IpcEvent.TOKEN.GET_TOKEN, async () => {
    return getToken()
  })
}

export { init as initTokenServiceIpcMain }
