<template>
  <div class="play-page-content">
    <div class="album-cover">
      <album-cover />
    </div>
    <div class="lyric">
      <lyric />
    </div>
  </div>
</template>

<script setup lang="ts">
import AlbumCover from '@/business/views/components/album-cover'
import Lyric from '@/business/views/components/lyric'
defineOptions({
  name: 'PlayPageContent'
})
</script>

<style scoped lang="scss">
.play-page-content {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .album-cover {
    flex: 1;
  }

  .lyric {
    flex: 1;
  }
}
</style>
