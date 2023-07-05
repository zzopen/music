<template>
	<ALayoutSider v-bind:="layoutSiderProps" :class="getClass">
		<slot></slot>
	</ALayoutSider>
</template>

<script setup lang="ts">
import {computed } from 'vue'
import {usePreCls} from '@/composables'
import {preDefineCls} from '@/styles/module'
defineOptions({
	name: 'm-layout-sider-sider'
})

const {preCls} = usePreCls(preDefineCls.layoutSiderSider)
const layoutSiderProps = computed(() => {
	return {
		breakpoint: 'lg',
		collapsible: false,
		trigger: null,
		theme: 'light',
		collapsed: false,
		collapsedWidth: 80,
		width: 200
	}
})

const getClass = computed(() => {
	return [preCls]
})

</script>

<style scoped lang="scss">
.#{$pre-cls-layout-sider-sider} {
	&--fixed {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
	}
}
</style>
