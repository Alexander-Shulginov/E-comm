<script setup lang="ts">
import CardProduct from '@/components/cards/CardProduct.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import ListGamesError from '@/components/ListGamesError.vue'
import { IListGames } from '@/types/interfaces/IGames'

defineProps<{
    isFetching: boolean
    games: IListGames | undefined
    layout: string
}>()
</script>

<template>
    <BaseLoader v-if="isFetching" />
    <ListGamesError v-else-if="games?.count === 0" />
    <div v-else class="grid-card" :class="layout">
        <CardProduct
            v-for="game in games?.results"
            :key="game.id"
            :game="game"
            :to="{ name: 'Game', params: { id: game.id } }"
        />
    </div>
</template>

<style lang="scss">
.grid-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.grid-card.layout-row {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .productCard {
        display: flex;
        align-items: center;
        gap: 24px;
        border-radius: 4px;
        padding-right: 16px;

        @media (max-width: 768px) {
            gap: 12px;
        }

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-dark-second);
            }
        }

        &__picture {
            margin-bottom: unset;
            flex-shrink: 0;
        }

        &__img {
            width: 180px;
            aspect-ratio: 16 / 9;
            border-radius: 4px;

            @media (max-width: 768px) {
                width: 80px;
            }
        }

        &__rating--row {
            display: flex;
        }

        &__rating--column {
            display: none;
        }

        &__name {
            font-size: 20px;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }
    }
}
</style>
