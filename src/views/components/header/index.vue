<template>
  <div class="header-content">
    <MAppLogo />
    <HeaderNav />
    <HeaderSearch />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from './nav/index.vue'
import HeaderSearch from './search/index.vue'

defineOptions({
    name: 'header-content'
});

</script>

<style scoped lang="scss">
.header-content {
    display: flex;
    width: 100%;
    align-items: center;
}
</style>
