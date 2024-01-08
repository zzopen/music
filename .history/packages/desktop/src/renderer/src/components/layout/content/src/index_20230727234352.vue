<template>
  <a-layout-content :class="getClass">
    <m-page-content />
  </a-layout-content>
</template>
<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'

defineOptions({
  name: 'LayoutContent'
})

const { nsCls } = useCls(globalCls.layoutContent)
const getClass = computed(() => {
  return [nsCls]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout-content} {
  height: calc(100vh - $header-height - $footer-height);
  overflow: hidden;
}
</style>
