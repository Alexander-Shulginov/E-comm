<script setup lang="ts">
import ListGamesTop from '@/components/ListGamesTop.vue'
import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'
import CardBase from './cards/CardBase.vue'

const { data: game } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames({ page_size: 20, page: 1 }),
    staleTime: 1000 * 60 * 5
})
</script>

<template>
    <div class="listGames">
        <div class="listGames__top">
            <ListGamesTop />
        </div>
        <div class="listGames__content">
            <CardBase
                v-for="game in game"
                :key="game.id"
                :game="game"
                :to="{ name: 'Game', params: { id: game.id } }"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    }
}
</style>
