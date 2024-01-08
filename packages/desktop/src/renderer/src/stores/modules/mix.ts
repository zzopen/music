import { defineStore } from 'pinia'
import type { MixState } from '../interface'

const defaultMixState: MixState = {
  playPageVisible: false,
  playListPageVisible: false
}

export const useMixStore = defineStore({
  id: 'music-mix',
  state: (): MixState => ({ ...defaultMixState }),
  getters: {},
  actions: {
    /**** play-page ****/
    showPlayPage() {
      if (this.playPageVisible) {
        return
      }

      this.playPageVisible = true
    },
    hidePlayPage() {
      if (!this.playPageVisible) {
        return
      }

      this.playPageVisible = false
    },
    togglePlayPage() {
      this.playPageVisible = !this.playPageVisible
    },
    /**** play-list-page ****/
    showPlayListPage() {
      if (this.playListPageVisible) {
        return
      }

      this.playListPageVisible = true
    },
    hidePlayListPage() {
      if (!this.playListPageVisible) {
        return
      }

      this.playListPageVisible = false
    },
    togglePlayListPage() {
      this.playListPageVisible = !this.playListPageVisible
    }
    /**** reset ****/
    // reset() {}
  }
})
