<template>
  <div class="player">
    <audio
      ref="audioRef"
      v-bind="audioProps"
      :src="audioSrc"
      @timeupdate="timeupdate"
      @canplay="canPlay"
      @ended="ended"
      @error="audioError"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores'

defineOptions({
  name: 'Player'
})

const playerStore = usePlayerStore()
const audioRef = ref<HTMLAudioElement>()
const audioProps = reactive({
  autoplay: true,
  muted: true,
  preload: 'auto'
})

const audioSrc = computed(() => {
  return playerStore.songSrc
})

onMounted(() => {
  playerStore.initAudioRef(unref(audioRef))
})

const canPlay = playerStore.canPlay
const timeupdate = playerStore.timeupdate
const ended = playerStore.ended
const audioError = playerStore.audioError

// 此处必须是2个属性同时监听
watch([() => playerStore.playerStatus, () => playerStore.ready], () => {
  playerStore.toggleAudioPlay()
})
</script>

<style scoped lang="scss">
.player {
}
</style>
