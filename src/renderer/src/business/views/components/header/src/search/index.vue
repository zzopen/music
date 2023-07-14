<template>
  <div>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HeaderSearch'
})

const value = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>

<style scoped lang="scss"></style>
