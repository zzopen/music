<template>
  <div class="header-nav">
    <left-outlined />
    <right-outlined />
    <redo-outlined />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HeaderNav'
})
</script>

<style scoped lang="scss">
.header-nav {
  width: 130px;
  padding: 5px;
}
</style>
