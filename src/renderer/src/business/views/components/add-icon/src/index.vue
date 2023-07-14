<script setup lang="ts">
defineOptions({
  name: 'AddIcon'
})
</script>

<template>
  <plus-circle-outlined class="add-icon" />
</template>

<style scoped lang="scss">
.add-icon {
  @include icon-hover;
}
</style>
