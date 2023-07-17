import { mainHandle, IpcEvent } from '@common/events'

async function init() {
  /**** 根据id获取歌曲信息 ****/
  mainHandle<{ id: number }, Nilable<ZZ.DTO.Song>>(
    IpcEvent.DB_SERVICE.SONG_SERVICE.GET_BY_ID,
    async ({ p }) => {
      const { id } = p
      if (!id) {
        return null
      }

      return await shareState.worker!.dbService.songService.getById(id)
    }
  )

  /**** 插入一条歌曲数据 ****/
  mainHandle<{ song: ZZ.DTO.Song }, boolean>(
    IpcEvent.DB_SERVICE.SONG_SERVICE.INSERT,
    async ({ p }) => {
      const { song } = p
      if (!song) {
        return false
      }

      return await shareState.worker!.dbService.songService.insert(song)
    }
  )
}

export { init as songServiceIpcMainInit }
