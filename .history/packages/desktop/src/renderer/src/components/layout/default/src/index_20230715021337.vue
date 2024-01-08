<template>
  <a-layout :class="getClass">
    <m-layout-header />
    <div style="clear: both"></div>
    <a-layout class="layout-bottom">
      <m-layout-sider />
      <a-layout class="layout-bottom-bottom">
        <m-layout-content />
        <div style="clear: both"></div>
        <m-layout-footer />
      </a-layout>
    </a-layout>
  </a-layout>
  <custom-teleport />
</template>

<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'
import CustomTeleport from '@/business/views/components/custom-teleport'

defineOptions({
  name: 'LayoutDefault'
})

const { nsCls } = useCls(globalCls.layout)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout} {
  width: 100%;
  height: 100%;
  max-height: 100%;

  :deep(.layout-bottom) {
    width: inherit;
    height: calc(100% - $header-height);
    margin-top: $header-height;
  }

  :deep(.layout-bottom-bottom) {
    width: calc(100% - $sider-width);
    position: relative;
  }
}
</style>
