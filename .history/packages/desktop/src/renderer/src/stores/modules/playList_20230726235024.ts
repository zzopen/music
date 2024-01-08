import { defineStore } from 'pinia'
import { consoleLog } from '@/business/utils'
import { usePlayerStore } from './player'
import type { PlayListState } from '../interface'
import { songsheet } from '@/business/apis'

const defaultPlayListState: PlayListState = {
  songList: [],
  curSongListPosition: -1
}

export const usePlayListStore = defineStore({
  id: 'music-play-list',
  state: (): PlayListState => ({ ...defaultPlayListState }),
  getters: {
    listCount(state): number {
      return state.songList.length
    }
  },
  actions: {
    async play() {
      const playerStore = usePlayerStore()
      playerStore.changeSong(this.songList[0])
      this.curSongListPosition = 0
    },
    async changeSongSheetSongList(songsheetId: number | string) {
      this.reset()

      const cover = new URL(`../../assets/86.jpg`, import.meta.url).href
      let songList = await songsheet.songListAction({ songsheetId })
      songList = songList.map((item) => {
        item.singer = `${item.name} 歌手`
        item.album = `${item.name} 专辑`
        item.cover = cover
        return item
      })

      consoleLog('ss', songList)
      this.setSongList(songList)
      this.play()
    },
    setSongList(songList: ZZ.DTO.SongList = []) {
      this.resetPlayList()
      this.songList = songList
    },
    // appendPlayList() {},
    /**** 歌单换歌 ****/
    playNext() {
      const playerStore = usePlayerStore()
      playerStore.changeSong(this.getNextSong())
    },
    playLast() {
      const playerStore = usePlayerStore()
      playerStore.changeSong(this.getLastSong())
    },
    getLastSong(): ZZ.DTO.Song {
      const index =
        this.curSongListPosition - 1 < 0 ? this.songList.length - 1 : this.curSongListPosition - 1
      if (this.songList[index]) {
        this.curSongListPosition = index
        return this.songList[index]
      }

      return {} as ZZ.DTO.Song
    },
    getNextSong(): ZZ.DTO.Song {
      const index =
        this.curSongListPosition + 1 > this.songList.length - 1 ? 0 : this.curSongListPosition + 1
      if (this.songList[index]) {
        this.curSongListPosition = index
        return this.songList[index]
      }

      return {} as ZZ.DTO.Song
    },
    /**** reset ****/
    reset() {
      this.$patch((state) => {
        consoleLog('playList-store', 'reset')
        state.songList = defaultPlayListState.songList
        state.curSongListPosition = defaultPlayListState.curSongListPosition
      })
    },
    resetCurPlayListPosition() {
      this.curSongListPosition = defaultPlayListState.curSongListPosition
    },
    resetPlayList() {
      this.reset()
      const playerStore = usePlayerStore()
      playerStore.reset()
    }
  }
})
