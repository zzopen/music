<script setup lang="ts">
defineOptions({
  name: 'LocalSongTable',
  inheritAttrs: false
})

const columns = [
  {
    name: '歌曲',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '歌手',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '专辑',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '时长',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: 'Action',
    key: 'action'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
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
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }"> </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="scss" scoped>
.local-song-table {
}
</style>
