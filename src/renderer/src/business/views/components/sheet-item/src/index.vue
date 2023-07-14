<template>
  <menu-item @contextmenu="showContextMenu">
    <template #default>
      {{ title }}
    </template>
  </menu-item>
</template>

<script setup lang="ts">
import { sheetItemProps } from './props'
import MenuItem from '@/business/views/components/menu-item'
// import { Menu } from 'electron'
// console.log(Menu)
defineOptions({
  name: 'SheetItem'
})

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

const showContextMenu = () => {}
</script>

<style scoped lang="scss"></style>
