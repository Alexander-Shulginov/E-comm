<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularCategoryNav from '@/components/PopularCategoryNav.vue'
import PopularCategoryCarousel from '@/components/PopularCategoryCarousel.vue'
import { computed, ref } from 'vue'

const genre = ref<string>('racing')

const { data, isPending } = useQuery({
    queryKey: computed(() => ['getGamesByCategory', genre.value]),

    queryFn: () => fetchGames({ page_size: 8, page: 1, genres: genre.value })
})

const getClickedCategory = (slug: string) => {
    genre.value = slug
}
</script>

<template>
    <div class="popularCategory">
        <PopularCategoryNav v-on:get-slug-active-item="getClickedCategory" />
        <PopularCategoryCarousel :data="data" :is-loading="isPending" />
    </div>
</template>

<style lang="scss" scoped>
.popularCategory {
    display: flex;
    margin-bottom: 86px;
    gap: 18px;

    @media (max-width: 1024px){
        margin-bottom: 60px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
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
