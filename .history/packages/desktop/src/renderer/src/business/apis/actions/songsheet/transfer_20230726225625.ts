import { lyricSplit } from '@/business/utils'

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
      src: item.song_path ?? '',
      lyricSrc: item.lyric_path ?? '',
      singer: '',
      album: '',
      lyrics: [],
      lyricsText: item.lyricsText ?? '',
      translation: '',
      cover: ''
    }

    song.lyrics = lyricSplit(song.lyricsText)
    res.push(song)
  }

  return res
}

export { transferSongList }
