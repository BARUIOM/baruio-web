<script lang="ts" setup>
import MainHeader from "@/app/MainHeader.vue";
import PlayerControls from "@/app/PlayerControls.vue";
</script>

<template>
    <div class="main">
        <div class="header">
            <MainHeader />
        </div>
        <div class="content">
            <RouterView />
        </div>
        <div class="footer">
            <PlayerControls />
        </div>
    </div>
</template>

<style lang="pcss" scoped>
div.main {
    @apply w-full h-full;
    @apply p-2 space-y-2;
    @apply flex flex-col;

    > div {
        @apply rounded-2xl;
        @apply bg-[#121212];
    }

    > div.header {
        @apply h-16 min-h-[64px];
    }

    > div.content {
        @apply flex flex-col;
        @apply overflow-y-auto;
    }

    > div.footer {
        @apply h-20 min-h-[80px];
    }
}
</style>
