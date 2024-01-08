import { defineStore } from 'pinia'
import type { SongsheetState } from '../interface'
import { songsheet } from '@/business/apis'

const defaultSongsheetState: SongsheetState = {
  songsheetList: []
}

export const useSongsheetStore = defineStore({
  id: 'music-songsheet',
  state: (): SongsheetState => ({ ...defaultSongsheetState }),
  getters: {},
  actions: {
    setSongsheetList() {},
    reset() {}
  }
})
