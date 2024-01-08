<template>
  <layout-sider-sider>
    <m-app-logo />
    <sider-content />
  </layout-sider-sider>
</template>

<script setup lang="ts">
import LayoutSiderSider from './Sider.vue'
import SiderContent from '@/business/views/components/sider'
defineOptions({
  name: 'LayoutSider'
})
</script>

<style scoped lang="scss"></style>
