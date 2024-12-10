<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGameStore } from '../store/gameStore'
import GameCard from './GameCard.vue'
import { useVirtualList } from '@vueuse/core'
const store = useGameStore()
onMounted(async () => {
    await store.fetchAllGames()
})

const data = ref(Array.from(Array(250).keys(), () => 'LJL'))
const { list, containerProps, wrapperProps } = useVirtualList(data, {
    itemHeight: 220
})
</script>

<template>
    <div v-bind="containerProps" style="height: 100%">
        <div v-bind="wrapperProps">
            <div v-for="{ game, index } in list" :key="index" style="height: 220px">
                Row: {{ game }}
                <!-- <GameCard
                    :id="game.id"
                    :title="game.title"
                    :img="game.thumbnail"
                    :genre="game.genre"
                    :published="game.publisher"
                    :descr="game.short_description"
                    :release="game.release_date"
                /> -->
            </div>
        </div>
    </div>
    <!-- <div v-for="game in store.gameList" :key="game.id" style="margin-bottom: 20px">
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
    </div> -->
</template>
