<template>
    <Teleport to="body">
        <play-drawer />
        <play-list-drawer />
        <player />
    </Teleport>
</template>

<script setup lang="ts">
import Player from '@/business/views/components/player'
import PlayDrawer from '@/business/views/components/play-drawer'
import PlayListDrawer from '@/business/views/components/play-list-drawer'
import {onKeyDown,consoleLog} from '@/business/utils'
import {usePlayerStore} from '@/stores'

defineOptions({
    name: 'CustomTeleport',
    inheritAttrs: false
})

const playerStore = usePlayerStore()
onKeyDown(' ', (e) => {
    consoleLog('Space key press', e)
    playerStore.togglePlay()
}, { dedupe: true })
</script>

<style scoped lang="scss">
.custom-teleport {

}
</style>
