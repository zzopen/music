const HOST = 'localhost'
const PORT = 8889
const BASE_URL = `http://${HOST}:${PORT}`
const ENV = 'development'
const PREFIX = 'api'
const SECRET = {
  JWT_KEY: 'zeffonwu',
  EXPIRES_IN: '1d'
}

const CONFIG = {
  HOST,
  PORT,
  BASE_URL,
  ENV,
  PREFIX,
  SECRET
}

export { CONFIG }
