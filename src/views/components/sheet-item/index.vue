<template>
   <menu-item @contextmenu.native="showContextMenu">
        <template v-slot:default>
            {{title}}
        </template>
  </menu-item>
</template>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue';
import {sheetItemProps} from './props'
import MenuItem from '../menu-item/index.vue'
// import { Menu } from 'electron'
// console.log(Menu)
defineOptions({
    name: 'sheet-item'
});

defineProps(sheetItemProps())
onMounted(() => {
    createMenu()
})

// const menu = shallowRef<Menu>()
const createMenu = () => {
    // menu.value = Menu.buildFromTemplate([
    //     {
    //         label: '重命名',
    //         click: () => { 
    //         }
    //     },
    //     {
    //         label: '删除歌单',
    //         click: () => {
    //         }
    //     }
    // ])
}

const showContextMenu = () => {
    
}
</script>

<style scoped lang="scss">

</style>
