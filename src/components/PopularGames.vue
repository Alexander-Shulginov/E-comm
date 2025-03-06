<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularGamesCarousel from '@/components/PopularGamesCarousel.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseLink from '@/components/UI/BaseLink.vue'

const { isPending, data } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames({ page_size: 12, page: 1 }),
    staleTime: 1000 * 60 * 5
})
</script>

<template>
    <section class="popularGames">
        <div class="popularGames__top">
            <BaseTitle :tag="'h2'" :is-bold="true" class="popularGames__title">
                Most Popular</BaseTitle
            >
            <BaseLink :to="{ name: 'Games' }" :text="'View all'" :size="'compact'" />
        </div>
        <PopularGamesCarousel :data="data" :is-pending="isPending" />
    </section>
</template>

<style lang="scss" scoped>
.popularGames {
    margin-bottom: 80px;
    @media (max-width: 1024px) {
        margin-bottom: 50px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }

    &__top {
        margin-bottom: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
