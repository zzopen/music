<template>
  <div class="sider-content">
        <div class="main">
            <offline-song-sheet />
        </div>
    </div>
</template>

<script setup lang="ts">
import OfflineSongSheet from '@/business/views/components/offline-song-sheet'
defineOptions({
    name: 'SiderContent'
});

</script>

<style scoped lang="scss">
.sider-content {
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
