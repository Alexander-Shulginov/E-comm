<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import CardBase from './UI/cards/CardBase.vue'
import { fetchGames } from '../services/gamesService'

const { isPending, isError, data, error } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames('/games', { page_size: 6, page: 1 })
})

setTimeout(() => {
    console.log(data.value)
}, 500)
</script>

<template>
    <section class="popularGames">
        <ul class="popularGames__list" v-if="data">
            <li v-for="game in data.results">
                <CardBase
                    :loading="isPending"
                    :name="game.name"
                    :img="game.background_image"
                    :rating="game.rating"
                    :platforms="game.parent_platforms"
                />
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.popularGames {
    margin-bottom: 48px;
    &__list {
        display: flex;
        gap: 16px;
        align-items: center;
    }
}
</style>
