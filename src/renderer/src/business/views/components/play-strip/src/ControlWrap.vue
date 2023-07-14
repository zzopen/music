<template>
  <div class="control-wrap">
    <div class="left">
      <play-control-left />
    </div>
    <div class="center">
      <play-control />
    </div>
    <div class="right">
      <play-control-right />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayControl from '@/business/views/components/play-control'
import PlayControlLeft from '@/business/views/components/play-control-left'
import PlayControlRight from '@/business/views/components/play-control-right'

defineOptions({
  name: 'ControlWrap'
})
</script>

<style scoped lang="scss">
.control-wrap {
  display: flex;
  flex-direction: row;
  .left {
    flex: 1;
  }

  .center {
    flex: 1;
  }

  .right {
    flex: 1;
  }
}
</style>
