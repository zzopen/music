<template>
  <div class="play-progress">
    <a-slider
      v-model:value="progress"
      :disabled="disabled"
      :tooltip-open="tooltipOpen"
      v-bind="aSliderProps"
      :tip-formatter="formatter"
      @change="onChangeProgress"
    ></a-slider>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores'
import type { SliderValue } from 'ant-design-vue/es/slider'
import { isEmpty } from '@/business/utils'

defineOptions({
  name: 'PlayProgress'
})

const playerStore = usePlayerStore()
const aSliderProps = {
  min: 0,
  max: 100
}

const disabled = computed(() => {
  return !playerStore.ready
})

const tooltipOpen = computed(() => {
  return false
  //return isEmpty(playerStore.getCurLyricText) ? false : true
})

const formatter = () => {
  const res = isEmpty(playerStore.getCurLyricText) ? null : playerStore.getCurLyricText
  return res
}

const progress = ref()
watch(
  () => playerStore.playProgress,
  (newVal) => {
    progress.value = newVal
  }
)
const onChangeProgress = (value: SliderValue) => {
  playerStore.changeProgress(value as number)
}
</script>

<style scoped lang="scss">
.play-progress {
  :deep(.ant-slider-handle) {
    width: 8px;
    height: 8px;
    margin-top: -2px;
  }
}
</style>
