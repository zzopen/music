<template>
  <a-layout-sider v-bind:="layoutSiderProps" :class="getClass">
    <slot></slot>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'
defineOptions({
  name: 'LayoutSiderSider'
})

const layoutSiderProps = computed(() => {
  return {
    breakpoint: 'lg',
    collapsible: false,
    trigger: null,
    theme: 'light',
    collapsed: false,
    collapsedWidth: 80,
    width: globalCls.siderWidth
  }
})

const { nsCls } = useCls(globalCls.layoutSiderSider)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout-sider-sider} {
  // height: 100%;
}
</style>
