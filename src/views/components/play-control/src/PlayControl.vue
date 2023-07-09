<template>
   <div class="play-control">
        <!-- 上一曲 !-->
        <step-backward-filled class="last"/>
        <!-- 播放/暂停 !-->
        <div>
            <template v-if="showPlayIcon">
                <play-circle-filled class="play" @click="onPlay"/>
            </template>
            <template v-else>
                <pause-circle-filled class="play" @click="onPause"/>
            </template>
        </div>
        
        <!-- 下一曲 !-->
        <step-forward-filled class="next"/>
        <b-voice-control />
    </div>
</template>

<script setup lang="ts">
import BVoiceControl from '@/views/components/voice-control'
import {playControlProps, type PlayControlProps} from './props'
import { computed, reactive } from 'vue';

defineOptions({
    name: 'play-control'
});

const props = defineProps(playControlProps())
const data = reactive<PlayControlProps>({
    playStatus: props.playStatus
})

const showPlayIcon = computed(() => {
    return !data.playStatus
})

const onPlay = () => {
    data.playStatus = true
}

const onPause = () => {
    data.playStatus = false
}
</script>

<style scoped lang="scss">
.play-control {
    font-size: 28px;
    height: 100%;
    background-color: #EBEAEB;

    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    .last {
        @include icon-hover;
    }

    .play {
        @include icon-hover;
    }
    .next {
        @include icon-hover;
    }
}
</style>
