<script setup lang="ts">
import { theme } from 'ant-design-vue'

const themeRef = shallowRef({
  components: {
    Radio: {
      colorPrimary: '#00b96b'
    }
  }
})
</script>

<template>
  <a-config-provider>
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
