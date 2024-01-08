<script setup lang="ts">
const themeRef = shallowRef({
  components: {
    // https://github.com/vueComponent/ant-design-vue/blob/main/components/menu/style/theme.ts
    Menu: {
      colorItemText: '#a2a2a3',
      colorItemBg: '#171718'
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
