<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import ListGamesTop from '@/components/ListGamesTop.vue'
import CardProduct from '@/components/cards/CardProduct.vue'
import { useRoute } from 'vue-router'
import BaseLoader from './base/BaseLoader.vue'
import { router } from '@/router/router'
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import SearchField from './SearchField.vue'
import ListGamesError from './ListGamesError.vue'
import ListGamesResults from './ListGamesResults.vue'
import TheFiltersReset from '@/layouts/TheFilters/TheFiltersReset.vue'

const route = useRoute()

const {
    data: games,
    refetch,
    isFetching
} = useQuery({
    queryKey: ['getGames', route.query],
    queryFn: () => fetchGames({ page_size: 20, page: 1, ...route.query }),
    staleTime: 1000 * 60 * 5
})

const selectedRadio = ref('')

let currentPage = ref(1)
watch(
    () => route.query,
    () => refetch()
)

watch(
    () => currentPage.value,
    () => {
        router.replace({ query: { ...route.query, page: currentPage.value } })
    }
)
const page = computed(() => Number(route.query.page) || 1)

const increasePage = () => {
    if (games.value?.next) {
        updateUrlQuery(router, {
            page: page.value + 1
        })
    }
}

const decreasePage = () => {
    if (games.value?.prev) {
        updateUrlQuery(router, {
            page: page.value - 1
        })
    }
}
</script>

<template>
    <div class="listGames">
        <div class="listGames__search">
            <SearchField />
        </div>
        <div class="listGames__top">
            <ListGamesTop v-model="selectedRadio" />
        </div>
        <div v-if="games?.count" class="listGames__results">
            <ListGamesResults :results="games?.count" />
            <TheFiltersReset />
        </div>
        <div class="listGames__content">
            <BaseLoader v-if="isFetching" />
            <ListGamesError v-else-if="games?.count === 0" />
            <div v-else class="listGames__grid" :class="selectedRadio">
                <CardProduct
                    v-for="game in games?.results"
                    :key="game.id"
                    :game="game"
                    :to="{ name: 'Game', params: { id: game.id } }"
                />
            </div>
        </div>

        <div v-if="games?.count" class="listGames__pagination">
            <div class="gamesNav">
                <button
                    :disabled="games?.prev === null"
                    @click="decreasePage"
                    class="gamesNav__btn"
                    type="button"
                >
                    Prev
                </button>
                <button
                    :disabled="games?.next === null"
                    @click="increasePage"
                    class="gamesNav__btn"
                    type="button"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.gamesNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    &__btn {
        color: var(--color-light);
        flex-grow: 2;
        font-size: 16px;
        background-color: var(--color-dark-second);
        padding: 14px;
        border-radius: 6px;
        cursor: pointer;
    }

    &__btn:disabled {
        cursor: not-allowed;
        opacity: 0.8;
    }
}
.listGames {
    &__search {
        margin-bottom: 28px;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
    }

    &__results {
        margin-bottom: 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__content {
        margin-bottom: 48px;
        position: relative;
        // min-height: 100vh;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
    }
}

.layout-row.listGames__grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.layout-row.listGames__grid {
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
