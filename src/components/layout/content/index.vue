<template>
    <div :class="getClass">
         <m-page-content/>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { preDefineCls } from '@/styles/module'
import { usePreCls } from '@/composables'

defineOptions({
	name: 'm-layout-content'
})

const {preCls} = usePreCls(preDefineCls.layoutContent)
const getClass = computed(() => {
  return [preCls]
})

</script>

<style scoped lang="scss">
.#{$pre-cls-layout-content} {
    width: 100%;
    height: calc(100% - $header-height - $footer-height);
    overflow: hidden; 
}
</style>
