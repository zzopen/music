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
        <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
