import { defineStore } from 'pinia'
import type { SongsheetState } from '../interface'
import { songsheet } from '@/business/apis'
import { consoleLog } from '@/business/utils'
const defaultSongsheetState: SongsheetState = {
  songsheetList: []
}

export const useSongsheetStore = defineStore({
  id: 'music-songsheet',
  state: (): SongsheetState => ({ ...defaultSongsheetState }),
  getters: {},
  actions: {
    async setSongsheetList() {
      const list = await songsheet.songsheetListAction()
      this.songsheetList = list
    },
    reset() {
      this.$patch((state) => {
        consoleLog('playList-store', 'reset')
        state.songList = defaultPlayListState.songList
        state.curSongListPosition = defaultPlayListState.curSongListPosition
      })
    }
  }
})
