<template>
	<a-layout-header :class="getClass">
		<b-header-content />
	</a-layout-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { preDefineCls } from '@/styles/module'
import { usePreCls } from '@/composables'
import BHeaderContent from '@/views/components/header/index.vue'

defineOptions({
    name: 'm-layout-header'
})

const { preCls } = usePreCls(preDefineCls.layoutHeader)
const getClass = computed(() => {
	return [preCls, {
        [`${preCls}--fixed`]: true
    }]
})
</script>

<style scoped lang="scss">
.#{$pre-cls-layout-header} {
	padding: 0;
    width: inherit;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: $header-height;
	line-height: $header-height;
    background-color: gray;


    &--fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
	}
}
</style>
