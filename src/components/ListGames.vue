<script setup lang="ts">
import { ref } from 'vue'

import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import ListGamesTop from '@/components/ListGamesTop.vue'
import CardProduct from '@/components/cards/CardProduct.vue'
import BasePagination from './UI/BasePagination.vue'

const { data: game } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames({ page_size: 20, page: 1 }),
    staleTime: 1000 * 60 * 5
})

const selectedRadio = ref('')
</script>

<template>
    <div class="listGames">
        <div class="listGames__top">
            <ListGamesTop v-model="selectedRadio" />
        </div>
        <div class="listGames__content" :class="selectedRadio">
            <CardProduct
                v-for="game in game"
                :key="game.id"
                :game="game"
                :to="{ name: 'Game', params: { id: game.id } }"
            />
        </div>

        <div class="listGames__pagination">
            <BasePagination />
        </div>
    </div>
</template>

<style lang="scss">
.listGames {
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 26px;
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
        margin-bottom: 36px;
    }

    &__pagination {
        margin-bottom: 36px;
    }
}

.layout-row.listGames__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.layout-row.listGames__content {
    .productCard {
        display: flex;
        align-items: center;
        gap: 24px;
        border-radius: 4px;
        padding-right: 16px;

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
            max-width: 180px;
            aspect-ratio: 16 / 9;
            border-radius: 4px;
        }

        &__rating--row {
            display: flex;
        }

        &__rating--column {
            display: none;
        }

        &__name {
            font-size: 20px;
        }
    }
}
</style>
