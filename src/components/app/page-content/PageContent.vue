<template>
    <RouterView>
        <template #default="{ Component, route }">
            <!-- <keep-alive v-if="false">
						<component :is="Component" :key="route.fullPath" />
					</keep-alive> -->

                <!-- {{ route }} -->
                <component :is="Component" />
        </template>
    </RouterView>
</template>
<script setup lang="ts">

defineOptions({
    name: 'm-page-content'
})
</script>

<style scoped lang="scss"></style>
