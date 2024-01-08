<template>
  <div class="play-control-right">
    <duration />
    <volume-control />
    <play-list-control />
  </div>
</template>

<script setup lang="ts">
import VolumeControl from '@/business/views/components/volume-control'
import Duration from '@/business/views/components/duration'
import PlayListControl from '@/business/views/components/play-list-control'

defineOptions({
  name: 'PlayControlRight',
  inheritAttrs: false
})
</script>

<style scoped lang="scss">
.play-control-right {
  font-size: 28px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
}
</style>
