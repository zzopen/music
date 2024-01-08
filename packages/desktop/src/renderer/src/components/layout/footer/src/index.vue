<template>
  <a-layout-footer :class="getClass">
    <footer-content />
  </a-layout-footer>
</template>

<script setup lang="ts">
import { globalCls } from '@/styles/module'
import { useCls } from '@/composables'
import FooterContent from '@/business/views/components/footer'

defineOptions({
  name: 'LayoutFooter'
})

const { nsCls } = useCls(globalCls.layoutFooter)
const getClass = computed(() => {
  return [
    nsCls,
    {
      [`${nsCls}--fixed`]: false
    }
  ]
})
</script>

<style scoped lang="scss">
.#{$namespace-layout-footer} {
  // 不知道为啥多出来1px
  height: calc($footer-height + 1px);
  padding: 0;
}
</style>
