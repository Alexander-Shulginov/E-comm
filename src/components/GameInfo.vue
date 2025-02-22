<script setup lang="ts">
import { fetchGameById } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import BaseTitle from './base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'
import GameInfoDetails from './GameInfoDetails.vue'

const route = useRoute()

const { data } = useQuery({
    queryKey: ['getGameById', route.params.id],
    queryFn: () => fetchGameById(Number(route.params.id))
})
</script>

<template>
    <div class="gameInfo" v-if="data">
        <div class="gameInfo__wrap">
            <BaseImg :src="data.img" :alt="data.name" class="gameInfo__img" />
            <div>
                <BaseTitle :tag="'h1'" class="gameInfo__name">{{ data.name }}</BaseTitle>
                <GameInfoDetails :info="data" />
            </div>
        </div>

        <div v-html="data.descr"></div>
    </div>
</template>

<style lang="scss" scoped>
.gameInfo {
    &__wrap {
        display: flex;
    }

    &__img {
        width: 30%;
        max-height: 500px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }
}
</style>
