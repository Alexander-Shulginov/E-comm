<script setup lang="ts">
import ListGamesTop from '@/components/ListGamesTop.vue'
</script>

<template>
    <div class="listGames">
        <div class="listGames__top">
            <ListGamesTop />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.listGames {
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
