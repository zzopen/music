<template>
    <div class="player">
    <ASlider v-model:value="currentTime" v-bind="aSliderProps" />
        <audio v-bind="audioProps" ref="audioRef" 
               @timeupdate="timeupdate"
               @canplay="canPlay"
               @ended="next"
               @error="audioError"
        ></audio>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
    name: 'b-player'
});

const audioRef = ref(null)
const currentTime = ref(0)
const aSliderProps = {
    min: 1,
    max: 20
}

const audioSrc = new URL('@/assets/songs/Avid.mp3', import.meta.url).href
console.log(audioSrc)
const audioProps = {
    src: audioSrc,
    autoplay: false,
    preload:"auto"
}

const timeupdate = () => {

}

const canPlay = () => {
    console.log(audioRef)
}

const audioError = (e) => {
    
}

const next = () => {
    
}

</script>

<style scoped lang="scss">
.player {
   
}
</style>
