<script setup lang="ts">
import { computed } from 'vue'
import { fetchGameById, fetchGameSeries, fetchScreenShootsById } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import BaseTitle from './base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'
import GameInfoDetails from './GameInfoDetails.vue'
import BtnAddToFavorites from './UI/BtnAddToFavorites.vue'
import GameInfoGallery from './GameInfoGallery.vue'
import GameInfoSeries from './GameInfoSeries.vue'

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

const { data: series } = useQuery({
    queryKey: ['getGameSeries', gameId.value],
    queryFn: () => fetchGameSeries(gameId.value)
})
</script>

<template>
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

        <GameInfoGallery :data="game" :screens="screens" />

        <div style="margin-bottom: 50px" v-html="game.descr"></div>

        <GameInfoSeries :data="series" />
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
}
</style>
