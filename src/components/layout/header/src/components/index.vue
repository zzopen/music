<template>
	<ALayoutHeader :class="getClass">
		<HeaderLeft />
		<HeaderCenter/>
		<HeaderRight />
	</ALayoutHeader>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {preDefineCls} from '@/styles/module'
import {usePreCls} from '@/composables'
import HeaderCenter from './HeaderCenter.vue'
import HeaderLeft from './HeaderLeft.vue'
import HeaderRight from './HeaderRight.vue'

defineOptions({
    name: 'm-layout-header'
})


const { preCls } = usePreCls(preDefineCls.layoutHeader)
const getClass = computed(() => {
	return [preCls]
})
</script>

<style scoped lang="scss">
.#{$pre-cls-layout-header} {
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: $header-height;
	line-height: $header-height;
    background-color: gray;
}
</style>
