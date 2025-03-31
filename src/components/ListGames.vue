<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import { useRoute } from 'vue-router'

import SearchField from './SearchField.vue'
import ListGamesTopCardsLayout from '@/components/ListGamesCardsLayout.vue'
import ListGamesResults from '@/components/ListGamesResults.vue'
import ListGamesContent from './ListGamesContent.vue'
import ListGamesNavigation from './ListGamesNavigation.vue'

const route = useRoute()
const selectedRadio = ref('')

const {
    data: games,
    refetch,
    isFetching
} = useQuery({
    queryKey: ['getGames', route.query],
    queryFn: () => fetchGames({ page_size: 20, page: 1, ...route.query }),
    staleTime: 1000 * 60 * 5
})
</script>

<template>
    <div class="listGames">
        <SearchField class="listGames__search" />

        <div class="listGames__top">
            <ListGamesResults :results="games?.count" />
            <ListGamesTopCardsLayout v-model="selectedRadio" />
        </div>

        <div class="listGames__content">
            <ListGamesContent :is-fetching="isFetching" :games="games" :layout="selectedRadio" />
        </div>

        <ListGamesNavigation :games="games" :is-fetching="isFetching" :refetch="refetch" />
    </div>
</template>

<style lang="scss">
.listGames {
    @media (max-width: 1024px) {
        padding-top: 50px;
    }

    &__search {
        margin-bottom: 28px;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 28px;
        gap: 12px;
    }

    &__content {
        margin-bottom: 48px;
        position: relative;
    }
}
</style>
