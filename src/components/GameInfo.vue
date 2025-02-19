<script setup lang="ts">
import { fetchGameById } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import BaseTitle from './base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'

const route = useRoute()

const { data } = useQuery({
    queryKey: ['getGameById', route.params.id],
    queryFn: () => fetchGameById(Number(route.params.id))
})
</script>

<template>
    <div class="gameInfo" v-if="data">
        <div class="gameInfo__top">
            <BaseImg :src="data.img" :alt="data.name" class="gameInfo__img" />
            <BaseTitle :tag="'h1'" class="gameInfo__name">{{ data.name }}</BaseTitle>
        </div>
        <div v-html="data.descr"></div>
        {{ data }}
    </div>
</template>

<style lang="scss" scoped>
.gameInfo{
    &__top {
        display: flex;
    }

    &__img {
        width: 50%;
    }
}
</style>
