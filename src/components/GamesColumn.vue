<script setup lang="ts">
import CardRating from '@/components/cards/CardRating.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import { IGame } from '@/types/interfaces/IGames'

defineProps<{
    games: IGame[] | undefined
    loading: boolean
}>()
</script>

<template>
    <div class="gamesColumn">
        <BaseLoader v-if="loading" />
        <CardRating v-for="game in games" :key="game.id" :game="game" class="gamesColumn__item" />
    </div>
</template>

<style lang="scss" scoped>
.gamesColumn {
    position: relative;

    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 16px;
    background-color: var(--color-dark-second);

    &__item {
        transition: color .2s ease-in-out;

        @media (any-hover:hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }
}
</style>
