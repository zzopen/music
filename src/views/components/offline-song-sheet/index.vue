<template>
  <MenuSection title="离线歌单">
    <template v-slot:append>
       <AddIcon @click="showSheet"/>
    </template>
    <template v-slot:default>
       <SheetItem v-for="item in sheetList" :key="item.id" :title="item.name"/>
    </template>
  </MenuSection>
</template>

<script setup lang="ts">
import MenuSection from '../menu-section/index.vue'
import AddIcon from '../add-icon/index.vue'
import SheetItem from '../sheet-item/index.vue'

defineOptions({
    name: 'offline-song-sheet'
});

const sheetList = [{id: "1", name: "歌单1"},{id: "2", name: "歌单2"}]
const showSheet = () => {}
</script>

<style scoped lang="scss">
.add-icon {
    cursor: pointer;
    &:hover {
        color: $color-primary;
    }
}
</style>
