<script setup lang="ts">
import GamesColumn from '@/components/GamesColumn.vue'
import BaseTitle from './base/BaseTitle.vue'
import { Game } from '@/types/models/GamesModel'
defineProps<{
    games: Game[] | undefined
    title: string
    loading: boolean
}>()
</script>

<template>
    <div class="catalogGames__item">
        <BaseTitle :tag="'h2'" class="catalogGames__title">{{ title }}</BaseTitle>
        <GamesColumn :games="games" :loading="loading" />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    &__title {
        margin-bottom: 20px;
        font-size: 18px;
    }

    &__item {
        height: 100%;
        overflow: hidden;
    }
}
</style>
