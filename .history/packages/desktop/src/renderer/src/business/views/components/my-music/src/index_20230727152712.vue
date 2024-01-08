<script setup lang="ts">
defineOptions({
  name: 'MyMusic',
  inheritAttrs: false
})

import { h } from 'vue'
import { DesktopOutlined, CloudDownloadOutlined, FieldTimeOutlined } from '@ant-design/icons-vue'
import { ItemType } from 'ant-design-vue'

const selectedKeys = ref(['1'])
const openKeys = ref(['1'])

const items: ItemType[] = reactive([
  getItem('本地歌曲', '1', h(DesktopOutlined)),
  getItem('下载歌曲', '2', h(CloudDownloadOutlined)),
  getItem('本地歌曲', '3', h(FieldTimeOutlined))
])

const aMenuProps = computed(() => {
  return {
    width: '100%'
  }
})
</script>

<template>
  <div class="my-music">
    <div class="title">我的音乐</div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      v-bind="aMenuProps"
      mode="inline"
      :items="items"
    ></a-menu>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
