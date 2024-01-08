<script setup lang="ts">
import { songsheet } from '@/business/apis'
defineOptions({
  name: 'Discover'
})

onMounted(async () => {
  const res = await songsheet.songListAction({ songsheetId: 1 })
  console.log('res:', res)
})
</script>

<template>
  <div>推荐页面</div>
</template>

<style scoped lang="scss"></style>
