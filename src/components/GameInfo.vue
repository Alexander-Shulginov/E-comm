<script setup lang="ts">
import { computed } from 'vue'
import {
    fetchGameById,
    fetchGameSeries,
    fetchScreenShootsById,
    fetchStoreNames,
    fetchStores
} from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import BaseTitle from './base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'
import GameInfoDetails from './GameInfoDetails.vue'
import BtnAddToFavorites from './UI/BtnAddToFavorites.vue'

const route = useRoute()
const gameId = computed(() => Number(route.params.id))

const { data: game, isError } = useQuery({
    queryKey: ['getGameById', gameId.value],
    queryFn: () => fetchGameById(gameId.value)
})

const { data: screens } = useQuery({
    queryKey: ['getScreenShots', gameId.value],
    queryFn: () => fetchScreenShootsById(gameId.value)
})

const { data: similar } = useQuery({
    queryKey: ['getGameSeries', gameId.value],
    queryFn: () => fetchGameSeries(gameId.value)
})

const { data: stores } = useQuery({
    queryKey: ['getStores', gameId.value],
    queryFn: () => fetchStores(gameId.value)
})

const { data: storesName } = useQuery({
    queryKey: ['getStoresName', gameId.value],
    queryFn: () => fetchStoreNames(3)
})

console.log(storesName.value)
</script>

<template>
    {{ stores }}
    {{ storesName }}
    <div class="gameInfo" v-if="game">
        <div class="gameInfo__wrap">
            <BaseImg :src="game.img" :alt="game.name" class="gameInfo__img" />
            <div>
                <div class="gameInfo__top">
                    <BaseTitle :tag="'h1'" class="gameInfo__name">{{ game.name }}</BaseTitle>
                    <BtnAddToFavorites :width="24" :height="24" class="gameInfo__favorites" />
                </div>
                <GameInfoDetails :info="game" />
            </div>
        </div>

        <div v-html="game.descr"></div>
        <div class="gameInfo__gallery">
            <img
                v-for="screen in screens"
                :key="screen.id"
                :width="screen.width"
                :height="screen.height"
                :src="screen.img"
                :alt="game?.name"
            />
        </div>
        <div
            style="
                margin-top: 150px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 18px;
            "
        >
            <div v-for="game in similar" :key="game.id">
                {{ game.name }}
                <img
                    style="width: 200px; height: 200px; object-fit: cover"
                    :src="game.background_image"
                    alt=""
                />
            </div>
        </div>
    </div>
    <div v-else-if="isError">ERROR</div>
</template>

<style lang="scss" scoped>
.gameInfo {
    &__wrap {
        display: flex;
        gap: 24px;
        margin-bottom: 36px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }

    &__favorites {
        width: 56px;
        height: 56px;
        border-radius: 6px;
    }

    &__img {
        width: 30%;
        max-height: 500px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 10px;
    }

    &__gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 18px;
    }
}
</style>
