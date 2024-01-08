<template>
  <div class="play-control-left">
    <play-cover />
  </div>
</template>

<script setup lang="ts">
import PlayCover from '@/business/views/components/play-cover'
defineOptions({
  name: 'PlayControlLeft',
  inheritAttrs: false
})
</script>

<style scoped lang="scss">
.play-control-left {
}
</style>
