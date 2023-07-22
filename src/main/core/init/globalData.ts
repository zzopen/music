import { app } from 'electron'
import { join, dirname, resolve } from 'node:path'
import process from 'node:process'
import { ensureDir } from 'fs-extra'
import { isWin, isDev, consoleLog } from '@main/utils'
import { shareState } from '@main/typings'
import { SONG_DIR_NAME, SONG_CACHE_NAME, DATA_DIR_NAME, DB_DIR_NAME } from '@common/configs'
import { initWorker } from '@main/worker'

async function init() {
  consoleLog('before-app-ready-init', '初始化')
  initShareState()
  _log()
}

function _log() {
  // consoleLog('process', process.env)
  consoleLog('isDev', isDev)
  consoleLog('shareState', global.shareState)
  consoleLog('shareState.worker', global.shareState.worker)
  consoleLog('appData', app.getPath('appData'))
  consoleLog('userData', app.getPath('userData'))
}

async function initShareState() {
  process.env.DIST = join(__dirname, '../dist')
  process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

  shareState.isDev = isDev
  shareState.appDataDirPath = app.getPath('appData')
  shareState.userDataDirPath = app.getPath('userData')
  shareState.exeDirPath = dirname(app.getPath('exe'))

  let configDirPath = ''
  if (isWin) {
    configDirPath = shareState.exeDirPath
  } else {
    configDirPath = shareState.userDataDirPath
  }

  if (isDev) {
    configDirPath = resolve('/Users/xulei/Downloads')
  }

  shareState.configDirPath = configDirPath
  shareState.dataDirPath = join(configDirPath, `/${DATA_DIR_NAME}`)
  shareState.songCachePath = join(shareState.dataDirPath, `/${SONG_CACHE_NAME}`)
  shareState.songCacheDefautDirPath = join(shareState.songCachePath, `/${SONG_DIR_NAME}`)
  shareState.dbDirPath = join(shareState.dataDirPath, `/${DB_DIR_NAME}`)

  const options = {
    mode: 0o2775
  }

  ensureDir(shareState.dataDirPath, options)
  ensureDir(shareState.songCacheDefautDirPath, options)
  ensureDir(shareState.dbDirPath, options)
  ensureDir(shareState.songCachePath, options)

  shareState.worker = initWorker()
  global.shareState = shareState
}

export { init as initGlobalData }
