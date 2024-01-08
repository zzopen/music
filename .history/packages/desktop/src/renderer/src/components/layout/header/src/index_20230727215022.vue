<template>
  <a-layout-header :class="getClass">
    <header-content />
  </a-layout-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'
import HeaderContent from '@/business/views/components/header'

defineOptions({
  name: 'LayoutHeader'
})

const { nsCls } = useCls(globalCls.layoutHeader)
const getClass = computed(() => {
  return [
    nsCls,
    {
      [`${nsCls}--fixed`]: true
    }
  ]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout-header} {
  padding: 0;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  line-height: $header-height;

  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
}
</style>
