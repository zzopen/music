<template>
   <plus-circle-outlined  class="add-icon"/>
</template>

<script setup lang="ts">
defineOptions({
    name: 'add-icon'
});

</script>

<style scoped lang="scss">
.add-icon {
    @include icon-hover;
}
</style>
