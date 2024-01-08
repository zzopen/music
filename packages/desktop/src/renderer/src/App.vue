<script setup lang="ts">
import { theme } from 'ant-design-vue'

const themeRef = shallowRef({
  algorithm: theme.darkAlgorithm,
  components: {
    // https://github.com/vueComponent/ant-design-vue/blob/main/components/layout/style/light.ts
    Layout: {
      colorBgContainer: '#171718',
      colorBgHeader: '#1e1e1f',
      colorBgBody: '#1e1e1f'
    },
    // https://github.com/vueComponent/ant-design-vue/blob/main/components/menu/style/theme.ts
    Menu: {
      colorItemText: '#a2a2a3',
      colorItemTextHover: '#a2a2a3',
      colorItemBg: '#171718',
      colorItemBgHover: '#2f2f30',
      colorItemBgSelected: '#2ecd9d',
      colorItemTextSelected: '#ffffff'
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
