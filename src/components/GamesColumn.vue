<script setup lang="ts">
import CardRating from '@/components/cards/CardRating.vue'
import { Game } from '@/types/models/Game'
defineProps<{
    games: Game[] | undefined
}>()
</script>

<template>
    <CardRating v-for="game in games" :key="game.id" :game="game" />
</template>

<style lang="scss" scoped></style>
