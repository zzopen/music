<template>
  <div class="header-content">
    <header-nav />
    <header-search />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from './nav/index.vue'
import HeaderSearch from './search/index.vue'

defineOptions({
  name: 'HeaderContent'
})
</script>

<style scoped lang="scss">
.header-content {
  display: flex;
  width: 100%;
  align-items: center;
}
</style>
