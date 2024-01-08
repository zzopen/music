<template>
  <div class="duration">
    <span>{{ curTimeText }}</span
    >/<span>{{ totalDurationText }}</span>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores'
import { minute } from '@common/utils'

defineOptions({
  name: 'Duration',
  inheritAttrs: false
})

const playerStore = usePlayerStore()
const curTimeText = computed(() => {
  return minute(playerStore.curTime)
})

const totalDurationText = computed(() => {
  return minute(playerStore.totalDuration)
})
</script>

<style scoped lang="scss">
.duration {
}
</style>
