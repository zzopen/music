<template>
	<a-layout-footer :class="getClass">
		<b-footer-content />
	</a-layout-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { preDefineCls } from '@/styles/module'
import { usePreCls } from '@/composables'
import BFooterContent from '@/views/components/footer/index.vue'

defineOptions({
	name: 'm-layout-footer'
})

const {preCls} = usePreCls(preDefineCls.layoutFooter)
const getClass = computed(() => {
  return [preCls, {
        [`${preCls}--fixed`]: true
    }]
})
</script>

<style scoped lang="scss">
.#{$pre-cls-layout-footer} {
    width: inherit;
    height: $footer-height;
    padding: 0;

    &--fixed {
        position: fixed;
        bottom: 0;
    }
}
</style>
