import { PlayerStatus } from '@/business/typings'

/************* player store ********** */
interface PlayerState {
  audioRef: Nullable<HTMLAudioElement> // 全局audio标签的ref.value
  playerStatus: PlayerStatus // 播放状态
  song: Nullable<ZZ.DTO.Song> // 当前播放的歌曲信息
  volume: number // 音量,最大100，最小0
  curTime: number // 当前播放时间点,单位:秒
  totalDuration: number // 总时长,单位:毫秒
  ready: boolean // 歌曲是否已就绪
  curLyricPosition: number // 当前歌词列表索引，方便获取歌词item信息
  playProgress: number // 播放进度
  muted: boolean // 是否静音
  autoplay: boolean // 自动播放
}

/************* playList store ********** */
interface PlayListState {
  songList: ZZ.DTO.SongList // 歌单列表
  curSongListPosition: number // 当前歌曲索引
}

/************* songsheet store ********** */
interface SongsheetState {
  songsheetList: ZZ.DTO.SongsheetList // 歌单列表
}

/************* mix store ********** */
interface MixState {
  playPageVisible: boolean // 显示播放界面
  playListPageVisible: boolean // 显示播放列表界面
}

export type { MixState, PlayerState, PlayListState, SongsheetState }
