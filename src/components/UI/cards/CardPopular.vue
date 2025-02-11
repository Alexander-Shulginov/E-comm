<script setup lang="ts">
import { Game } from '@/types/models/Game'

defineProps<{
    data: Game | undefined
}>()
</script>

<template>
    <div v-if="data" class="cardPopular">
        <img class="cardPopular__img" :src="data.image" :alt="data.name" width="215" height="270" />
        <p class="cardPopular__name">{{ data.name ? data.name : 'No name' }}</p>
    </div>
</template>

<style lang="scss" scoped>
.cardPopular {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__img {
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 12px;

        @media (max-width: 768px){
            aspect-ratio: 16 / 9;
        }
    }

    &__name {
        font-weight: 700;
        font-size: 18px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;

        @media (max-width: 768px){
            font-size: 14px;
        }
    }
}
</style>
