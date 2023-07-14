<template>
  <li class="menu-item">
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MenuItem'
})
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  color: #444;
  padding: 6px 8px;
  font-size: 13px;
  line-height: 1;
  user-select: none;
  &:hover {
    background-color: rgba(222, 222, 222, 0.49);
  }
  &:global(.active) {
    background: linear-gradient(to right, #30d07f, #2fcc7d);
    color: white;
  }
}
</style>
