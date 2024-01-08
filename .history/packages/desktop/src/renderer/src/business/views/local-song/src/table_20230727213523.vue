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
    defaultSortOrder: 'ascend',
    ellipsis: true
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
  },
  {
    key: '4',
    song_name: '屋顶',
    singer: '屋顶 singer',
    album: '屋顶 album',
    duration: '04:24'
  },
  {
    key: '5',
    song_name: '屋顶',
    singer: '屋顶 singer',
    album: '屋顶 album',
    duration: '04:24'
  },
  {
    key: '6',
    song_name: '屋顶',
    singer: '屋顶 singer',
    album: '屋顶 album',
    duration: '04:24'
  },
  {
    key: '7',
    song_name: '屋顶',
    singer: '屋顶 singer',
    album: '屋顶 album',
    duration: '04:24'
  },
  {
    key: '8',
    song_name: '屋顶',
    singer: '屋顶 singer',
    album: '屋顶 album',
    duration: '04:24'
  }
]

const tableProps: TableProps = reactive({
  pagination: false,
  loading: true,
  bordered: false,
  emptyText: '本地暂无歌曲'
})

setTimeout(() => {
  tableProps.loading = false
}, 2000)
</script>

<template>
  <div class="local-song-table">
    <a-table
      class="ant-table"
      :columns="columns"
      :data-source="data"
      :scroll="{ y: 300 }"
      v-bind="tableProps"
      :row-class-name="'ant-table-row'"
    >
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.local-song-table {
  [data-doc-theme='light'] .ant-table :deep(.ant-table-row) :hover {
    background-color: rgb(29, 29, 29);
  }
  [data-doc-theme='dark'] .ant-table :deep(.ant-table-row) :hover {
    background-color: #fafafa;
  }

  .ant-table {
  }
}
</style>
