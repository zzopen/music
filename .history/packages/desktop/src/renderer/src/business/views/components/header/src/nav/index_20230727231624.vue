<template>
  <div class="header-nav">
    <span style="margin-left: 40px"></span>
    <left-outlined />
    <span style="margin-left: 20px"></span>
    <right-outlined />
    <span style="margin-left: 15px"></span>
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
