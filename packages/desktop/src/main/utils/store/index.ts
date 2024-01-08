import Store from 'electron-store'

interface LocalStorageUserInfo {
  token: string
}

const defaultLocalStorageUserInfo = (): LocalStorageUserInfo => {
  return {
    token: ''
  }
}

const electronStore = new Store()

const setUserInfo = (p: LocalStorageUserInfo) => {
  electronStore.set('user_info', JSON.stringify(p))
}

const getUserInfo = (): LocalStorageUserInfo => {
  const userInfo = electronStore.get('user_info') as string
  if (!userInfo) {
    return defaultLocalStorageUserInfo()
  }

  return JSON.parse(userInfo)
}

const getToken = (): string => {
  const userInfo = getUserInfo()
  return userInfo.token
}

const setToken = (token: string) => {
  const userInfo = getUserInfo()
  userInfo.token = token
  setUserInfo(userInfo)
}

export { setUserInfo, getUserInfo, getToken, setToken }
export type { LocalStorageUserInfo }
