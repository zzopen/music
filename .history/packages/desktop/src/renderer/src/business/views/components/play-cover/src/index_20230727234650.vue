<template>
  <div class="play-cover">
    <img :src="coverSrc" alt="" width="60" height="35" @click="onClickCover" />
  </div>
</template>

<script setup lang="ts">
import { useMixStore, usePlayerStore, usePlayListStore } from '@/stores'

defineOptions({
  name: 'PlayCover',
  inheritAttrs: false
})

const playerStore = usePlayerStore()
const playListStore = usePlayListStore()
const mixStore = useMixStore()
const coverSrc = new URL('@/assets/86.jpg', import.meta.url).href
const onClickCover = () => {
  if (!playerStore.ready) {
    mixStore.hidePlayPage()
    return
  }

  if (playListStore.listCount === 0) {
    mixStore.hidePlayPage()
    return
  }

  mixStore.togglePlayPage()
}
</script>

<style scoped lang="scss">
.play-cover {
}
</style>
