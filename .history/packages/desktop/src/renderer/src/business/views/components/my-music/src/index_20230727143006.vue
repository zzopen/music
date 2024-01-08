<script setup lang="ts">
defineOptions({
  name: 'MyMusic',
  inheritAttrs: false
})
</script>

<template>
  <div class="my-music">
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      style="width: 256px"
      mode="inline"
      :open-keys="state.openKeys"
      :items="items"
      @openChange="onOpenChange"
    ></a-menu>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
