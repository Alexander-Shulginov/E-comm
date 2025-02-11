<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularCategoryNav from '@/components/PopularCategoryNav.vue'
import PopularCategoryCarousel from '@/components/PopularCategoryCarousel.vue'

const { data } = useQuery({
    queryKey: ['getGamesByCategory'],
    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, genres: 'strategy' })
})
</script>

<template>
    <div class="popularCategory">
        <PopularCategoryNav />
        <PopularCategoryCarousel :data="data" />
    </div>
</template>

<style lang="scss" scoped>
.popularCategory {
    display: flex;
    margin-bottom: 68px;
    gap: 18px;

    @media (max-width: 768px){
        flex-direction: column;
    }
}
</style>
