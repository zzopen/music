<script setup lang="ts">
defineOptions({
  name: 'LocalSongTable',
  inheritAttrs: false
})

const columns = [
  {
    title: '歌曲',
    dataIndex: 'name',
    key: 'name'
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
    album: 'album',
    duration: '04:22'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
</script>

<template>
  <div class="local-song-table">
    <a-table :columns="columns" :data-source="data"> </a-table>
  </div>
</template>

<style lang="scss" scoped>
.local-song-table {
}
</style>
