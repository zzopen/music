<template>
    <div :class="getClass">
		<img src="@/assets/music.png" alt="logo" />
		<div :class="getTitleClass">{{logoTitle }}</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePreCls } from '@/composables'
import { preDefineCls } from '@/styles/module'

defineOptions({
    name: 'm-app-logo'
});


const { preCls } = usePreCls(preDefineCls.appLogo)
const getClass = computed(() => {
	return [preCls]
})

const logoTitle = ref("仔仔")
const getTitleClass = computed(() => {
	return [`${preCls}__title`]
})

</script>

<style scoped lang="scss">
.#{$pre-cls-app-logo} {
	display: flex;
	align-items: center;
	padding-left: 40px;
	height: $header-height;
    width: $sider-width;
    background-color: white;
    cursor: pointer;
	transition: all 0.2s ease;

	& img {
		width: $logo-width;
		height: $logo-width;
		margin-right: 2px;
		display: inline-block;
		height: 32px;
		vertical-align: middle;
		transition: height 0.2s;
	}

	&__title {
		font-size: 16px;
		font-weight: 700;
		transition: all 0.5s;
		line-height: normal;
		color: black;
	}
}</style>
