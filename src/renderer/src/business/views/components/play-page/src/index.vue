<template>
  <div class="play-page">
    <play-page-content class="content" />
    <div class="gap"></div>
    <play-page-footer class="footer" />
  </div>
</template>

<script setup lang="ts">
import PlayPageContent from './Content.vue'
import PlayPageFooter from './Footer.vue'
defineOptions({
  name: 'PlayPage'
})
</script>

<style scoped lang="scss">
.play-page {
  .content {
    height: 70vh;
  }

  .gap {
    height: 5vh;
  }

  .footer {
    height: 15vh;
  }
}
</style>
