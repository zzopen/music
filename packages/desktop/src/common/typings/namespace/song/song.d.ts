declare namespace ZZ {
  namespace DTO {
    /**** 歌词 ****/
    interface Lyric {
      uid: string
      time: number // 毫秒
      timeText: string
      text: string
    }

    type LyricList = Lyric[]

    /**** 歌曲 ****/
    interface Song {
      id: string
      name: string
      ext: string
      src: string
      localSrc: string
      routeSrc: string
      lyricText: string
      createdAt: string
      updatedAt: string
      dataUpdatedAt: string
      lyrics: LyricList
      singer: string
      album: string
      translation: string
      cover: string
    }

    type SongList = Song[]

    /**** 歌单 ****/
    interface Songsheet {
      id: string
      name: string
      createdAt: string
      updatedAt: string
      dataUpdatedAt: string
    }

    type SongsheetList = Songsheet[]
  }
}
