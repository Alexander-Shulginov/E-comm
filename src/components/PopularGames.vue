<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularGamesCarousel from './PopularGamesCarousel.vue'
import BaseTitle from './UI/BaseTitle.vue'

const { isPending, data } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames('/games', { page_size: 12, page: 1 })
})
</script>

<template>
    <section class="popularGames">
        <BaseTitle :tag="'h2'" :is-bold="true" class="popularGames__title"> Most Popular</BaseTitle>
        <PopularGamesCarousel :data="data" :is-pending="isPending" />
    </section>
</template>

<style lang="scss" scoped>
.popularGames {
    margin-bottom: 68px;

    &__title {
        margin-bottom: 28px;
    }
}
</style>
