<script setup lang="ts">
import type { TableProps, TableColumnType } from 'ant-design-vue'

defineOptions({
  name: 'LocalSongTable',
  inheritAttrs: false
})

const columns: TableColumnType[] = [
  {
    title: '歌曲',
    dataIndex: 'song_name',
    key: 'song_name',
    align: 'left',
    sorter: true,
    showSorterTooltip: false,
    sortOrder: 'ascend',
    defaultSortOrder: 'ascend'
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
    song_name: 'Avid',
    singer: 'Avid singer',
    album: 'Avid album',
    duration: '04:22'
  },
  {
    key: '2',
    song_name: 'LiSla',
    singer: 'LiSla singer',
    album: 'LiSla album',
    duration: '04:23'
  },
  {
    key: '3',
    song_name: '屋顶',
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
    <a-table
      class="ant-table"
      :columns="columns"
      :data-source="data"
      v-bind="tableProps"
      :row-class-name="'ant-table-row'"
    >
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.local-song-table {
  [data-doc-theme='light'] .ant-table :deep(.ant-table-row) :hover {
    background-color: #fafafa;
  }
  [data-doc-theme='dark'] .ant-table :deep(.ant-table-row) :hover {
    background-color: rgb(29, 29, 29);
  }

  .ant-table {
  }
}
</style>
