<template>
  <div class="play-drawer">
    <a-drawer :visible="visible" v-bind="drawerProps" @close="onClose">
      <play-page />
      <template #closeIcon>
        <down-outlined />
      </template>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMixStore } from '@/stores'
import PlayPage from '@/business/views/components/play-page'
import type { DrawerProps } from 'ant-design-vue'

defineOptions({
  name: 'PlayDrawer',
  inheritAttrs: false
})

const mixStore = useMixStore()
const visible = computed(() => {
  return mixStore.playPageVisible
})

const drawerProps = computed((): DrawerProps => {
  return {
    width: 500,
    height: '100%',
    placement: 'bottom',
    destroyOnClose: false,
    maskClosable: true,
    getContainer: false
  }
})

const onClose = () => {
  mixStore.hidePlayPage()
}
</script>

<style scoped lang="scss">
.play-drawer {
}
</style>
