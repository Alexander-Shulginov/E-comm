<script setup lang="ts">
import GamesColumn from '@/components/GamesColumn.vue'
import BaseTitle from './UI/BaseTitle.vue'
import { Game } from '@/types/models/Game'
defineProps<{
    games: Game[] | undefined
    title: string
}>()
</script>

<template>
    <div class="catalogGames__item">
        <BaseTitle :tag="'h3'">{{ title }}</BaseTitle>
        <GamesColumn :games="games" />
    </div>
</template>

<style lang="scss" scoped></style>
