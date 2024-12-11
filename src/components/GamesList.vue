<script setup lang="ts">
import { onMounted } from 'vue'
import { useGameStore } from '../store/gameStore'
import GameCard from './GameCard.vue'
const store = useGameStore()
onMounted(async () => {
    await store.fetchAllGames()
})
</script>

<template>
    <div v-for="game in store.gameList" :key="game.id" style="margin-bottom: 20px">
        <v-skeleton-loader
            v-if="store.isLoading"
            :loading="store.isLoading"
            type="image, list-item-two-line"
        />
        <RouterLink :to="{ name: 'Game', params: { id: game.id } }">
            <GameCard
                :id="game.id"
                :title="game.title"
                :img="game.thumbnail"
                :genre="game.genre"
                :published="game.publisher"
                :descr="game.short_description"
                :release="game.release_date"
            />
        </RouterLink>
    </div>
</template>
