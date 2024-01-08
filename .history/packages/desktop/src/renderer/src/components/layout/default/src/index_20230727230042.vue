<template>
  <a-layout :class="getClass">
    <!---左边sider--->
    <m-layout-sider />

    <!---右边--->
    <a-layout class="m-layout-right">
      <!--header-->
      aaaaaa
      <m-layout-header />

      <div style="clear: both"></div>
      <!--content-->
      bbbbbb
      <!-- <m-layout-content /> -->
      <!--footer-->
      <!-- <m-layout-footer /> -->
      <div style="clear: both"></div>
      cccccc
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
  min-width: 100%;
  min-height: 100%;

  // .m-layout-left {
  //   width: 25px;
  //   height: 100%;
  // }

  // :deep(.layout-bottom) {
  //   width: inherit;
  //   height: calc(100% - $header-height);
  //   margin-top: $header-height;
  // }

  // :deep(.layout-bottom-bottom) {
  //   width: calc(100% - $sider-width);
  //   position: relative;
  // }
}
</style>
