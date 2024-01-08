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
    label: 'Navigation One',
    title: 'Navigation One'
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
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      v-bind="aMenuProps"
      mode="inline"
      :open-keys="state.openKeys"
      :items="items"
    ></a-menu>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
