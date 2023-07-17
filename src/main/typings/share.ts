import type { CustomWorker } from '@main/worker'

/**** 全局共享对象 ****/
interface ShareState {
  exeDirPath: string
  appDataDirPath: string
  configDirPath: string
  userDataDirPath: string
  dataDirPath: string
  songDirPath: string
  dbDirPath: string
  isDev: boolean
  worker?: CustomWorker
}

const defaultShareState: ShareState = {
  exeDirPath: '',
  appDataDirPath: '',
  userDataDirPath: '',
  configDirPath: '',
  dataDirPath: '',
  songDirPath: '',
  dbDirPath: '',
  isDev: true,
  worker: undefined
}

const shareState: ShareState = { ...defaultShareState }
export type { ShareState }
export { shareState }
