<template>
  <div class="play-list">
    <a-list class="demo-loadmore-list" item-layout="horizontal" :data-source="playList">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <a-avatar :src="item.cover" />
            </template>
            <template #title>
              <div>{{ item.name }}</div>
              <div>{{ item.album }}</div>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { usePlayListStore } from '@/stores'
defineOptions({
  name: 'PlayList',
  inheritAttrs: false
})

const playListStore = usePlayListStore()
const playList = computed(() => {
  return playListStore.songList
})
</script>

<style scoped lang="scss">
.play-list {
}
</style>
