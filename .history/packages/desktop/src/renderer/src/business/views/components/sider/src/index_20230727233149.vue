<template>
  <div class="sider-content">
    <!-- <div class="main">
      <offline-song-sheet />
    </div> -->
    <my-music />
  </div>
</template>

<script setup lang="ts">
import OfflineSongSheet from '@/business/views/components/offline-song-sheet'
import MyMusic from '@/business/views/components/my-music'

defineOptions({
  name: 'SiderContent'
})
</script>

<style scoped lang="scss">
.sider-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .main {
    width: 100%;
    height: 100%;
    padding: 16px;
    overflow: auto;
  }
}
</style>
@/business/views/components/my-music-menu
