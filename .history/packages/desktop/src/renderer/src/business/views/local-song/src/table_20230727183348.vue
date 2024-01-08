<script setup lang="ts">
import type { TableProps } from 'ant-design-vue'

defineOptions({
  name: 'LocalSongTable',
  inheritAttrs: false
})

const columns = [
  {
    title: '歌曲',
    dataIndex: 'name',
    key: 'name',
    defaultSortOrder:
  },
  {
    title: '歌手',
    dataIndex: 'singer',
    key: 'singer'
  },
  {
    title: '专辑',
    dataIndex: 'album',
    key: 'album'
  },
  {
    title: '时长',
    key: 'duration',
    dataIndex: 'duration'
  }
]

const data = [
  {
    key: '1',
    name: 'Avid',
    singer: 'Avid singer',
    album: 'Avid album',
    duration: '04:22'
  },
  {
    key: '2',
    name: 'LiSla',
    singer: 'LiSla singer',
    album: 'LiSla album',
    duration: '04:23'
  },
  {
    key: '3',
    name: '屋顶',
    singer: '屋顶 singer',
    album: '屋顶 album',
    duration: '04:24'
  }
]

const tableProps: TableProps = reactive({
  pagination: false
})
</script>

<template>
  <div class="local-song-table">
    <a-table :columns="columns" :data-source="data" v-bind="tableProps"> </a-table>
  </div>
</template>

<style lang="scss" scoped>
.local-song-table {
}
</style>
