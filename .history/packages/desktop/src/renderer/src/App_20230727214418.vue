<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm
    }"
  >
    <m-app-provider>
      <RouterView />
    </m-app-provider>
  </a-config-provider>
</template>

<script setup lang="ts"></script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
