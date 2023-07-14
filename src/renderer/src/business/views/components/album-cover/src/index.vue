<template>
  <div class="album-cover">
    <img src="@/assets/music.png" alt="123" width="200" height="200" />
    <div style="clear: both"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AlbumCover'
})
</script>

<style scoped lang="scss">
.album-cover {
  img {
    float: right;
  }
}
</style>
