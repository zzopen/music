<script setup lang="ts">
defineOptions({
  name: 'LocalSong',
  inheritAttrs: false
})

const activeKey = ref('1')
</script>

<template>
  <div class="local-song">
    <div class="title">本地歌曲</div>
    <div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Tab 1">本地歌曲</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
