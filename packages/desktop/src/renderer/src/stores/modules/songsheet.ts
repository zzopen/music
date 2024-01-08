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
    setSongsheetList(songsheetList: ZZ.DTO.SongsheetList = []) {
      this.resetSongsheetList()
      this.songsheetList = songsheetList
    },
    async changeSongsheetList() {
      const list = await songsheet.songsheetListAction()
      this.setSongsheetList(list)
    },
    resetSongsheetList() {
      this.songsheetList = defaultSongsheetState.songsheetList
    },
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.songsheetList = defaultSongsheetState.songsheetList
      })
    }
  }
})
