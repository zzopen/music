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
    icon: () => h(CalendarOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two'
  },
  {
    key: 'sub1',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Three',
    title: 'Navigation Three',
    children: [
      {
        key: '3',
        label: 'Option 3',
        title: 'Option 3'
      },
      {
        key: '4',
        label: 'Option 4',
        title: 'Option 4'
      },
      {
        key: 'sub1-2',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '5',
            label: 'Option 5',
            title: 'Option 5'
          },
          {
            key: '6',
            label: 'Option 6',
            title: 'Option 6'
          }
        ]
      }
    ]
  },
  {
    key: 'sub2',
    icon: () => h(SettingOutlined),
    label: 'Navigation Four',
    title: 'Navigation Four',
    children: [
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7'
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8'
      },
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9'
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10'
      }
    ]
  }
])
const changeTheme = (checked: boolean) => {
  theme.value = checked ? 'dark' : 'light'
}

const aMenuProps = computed(() => {
  return {
    width: '100%'
  }
})
</script>

<template>
  <div class="my-music">
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
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
