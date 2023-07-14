import { defineStore } from 'pinia'
import type { PlayList, Song } from '@/business/typings'
import { lyricSplit, consoleLog } from '@/business/utils'
import { usePlayerStore } from './player'
import type { PlayListState } from '../interface'

const defaultPlayListState: PlayListState = {
  playList: [],
  curPlayListPosition: -1
}

export const usePlayListStore = defineStore({
  id: 'music-play-list',
  state: (): PlayListState => ({ ...defaultPlayListState }),
  getters: {
    playListCount(state): number {
      return state.playList.length
    }
  },
  actions: {
    async __test__first() {
      const playerStore = usePlayerStore()
      playerStore.changeSong(this.playList[0])
      this.curPlayListPosition = 0
    },
    async __test__setPlayList() {
      this.reset()
      const songNames = ['Avid', 'LilaS', '屋顶']
      const playList: PlayList = []
      const cover = new URL(`../../assets/86.jpg`, import.meta.url).href
      for (const name of songNames) {
        const { default: lyric } = await import(`../../assets/songs/${name}.lrc?raw`)

        const src = new URL(`../../assets/songs/${name}.mp3`, import.meta.url).href
        //console.log(lyric, src);
        const song: Song = {
          src: src,
          name: name,
          singer: `${name} 歌手`,
          album: `${name} 专辑`,
          lyrics: [],
          lyricsText: lyric,
          translation: '',
          cover: cover
        }

        song.lyrics = lyricSplit(lyric)

        playList.push(song)
      }

      console.log(playList)
      this.setPlayList(playList)
    },
    setPlayList(playList: PlayList = []) {
      this.resetPlayList()
      this.playList = playList
      // const playerStore = usePlayerStore();
      // playerStore.changeSong(playList[0]);
      // this.curPlayListIndex = 0;
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
    getLastSong(): Song {
      const index =
        this.curPlayListPosition - 1 < 0 ? this.playList.length - 1 : this.curPlayListPosition - 1
      if (this.playList[index]) {
        this.curPlayListPosition = index
        return this.playList[index]
      }

      return {} as Song
    },
    getNextSong(): Song {
      const index =
        this.curPlayListPosition + 1 > this.playList.length - 1 ? 0 : this.curPlayListPosition + 1
      if (this.playList[index]) {
        this.curPlayListPosition = index
        return this.playList[index]
      }

      return {} as Song
    },
    /**** reset ****/
    reset() {
      this.$patch((state) => {
        consoleLog('playList-store', 'reset')
        state.playList = defaultPlayListState.playList
        state.curPlayListPosition = defaultPlayListState.curPlayListPosition
      })
    },
    resetCurPlayListPosition() {
      this.curPlayListPosition = defaultPlayListState.curPlayListPosition
    },
    resetPlayList() {
      this.reset()
      const playerStore = usePlayerStore()
      playerStore.reset()
    }
  }
})
