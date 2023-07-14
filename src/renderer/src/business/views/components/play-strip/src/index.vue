<template>
  <div class="play-strip">
    <play-progress />
    <control-wrap />
  </div>
</template>

<script setup lang="ts">
import PlayProgress from '@/business/views/components/play-progress'
import ControlWrap from './ControlWrap.vue'

defineOptions({
  name: 'PlayStrip'
})
</script>

<style scoped lang="scss">
.play-strip {
}
</style>
