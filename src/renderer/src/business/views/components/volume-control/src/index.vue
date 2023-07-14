<template>
  <div class="volume-control">
    <a-popover
      :open="open"
      trigger="click"
      overlay-class-name="overlay-class"
      :get-popup-container="getPopupContainer"
      @open-change="onClickVolume"
    >
      <template #content>
        <a-slider v-model:value="volumeValue" v-bind="volumeProps" @change="onChagneVolume" />
      </template>
      <template #default>
        <template v-if="muted">
          <audio-muted-outlined />
        </template>
        <template v-else>
          <audio-outlined class="voice" />
        </template>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores'
import { SliderValue } from 'ant-design-vue/es/slider'
defineOptions({
  name: 'VolumeControl'
})

const playerStore = usePlayerStore()

const volumeProps = {
  min: 0,
  max: 100,
  vertical: true
}

const getPopupContainer = (triggerNode: any) => {
  return triggerNode.parentNode
}

const volumeValue = ref<number>(playerStore.volume)
const onChagneVolume = (value: SliderValue) => {
  playerStore.changeVolume(value as number)
}

const muted = computed(() => {
  return playerStore.muted
})

const open = ref(false)
const onClickVolume = () => {
  if (unref(muted)) {
    open.value = false
  } else {
    open.value = !open.value
  }
}
</script>

<style scoped lang="scss">
.volume-control {
  :deep(.ant-popover-inner-content) {
    height: 300px;
  }

  .voice {
    @include icon-hover;
  }
}
</style>
