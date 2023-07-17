import { electronAPI } from '@electron-toolkit/preload'
import type { ElectronAPI } from '@electron-toolkit/preload'
import { songService } from '@preload/service'
import type { SongService } from '@preload/service'
import { defaultZZDTOSong } from '@common/utils'

interface PreloadContext {
  electron: ElectronAPI
  songService: SongService
  __test__: () => any
}

// Custom APIs for renderer
const preloadContext = {
  electron: electronAPI,
  songService: songService,
  __test__
}

async function __test__() {
  // const res = await preloadContext.songService.getById(1)
  const song: ZZ.DTO.Song = { ...defaultZZDTOSong, ...{ name: '你好' } }
  const res = await preloadContext.songService.insert(song)
  console.log('res:', res)
}

export type { PreloadContext }
export { preloadContext }
