<script setup lang="ts">
import GamesColumn from '@/components/GamesColumn.vue'
import BaseTitle from './UI/BaseTitle.vue'
import { Game } from '@/types/models/Game'
defineProps<{
    games: Game[] | undefined
    title: string
    loading: boolean
}>()
</script>

<template>
    <div class="catalogGames__item">
        <BaseTitle :tag="'h3'" class="catalogGames__title">{{ title }}</BaseTitle>
        <GamesColumn :games="games" :loading="loading" />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    &__title {
        margin-bottom: 20px;
    }
}
</style>
