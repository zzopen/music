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

type PlayList = Song[]
/**** 歌词 ****/
type Lyrics = LyricItem[]
interface LyricItem {
  uid: string
  time: number // 毫秒
  timeText: string
  text: string
}

/**** 播放器状态 ****/
enum PlayerStatus {
  WAIT_READY, // 等待就绪
  READY, // 已就绪
  PLAYING, // 正在播放
  PAUSE // 暂停
}

export { PlayerStatus }
export type { Song, PlayList, LyricItem, Lyrics }
