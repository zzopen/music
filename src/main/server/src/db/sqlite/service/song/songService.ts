import { songDao } from '@main/server/src/db/sqlite/dao'
import { SongModel } from '@main/server/src/db/sqlite/model'
import { defaultZZDTOSong } from '@common/utils'
import { lyricSplitFromFile } from '@common/utils'

async function transferSongMoel(model?: Nilable<SongModel>): Promise<Nilable<ZZ.DTO.Song>> {
  if (!model) {
    return null
  }

  const [lyrics, lyricsText] = await lyricSplitFromFile(model.lyricPath)
  const song: ZZ.DTO.Song = {
    ...defaultZZDTOSong,
    name: model.name ?? '',
    id: model.id ?? '',
    src: model.songPath,
    lyricSrc: model.lyricPath,
    lyrics,
    lyricsText
  }

  return song
}

async function getById(id: number): Promise<Nilable<ZZ.DTO.Song>> {
  if (!id) {
    return null
  }

  const res = (await songDao.getById(id)) as Nilable<SongModel>
  return await transferSongMoel(res)
}

async function getByIds(ids: (number | string)[]): Promise<ZZ.DTO.Song[]> {
  if (!ids || ids.length === 0) {
    return []
  }

  const res = (await songDao.getByIds(ids)) as SongModel[]
  if (!res || res.length === 0) {
    return []
  }

  const newRes: ZZ.DTO.Song[] = []
  for (const item of res) {
    const temp = (await transferSongMoel(item)) as ZZ.DTO.Song
    newRes.push(temp)
  }

  return newRes
}

export default {
  getById,
  getByIds
}
