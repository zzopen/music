<template>
  <menu-section title="创建的歌单">
    <template #append>
      <add-icon @click="showSheet" />
    </template>
    <template #default>
      <template v-for="item in sheetList" :key="item.id">
        <sheet-item :title="item.name" @click="onClickSheet(item)" />
      </template>
    </template>
  </menu-section>
</template>

<script setup lang="ts">
import MenuSection from '@/business/views/components/menu-section'
import AddIcon from '@/business/views/components/add-icon'
import SheetItem from '@/business/views/components/sheet-item'
import { usePlayListStore, useSongsheetStore } from '@/stores'

defineOptions({
  name: 'OfflineSongSheet'
})

const playListStore = usePlayListStore()
const songsheetStore = useSongsheetStore()

onMounted(async () => {
  await songsheetStore.changeSongsheetList()
})

const showSheet = () => {}
const sheetList = computed(() => {
  return songsheetStore.songsheetList
})

const onClickSheet = async (item: any) => {
  await playListStore.changeSongSheetSongList(item.id)
}
</script>

<style scoped lang="scss">
.add-icon {
  cursor: pointer;
  &:hover {
    color: $color-primary;
  }
}
</style>
