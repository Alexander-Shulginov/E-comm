<script setup lang="ts">
import { IListGames } from '@/types/interfaces/IGames'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'

defineProps<{
    data: IListGames | undefined
    title: string
}>()
</script>

<template>
    <section v-if="data?.results.length" class="gameSeries">
        <BaseTitle class="gameSeries__title" :tag="'h2'">{{ title }}</BaseTitle>
        <div class="gameSeries__grid">
            <router-link
                v-for="game in data.results"
                :key="game.id"
                :to="{ name: 'Game', params: { id: game.id } }"
                class="gameSeries__card"
            >
                <div class="gameSeries__img-wrap">
                    <BaseImg
                        :src="game.image"
                        :alt="game.name"
                        :width="280"
                        :height="155"
                        class="gameSeries__img"
                    />
                </div>
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
        @media (any-hover: hover) {
            &:hover {
                .gameSeries__img {
                    transform: scale(1.05);
                }
            }
        }
    }

    &__img-wrap {
        border-radius: 6px;
        margin-bottom: 10px;
        overflow: hidden;
        @media (max-width: 768px) {
            margin-bottom: 6px;
        }
    }

    &__img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
        transition: transform 0.6s ease-in-out;
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
