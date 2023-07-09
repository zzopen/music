<template>
    <div class="lyrics-content">
        <ul style="border: 1px solid red;">
            <li v-for="(item) in lyricsList" class="item">
                <p v-html="item.content"></p>
                    <template v-if="false && item.translation">
                    <p v-html="item.translation"></p>
                </template>
            </li>    
        </ul>
    </div>
</template>

<script setup lang="ts">
import AvidLrc from '@/assets/songs/Avid.lrc?raw'
import {lyricsSplit} from '@/views/business'

defineOptions({
    name: 'b-lyrics-conetnt'
});

const lyricsList = lyricsSplit(AvidLrc)

</script>

<style scoped lang="scss">
.lyrics-content {
    text-align: left;
    overflow: scroll;
    height: 350px;
    width: 100%;
    transition: all .4s;
    ul li {
        list-style: none;
    }

    .item {
        margin: 22px 0;
        min-height: 18px;
        &.active {
            color: $color-primary;
        }
    }
}
</style>
