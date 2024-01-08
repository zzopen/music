<template>
  <div :class="getClass">
    <img src="@/assets/music.png" alt="logo" />
    <div :class="getTitleClass">{{ logoTitle }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCls } from '@/composables'
import { globalCls } from '@/styles/module'

defineOptions({
  name: 'AppLogo'
})

const { nsCls } = useCls(globalCls.appLogo)
const getClass = computed(() => {
  return [nsCls]
})

const logoTitle = ref('仔仔')
const getTitleClass = computed(() => {
  return [`${nsCls}__title`]
})
</script>

<style scoped lang="scss">
.#{$namespace-app-logo} {
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: $header-height;
  width: $sider-width;
  cursor: pointer;
  transition: all 0.2s ease;

  & img {
    width: $logo-width;
    height: $logo-width;
    margin-right: 2px;
    display: inline-block;
    height: 32px;
    vertical-align: middle;
    transition: height 0.2s;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    line-height: normal;
    color: white;
  }
}
</style>
