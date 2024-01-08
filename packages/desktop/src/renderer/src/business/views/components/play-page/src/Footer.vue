<template>
  <div class="play-page-footer">
    <play-strip />
  </div>
</template>

<script setup lang="ts">
import PlayStrip from '@/business/views/components/play-strip'
defineOptions({
  name: 'PlayPageFooter'
})
</script>

<style scoped lang="scss">
.play-page-footer {
  border: 1px solid red;
}
</style>
