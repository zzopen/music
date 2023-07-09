<template>
	<MSider>
        <SiderContent />
    </MSider>
</template>

<script setup lang="ts">
import MSider from './Sider.vue'
import SiderContent from '@/views/components/sider/index.vue'
defineOptions({
    name: 'm-layout-sider'
})
</script>

<style scoped lang="scss"></style>
