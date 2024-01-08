<script setup lang="ts">
const themeRef = shallowRef({
  components: {
    Menu: {
      colorItemText: 'white'
    }
  }
})
</script>

<template>
  <a-config-provider :theme="themeRef">
    <m-app-provider>
      <RouterView />
    </m-app-provider>
  </a-config-provider>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
