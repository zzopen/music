<script setup lang="ts">
import { h } from 'vue'
import { DesktopOutlined, CloudDownloadOutlined, FieldTimeOutlined } from '@ant-design/icons-vue'
import type { ItemType } from 'ant-design-vue'
import { getMenuItem } from '@/business/utils'

defineOptions({
  name: 'MyMusic',
  inheritAttrs: false
})

const router = useRouter()

const selectedKeys = ref([])
const openKeys = ref([])

const items: ItemType[] = reactive([
  getMenuItem('本地歌曲', 'local', h(DesktopOutlined)),
  getMenuItem('下载歌曲', 'download', h(CloudDownloadOutlined)),
  getMenuItem('最近播放', 'recent_play', h(FieldTimeOutlined))
])

const aMenuProps = computed(() => {
  return {
    width: '100%'
  }
})

const onClickMenuItem = ({ item, key, keyPath }) => {
  console.log(item, key, keyPath)
  if (key == 'local') {
    router.replace({ name: 'localsong' })
  }
}

<template>
  <div class="my-music">
    <div class="title">我的音乐</div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      v-bind="aMenuProps"
      mode="inline"
      :items="items"
      @click="onClickMenuItem"
    ></a-menu>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
