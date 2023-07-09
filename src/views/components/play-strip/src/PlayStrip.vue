<template>
   <div class="play-strip">
    <b-player />
    <b-play-control />
   </div>
</template>

<script setup lang="ts">

import BPlayer from '@/views/components/player'
import BPlayControl from '@/views/components/play-control'

defineOptions({
    name: 'b-play-strip'
});

</script>

<style scoped lang="scss">
.play-strip {
    
}
</style>
