import { defineStore } from 'pinia'
import { PlayerStatus } from '@/business/typings'
import { getCurLyricIndex } from '@common/utils'
import { consoleLog } from '@/business/utils'
import { usePlayListStore } from './playList'
import type { PlayerState } from '../interface'

const defaultPlayerState: PlayerState = {
  audioRef: null,
  song: null,
  playerStatus: PlayerStatus.WAIT_READY,
  volume: 30,
  curTime: 0,
  totalDuration: 0,
  curLyricPosition: -1,
  ready: false,
  playProgress: 0,
  muted: true,
  autoplay: false
}

export const usePlayerStore = defineStore({
  id: 'music-player',
  state: (): PlayerState => ({ ...defaultPlayerState }),
  getters: {
    /**** 播放器状态 ****/
    isPlaying(state): boolean {
      return state.playerStatus == PlayerStatus.PLAYING
    },
    isPause(state): boolean {
      return state.playerStatus == PlayerStatus.PAUSE
    },
    /***** 歌曲信息 ****/
    songSrc(state): string {
      return state.song ? state.song.src : ''
    },
    /**** 歌词信息 ****/
    getCurLyricText(state): string {
      // 当前播放歌词内容的索引
      if (state.curLyricPosition === -1) {
        return ''
      }

      if (this.getLyricList.length === 0) {
        return ''
      }

      return this.getLyricList[state.curLyricPosition].text ?? ''
    },
    getLyricList(state): ZZ.DTO.LyricList {
      if (!state.song || !state.song.lyricText) {
        return []
      }

      return state.song.lyrics ?? []
    }
  },
  actions: {
    /**** audio ****/
    initAudioRef(audio: Nullable<HTMLAudioElement>) {
      if (!audio) {
        return
      }

      this.audioRef = audio
      this.initAudioElParameter()
    },
    initAudioElParameter() {
      this.changeVolume(this.volume)
    },
    canPlay() {
      this.ready = true // 设置就绪状态
      if (!this.isPlaying) {
        this.playerStatus = PlayerStatus.READY // 设置就绪状态
      }

      this.totalDuration = this.audioRef!.duration // 设置播放总时间
    },
    timeupdate(e: Event) {
      // consoleLog("player-store", "timeupdate", e);
      // 设置当前播放时间，播放进度百分比，当前歌词索引，当前歌词内容等
      this.cacheCurTime()
      this.cacheCurLyricPosition()
      this.cachePlayProgress()
    },
    ended(e: Event) {
      consoleLog('player-store', 'ended', e)
      this.pause()
      this.next()
    },
    audioError(e: Event) {
      if (e.target) {
        const el = e.target as HTMLAudioElement
        consoleLog('player-store', 'audioError', el.error?.code, el.error?.message)
      }
    },
    async audioPlay() {
      this.audioUnMuted()
      //    document.body.click();
      //    await delay(3000);
      consoleLog('player-store', 'audioPlay', '调用了audio.play()')
      await this.audioRef?.play()
    },
    async audioPause() {
      consoleLog('player-store', 'audioPause', '调用了audio.pause()')
      await this.audioRef?.pause()
    },
    audioUnMuted() {
      consoleLog('player-store', 'audioUnMuted', '打开audio声音')
      this.audioRef!.muted = false
      this.muted = false
    },
    audioMuted() {
      consoleLog('player-store', 'audioMuted', '关闭audio声音')
      this.audioRef!.muted = true
      this.muted = true
    },
    async toggleAudioPlay() {
      consoleLog('player-store', 'togglePlay', 'isPlaying:', this.isPlaying, ';ready:', this.ready)
      if (!this.ready) {
        return
      }

      if (this.isPlaying) {
        await this.audioPlay()
      } else if (this.isPause) {
        await this.audioPause()
      }
    },
    /**** player ****/
    _setSong(song: Nullable<ZZ.DTO.Song>) {
      this.reset()
      this.song = song
    },
    changeSong(song: Nullable<ZZ.DTO.Song>) {
      if (!song) {
        return
      }

      this._setSong(song)
      this.play()
    },
    last() {
      const playListStore = usePlayListStore()
      playListStore.playLast()
    },
    next() {
      const playListStore = usePlayListStore()
      playListStore.playNext()
    },
    play() {
      this.playerStatus = PlayerStatus.PLAYING
    },
    pause() {
      this.playerStatus = PlayerStatus.PAUSE
    },
    changeVolume(value: number) {
      let volume = value / 100
      volume = volume > 1 ? 1 : volume
      this.audioRef!.volume = volume
      this.volume = value
      if (this.volume == 0) {
        this.audioMuted()
      }
    },
    changeProgress(value: number) {
      this.resetCurLyricPosition()
      this.audioRef!.currentTime = (value * this.totalDuration) / 100
      if (this.isPause) {
        this.play()
      }
    },
    togglePlay() {
      if (!this.isPlaying) {
        if (this.ready) {
          this.play()
        }
      } else {
        this.pause()
      }
    },
    /**** 缓存数据 ****/
    cacheCurTime() {
      this.curTime = this.audioRef!.currentTime
    },
    cacheCurLyricPosition() {
      this.curLyricPosition = getCurLyricIndex(
        this.curTime,
        this.curLyricPosition,
        this.getLyricList
      )
    },
    cachePlayProgress() {
      this.playProgress = this.totalDuration ? (this.curTime / this.totalDuration) * 100 : 0
    },
    /**** reset ****/
    reset() {
      this.$patch((state) => {
        console.log('player store patch state:')
        state.song = defaultPlayerState.song ? Object.assign({}, defaultPlayerState.song) : null
        state.playerStatus = defaultPlayerState.playerStatus
        state.curTime = defaultPlayerState.curTime
        state.totalDuration = defaultPlayerState.totalDuration
        state.curLyricPosition = defaultPlayerState.curLyricPosition
        state.ready = defaultPlayerState.ready
        state.playProgress = defaultPlayerState.playProgress
      })
    },
    resetPlayerStatus() {
      this.playerStatus = PlayerStatus.WAIT_READY
    },
    resetCurLyricPosition() {
      this.curLyricPosition = defaultPlayerState.curLyricPosition
    }
  }
})
