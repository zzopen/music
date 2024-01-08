import { electronAPI } from '@electron-toolkit/preload'
import type { ElectronAPI } from '@electron-toolkit/preload'
import { tokenService } from '@preload/service'
import type { TokenService } from '@preload/service'

interface PreloadContext {
  electron: ElectronAPI
  tokenService: TokenService
  __test__: () => any
}

// Custom APIs for renderer
const preloadContext = {
  electron: electronAPI,
  tokenService,
  __test__
}

async function __test__() {
  // const res = await preloadContext.songService.getById(1)
  // const song: ZZ.DTO.Song = { ...defaultZZDTOSong, ...{ name: '你好' } }
  // const res = await preloadContext.songService.insert(song)
  // console.log('res:', res)
}

export type { PreloadContext }
export { preloadContext }
