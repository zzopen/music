<script setup lang="ts">
defineOptions({
  name: 'MyMusic',
  inheritAttrs: false
})

import { VueElement, h } from 'vue'
import { DesktopOutlined, CloudDownloadOutlined, FieldTimeOutlined } from '@ant-design/icons-vue'
import { ItemType } from 'ant-design-vue'

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType
}

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])
const items: ItemType[] = ref([
  {
    key: '1',
    icon: () => h(DesktopOutlined),
    label: '本地歌曲',
    title: '本地歌曲'
  },
  {
    key: '2',
    icon: () => h(CloudDownloadOutlined),
    label: '下载歌曲',
    title: '下载歌曲'
  },
  {
    key: '3',
    icon: () => h(FieldTimeOutlined),
    label: '最近播放',
    title: '最近播放'
  }
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
