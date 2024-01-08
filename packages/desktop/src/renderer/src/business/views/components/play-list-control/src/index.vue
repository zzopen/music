<template>
  <div class="play-list-control">
    <span class="list-icon">
      <unordered-list-outlined @click="onClick" />
      <span class="list-count">{{ listCount }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useMixStore, usePlayListStore } from '@/stores'
defineOptions({
  name: 'PlayListControl'
})

const mixStore = useMixStore()
const playListStore = usePlayListStore()
const onClick = () => {
  mixStore.showPlayListPage()
}

const listCount = computed(() => {
  return playListStore.listCount > 0 ? playListStore.listCount : 0
})
</script>

<style scoped lang="scss">
.play-list-control {
  .list-icon {
    @include icon-hover;
    .list-count {
      font-size: 1rem;
      margin-left: 5px;
    }
  }
}
</style>
