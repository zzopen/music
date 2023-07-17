declare namespace ZZ {
  namespace DTO {
    /**** 歌曲 ****/
    interface Song {
      src: string
      name: string
      singer: string
      album: string
      lyrics: Lyrics
      lyricsText: string
      translation: string
      cover: string
    }

    type SongList = Song[]

    /**** 歌词 ****/
    interface Lyric {
      uid: string
      time: number // 毫秒
      timeText: string
      text: string
    }

    type LyricList = Lyric[]
  }
}
