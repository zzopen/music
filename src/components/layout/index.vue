<template>
    <a-layout :class="getClass">
        <m-layout-header />
        <div style="clear: both;"></div>
        <a-layout class="layout-bottom">
            <m-layout-sider />
             <a-layout class="layout-bottom-bottom">
                <m-layout-content />
                <div style="clear: both;"></div>
                <m-layout-footer />
             </a-layout>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { preDefineCls } from '@/styles/module'
import {usePreCls} from '@/composables'

defineOptions({
    name: 'm-layout'
})

const { preCls } = usePreCls(preDefineCls.layout)
const getClass = computed(() => {
	return [preCls]
})
</script>

<style scoped lang="scss">
.#{$pre-cls-layout} {
	width: 100%;
    height: 100%;
    max-height: 100%;

    :deep(.layout-bottom) {
       width: inherit;
	   height: calc(100% - $header-height);
       margin-top: $header-height
	}

    :deep(.layout-bottom-bottom) {
       width: calc(100% - $sider-width);
       position: relative;
	}
}
</style>
