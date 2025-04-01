<script setup lang="ts">
import { IListGames } from '@/types/interfaces/IGames'
import BaseTitle from '@/components/base/BaseTitle.vue'
import GameInfoCard from './GameInfoCard.vue'

defineProps<{
    data: IListGames | undefined
    title: string
}>()
</script>

<template>
    <section v-if="data?.results.length" class="gameSeries">
        <BaseTitle class="gameSeries__title" :tag="'h2'">{{ title }}</BaseTitle>
        <div class="gameSeries__grid">
            <GameInfoCard v-for="game in data.results" :key="game.id" :data="game" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.gameSeries {
    margin-bottom: 50px;

    &__title {
        margin-bottom: 30px;

        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 26px;
        column-gap: 16px;
        width: 100%;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 16px;
            column-gap: 8px;
        }
    }
}
</style>
