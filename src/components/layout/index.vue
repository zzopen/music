<template>
    <ALayout :class="getClass">
        <MLayoutSider />
        <ALayout>
            <MLayoutHeader />
            <MLayoutContent />
            <MLayoutFooter />
        </ALayout>
    </ALayout>
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
	min-height: 100%;

	> .ant-layout {
		min-height: 100%;
	}
}
</style>
