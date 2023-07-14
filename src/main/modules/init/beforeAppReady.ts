import { app } from 'electron'
import { join, dirname } from 'node:path'
import { existsSync, mkdirSync } from 'fs-extra'
import { isWin } from '@main/utils'
import { defaultShareState } from '@main/typings'
import { SONG_DIR_NAME } from '@main/configs'
import { consoleLog } from '@main/utils'

function init() {
  consoleLog('sync-init', '同步方法 初始化')
  // initSingletonApplication()
  // initGlobalData()
  // setStoragePath()
  // consoleLog('global', global)
}

function initGlobalData() {
  global.shareState = { ...defaultShareState }
}

function setStoragePath() {
  let songDirPath = ''
  // 设置歌曲存放目录
  // appData和userData采用默认值
  if (isWin) {
    songDirPath = join(dirname(app.getPath('exe')), `/${SONG_DIR_NAME}`)
  } else {
    songDirPath = join(app.getPath('appData'), `/${SONG_DIR_NAME}`)
  }

  if (!songDirPath) {
    consoleLog('songDirPath', '不存在')
    return
  }

  if (!existsSync(songDirPath)) {
    mkdirSync(songDirPath)
  }

  global.shareState.songDirPath = songDirPath
}

export { init as beforeAppReady }
