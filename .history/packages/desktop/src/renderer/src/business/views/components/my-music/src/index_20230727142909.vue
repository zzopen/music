<script setup lang="ts">
defineOptions({
  name: 'MyMusic',
  inheritAttrs: false
})
</script>

<template>
  <div class="my-music">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :theme="theme"
      :items="items"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
