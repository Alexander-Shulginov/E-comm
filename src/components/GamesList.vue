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
    <v-row style="max-width: 1100px;">
        <v-col
            v-for="n in 12"
            :key="n"
            v-if="store.isLoading"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
        >
            <v-skeleton-loader
                v-if="store.isLoading"
                :loading="store.isLoading"
                type="image, list-item-two-line"
            />
        </v-col>
        <v-col
            v-for="game in store.gameList"
            :key="game.id"
            cols="12"
        >
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
        </v-col>
    </v-row>
</template>
