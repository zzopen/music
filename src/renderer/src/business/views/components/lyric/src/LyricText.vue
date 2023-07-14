<template>
  <div ref="wrapperRef" class="lyrics-content">
    <ul style="border: 1px solid red">
      <li v-for="(item, index) in playerStore.getLyricList" :key="index" class="item">
        <p v-dompurify-html="item.text" :class="contentClass(index)"></p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores'

defineOptions({
  name: 'LyricText'
})

const wrapperRef = ref<HTMLDivElement>()
const playerStore = usePlayerStore()

let top = 0
watch(
  () => playerStore.curLyricPosition,
  () => {
    top += 60
    // console.log(wrapperRef.value?.scrollTop)
    wrapperRef.value?.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }
)

const contentClass = computed(() => (index: number) => {
  return [
    {
      'p-active': index === playerStore.curLyricPosition
    }
  ]
})

// const scrollToBottom = () => {

// }

// const scrollToTop = () => {
//     wrapperRef.value?.scrollTo({
//         block: 'start',
//         behavior: "smooth"
//     })
// }
</script>

<style scoped lang="scss">
.lyrics-content {
  text-align: left;
  overflow: auto;
  height: 50vh;
  width: 100%;
  transition: all 0.4s;
  ul li {
    list-style: none;
  }

  .item {
    margin: 22px 0;
    min-height: 18px;
    .p-active {
      @apply text-green-300 text-2xl;
    }
  }
}
</style>
