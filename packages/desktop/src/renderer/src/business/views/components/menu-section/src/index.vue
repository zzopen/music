<template>
  <div class="menu-section">
    <div class="top">
      <span class="title">{{ title }}</span>
      <slot name="append"></slot>
    </div>
    <ul class="list">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { menuSectionProps } from './props'
defineOptions({
  name: 'MenuSection'
})

defineProps(menuSectionProps())
</script>

<style scoped lang="scss">
.menu-section {
  margin-bottom: 16px;
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    .title {
      font-size: 12px;
      color: #8f8f8f;
    }
  }
}
</style>
