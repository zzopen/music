<template>
   <div class="voice-control">
    <APopover v-bind="aPopoverProps">
      <template #content>
         <a-slider v-model:value="value1" v-bind="aSliderProps" vertical />
      </template>
      <sound-filled class="voice"/>
    </APopover>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
    name: 'b-voice-control'
});

const aSliderProps = {
    min: 1,
    max: 20
}

const aPopoverProps = {
    trigger: 'click',
    overlayClassName: 'overlay-class',
    getPopupContainer: (triggerNode: any) => { 
 		return triggerNode.parentNode
 	}
}

const value1 = ref<number>(30);
</script>

<style scoped lang="scss">
.voice-control {
    :deep(.ant-popover-inner-content) {
        height: 300px;
    }
   
    .voice {
        @include icon-hover;
    }
}
</style>
