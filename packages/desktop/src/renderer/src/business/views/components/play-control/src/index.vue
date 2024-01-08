<template>
  <div class="play-control">
    <!-- 上一曲 !-->
    <div @click.stop="onLast">
      <step-backward-filled class="last" />
    </div>
    <!-- 播放/暂停 !-->
    <div>
      <a-button
        :disabled="disabled"
        class="btn__play-pause"
        type="primary"
        shape="circle"
        @click.stop="togglePlay"
      >
        <template #icon>
          <template v-if="showPlayIcon">
            <caret-right-outlined class="play-pause" />
          </template>
          <template v-else>
            <pause-outlined class="play-pause" />
          </template>
        </template>
      </a-button>
    </div>
    <!-- 下一曲 !-->
    <div @click.stop="onNext">
      <step-forward-filled class="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores'

defineOptions({
  name: 'PlayControl'
})

const playerStore = usePlayerStore()
const showPlayIcon = computed(() => {
  return !playerStore.isPlaying
})

const disabled = computed(() => {
  return !playerStore.ready
})

const togglePlay = playerStore.togglePlay
const onNext = playerStore.next
const onLast = playerStore.last
</script>

<style scoped lang="scss">
.play-control {
  font-size: 28px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
  .last {
    @include icon-hover;
  }

  .play-pause {
    @include icon-hover;
  }

  .btn__play-pause {
    @apply bg-green-400 border-green-400;
  }

  .next {
    @include icon-hover;
  }
}
</style>
