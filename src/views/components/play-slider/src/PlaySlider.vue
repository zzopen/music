<template>
   <div class="play-slider">
      <a-slider v-model:value="value" v-bind="aSliderProps"/>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


defineOptions({
    name: 'b-play-slider'
});

const value = ref()
const aSliderProps = {
    min: 1,
    max: 20
}

</script>

<style scoped lang="scss">
.play-slider {
    
}
</style>
