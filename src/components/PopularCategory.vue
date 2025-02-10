<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import PopularCategoryNav from '@/components/PopularCategoryNav.vue'

const { isPending, data } = useQuery({
    queryKey: ['getGamesByCategory'],
    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, genres: 'strategy' })
})
</script>

<template>
    <div class="popularCategory">
        <PopularCategoryNav />

        <div class="popularCategory__games" v-if="data">
            <div v-for="game in data">
                <img :src="game.image" :alt="game.name" />
                <p>{{ game.name }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popularCategory {
    display: flex;
    margin-bottom: 68px;
    gap: 18px;

    &__games {
        display: flex;
        gap: 12px;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        img {
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 12px;
        }

        p {
            font-weight: 700;
            font-size: 18px;
            overflow: hidden;
            display: -webkit-box;

            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }
}
</style>
