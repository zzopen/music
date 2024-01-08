<template>
  <a-config-provider>
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
  background-color: black;
}
</style>
