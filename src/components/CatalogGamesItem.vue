<script setup lang="ts">
import GamesColumn from '@/components/GamesColumn.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import { IListGames } from '@/types/interfaces/IGames'

defineProps<{
    games: IListGames | undefined
    title: string
    loading: boolean
}>()
</script>

<template>
    <div class="catalogGames__item">
        <BaseTitle :tag="'h2'" class="catalogGames__title">{{ title }}</BaseTitle>
        <GamesColumn :games="games?.results" :loading="loading" />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    &__title {
        margin-bottom: 20px;
        font-size: 18px;
    }

    &__item {
        height: 100%;
        overflow: hidden;
    }
}
</style>
