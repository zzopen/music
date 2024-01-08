<script setup lang="ts">
defineOptions({
  name: 'MyMusic',
  inheritAttrs: false
})

import { VueElement, h, reactive } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
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
const items = ref([
  {
    key: '1',
    icon: () => h(MailOutlined),
    label: '本地歌曲',
    title: '下载歌曲'
  },
  {
    key: '2',
    icon: () => h(MailOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two'
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
