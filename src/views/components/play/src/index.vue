<template>
    <div class="play">
        <div class="album-cover"><b-album-cover /></div>
        <div class="lyrics"><b-lyrics /></div>
    </div>
</template>

<script setup lang="ts">
import BAlbumCover from '@/views/components/album-cover'
import BLyrics from '@/views/components/lyrics'
defineOptions({
    name: 'b-play'
});

</script>

<style scoped lang="scss">
.play {
   border: 1px solid red;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   .album-cover {
        flex: 1
   }

   .lyrics {
        flex: 1
   }
}
</style>
