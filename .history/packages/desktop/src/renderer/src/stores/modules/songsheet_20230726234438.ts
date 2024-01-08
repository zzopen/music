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
      this.songsheetList = songsheetList
    },
    async loadSongsheetList() {
      const list = await songsheet.songsheetListAction()
    },
    reset() {
      this.$patch((state) => {
        consoleLog('songsheet-store', 'reset')
        state.songsheetList = defaultSongsheetState.songsheetList
      })
    }
  }
})
