<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularCategoryNav from '@/components/PopularCategoryNav.vue'
import PopularCategoryCarousel from '@/components/PopularCategoryCarousel.vue'
import { computed, ref } from 'vue'

const genre = ref<string>('racing')

const { data } = useQuery({
    queryKey: computed(() => ['getGamesByCategory', genre.value]),

    queryFn: () => fetchGames('/games', { page_size: 8, page: 1, genres: genre.value })
})

const getClickedCategory = (slug: string) => {
    genre.value = slug
}
</script>

<template>
    <div class="popularCategory">
        <PopularCategoryNav v-on:get-slug-active-item="getClickedCategory" />
        <PopularCategoryCarousel :data="data" />
    </div>
</template>

<style lang="scss" scoped>
.popularCategory {
    display: flex;
    margin-bottom: 68px;
    gap: 18px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
}
</style>
<!-- Action
Indie
Adventure
RPG
Strategy
Shooter
Casual
Simulation
Puzzle -->
