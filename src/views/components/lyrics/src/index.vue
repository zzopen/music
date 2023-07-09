<template>
    <div class="lyrics">
        <!--歌名-->
        <div>
           <div>修炼爱情</div>
           <div>品质选择</div>
            <div>MV图标（有资源可以播放）</div>
        </div>
        <!--歌手信息-->
        <div>
            <div>歌手：林俊杰</div>
            <div>专辑: 印尼而在</div>
            <div>歌曲详情</div>
        </div>
        <!---歌词部分-->
        <b-lyrics-content />
    </div>
</template>

<script setup lang="ts">
import BLyricsContent from './LyricsContent.vue'


defineOptions({
    name: 'b-lyrics'
});

</script>

<style scoped lang="scss">
.lyrics {
   font-size: 16px;
}
</style>
