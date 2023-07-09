<template>
  <div class="app">
        <div class="main">
            <OfflineSongSheet />
        </div>
    </div>
</template>

<script setup lang="ts">
import OfflineSongSheet from '../offline-song-sheet/index.vue'
defineOptions({
    name: 'sider-content'
});

</script>

<style scoped lang="scss">
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    .main {
        width: 100%;
        height: calc(100% - 195px);
        padding: 16px;
        overflow: auto;
    }
}
</style>
