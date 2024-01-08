<template>
  <div class="play-list-drawer">
    <a-drawer :visible="visible" v-bind="drawerProps" @close="onClose">
      <play-list-page />
      <template #title>
        <div>播放列表</div>
        <div>
          共<span>{{ listCount }}</span
          >首歌
        </div>
      </template>
      <template #extra>
        <div @click.stop="resetPlayList">
          <span class="clear"><delete-outlined />清空</span>
        </div>
      </template>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMixStore, usePlayListStore } from '@/stores'
import PlayListPage from '@/business/views/components/play-list'
import type { DrawerProps } from 'ant-design-vue'

defineOptions({
  name: 'PlayListDrawer',
  inheritAttrs: false
})

const mixStore = useMixStore()
const playListStore = usePlayListStore()
const visible = computed(() => {
  return mixStore.playListPageVisible
})

const listCount = computed(() => {
  return playListStore.listCount > 0 ? playListStore.listCount : 0
})

const resetPlayList = () => {
  playListStore.resetPlayList()
  mixStore.hidePlayPage()
}

const drawerProps = computed((): DrawerProps => {
  return {
    class: 'drawer-wrapper',
    width: 300,
    closable: false,
    placement: 'right',
    destroyOnClose: false,
    maskClosable: true,
    getContainer: false
  }
})

const onClose = () => {
  mixStore.hidePlayListPage()
}
</script>

<style scoped lang="scss">
.play-list-drawer {
  .drawer-wrapper {
    .clear {
      @include icon-hover;
    }
  }
}
</style>
