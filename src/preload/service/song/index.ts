import { rendererInvoke, IpcEvent } from '@common/events'

async function getById(id: number): Promise<Nilable<ZZ.DTO.Song>> {
  return await rendererInvoke<{ id: number }, Nilable<ZZ.DTO.Song>>(
    IpcEvent.DB_SERVICE.SONG_SERVICE.GET_BY_ID,
    { id: id }
  )
}

async function insert(song: ZZ.DTO.Song): Promise<boolean> {
  return await rendererInvoke<{ song: ZZ.DTO.Song }, boolean>(
    IpcEvent.DB_SERVICE.SONG_SERVICE.INSERT,
    { song: song }
  )
}

export const songService = {
  getById,
  insert
}

export type SongService = typeof songService
