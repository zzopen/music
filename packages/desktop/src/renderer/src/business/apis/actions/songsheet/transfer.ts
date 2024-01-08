import { lyricSplit } from '@common/utils'

function transferSongList(data: any[]): ZZ.DTO.SongList {
  if (!data || !Array.isArray(data)) {
    return []
  }

  const res: ZZ.DTO.SongList = []
  if (data.length <= 0) {
    return res
  }

  for (const item of data) {
    const song: ZZ.DTO.Song = {
      id: item.id ?? '',
      name: item.name ?? '',
      ext: item.ext ?? '',
      localSrc: item.song_local_path ?? '',
      routeSrc: item.song_route_path ?? '',
      lyricText: item.lyric_text ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? '',
      src: '',
      singer: '',
      album: '',
      lyrics: [],
      translation: '',
      cover: ''
    }

    song.src = song.routeSrc
    song.lyrics = lyricSplit(song.lyricText)
    res.push(song)
  }

  return res
}

function transferSongsheetList(data: any[]): ZZ.DTO.SongsheetList {
  if (!data || !Array.isArray(data)) {
    return []
  }

  const res: ZZ.DTO.SongsheetList = []
  if (data.length <= 0) {
    return res
  }

  for (const item of data) {
    const songsheet: ZZ.DTO.Songsheet = {
      id: item.id ?? '',
      name: item.name ?? '',
      createdAt: item.created_at ?? '',
      updatedAt: item.updated_at ?? '',
      dataUpdatedAt: item.data_updated_at ?? ''
    }

    res.push(songsheet)
  }

  return res
}
export { transferSongList, transferSongsheetList }
