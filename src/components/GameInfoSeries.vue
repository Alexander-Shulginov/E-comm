<script setup lang="ts">
import { IListGames } from '@/types/interfaces/IGames'
import BaseTitle from '@/components/base/BaseTitle.vue'

defineProps<{
    data: IListGames | undefined
    title: string
}>()
</script>

<template>
    <section v-if="data" class="gameSeries">
        <BaseTitle class="gameSeries__title" :tag="'h2'">{{ title }}</BaseTitle>
        <div class="gameSeries__grid">
            <router-link
                v-for="game in data.results"
                :key="game.id"
                :to="{ name: 'Game', params: { id: game.id } }"
                class="gameSeries__card"
            >
                <img
                    :src="game.image"
                    :alt="game.name"
                    class="gameSeries__img"
                    width="280"
                    height="155"
                />
                <p class="gameSeries__name">{{ game.name }}</p>
            </router-link>
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

    &__card {
        max-height: 250px;
    }

    &__img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
        margin-bottom: 10px;
        height: auto;
        border-radius: 6px;

        @media (max-width: 768px) {
            margin-bottom: 6px;
        }
    }

    &__name {
        font-weight: 700;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
}
</style>
