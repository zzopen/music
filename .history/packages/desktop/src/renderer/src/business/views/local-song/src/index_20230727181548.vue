<script setup lang="ts">
import LocalSongTable from './table.vue'

defineOptions({
  name: 'LocalSong',
  inheritAttrs: false
})

const activeKey = ref('local')
</script>

<template>
  <div class="local-song">
    <div class="title">本地歌曲</div>
    <div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="local" tab="本地歌曲">
          <local-song-table />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
