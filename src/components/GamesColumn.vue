<script setup lang="ts">
import CardRating from '@/components/cards/CardRating.vue'
import { Game } from '@/types/models/Game'
defineProps<{
    games: Game[] | undefined
}>()
</script>

<template>
    <div class="gamesColumn">
        <CardRating v-for="game in games" :key="game.id" :game="game" />
    </div>
</template>

<style lang="scss" scoped>
.gamesColumn {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 16px;
    background-color: var(--color-dark-second);
}
</style>
