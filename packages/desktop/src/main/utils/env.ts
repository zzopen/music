/**** platform ****/
const isLinux = process.platform == 'linux'
const isWin = process.platform == 'win32'
const isMac = process.platform == 'darwin'

/**** env ****/
const isProd = process.env.NODE_ENV == 'production'
const isDev = process.env.NODE_ENV == 'development'

export { isLinux, isMac, isWin, isProd, isDev }
