import { defineStore } from 'pinia'
import type {Song} from '@/views/typings'
export const usePlayStore = defineStore({
  id: "play",
  state: () => ({
    song: {} as Song,
  }),
  getters: {},
  actions: {
    
  },
});
