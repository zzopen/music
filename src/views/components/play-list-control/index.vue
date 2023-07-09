<template>
   <div class="play-list-control">
     <unordered-list-outlined class="list-icon"/>
   </div>
</template>

<script setup lang="ts">

defineOptions({
    name: 'play-list-control'
});

</script>

<style scoped lang="scss">
.play-list-control {
    .list-icon {
        @include icon-hover;
    }
}
</style>
