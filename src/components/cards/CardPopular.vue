<script setup lang="ts">
import { IGame } from '@/types/interfaces/IGames'
import BaseImg from '../base/BaseImg.vue'

defineProps<{
    data: IGame | undefined
}>()
</script>

<template>
    <router-link :to="{ name: 'Game', params: { id: data.id } }" v-if="data" class="cardPopular">
        <BaseImg
            :src="data.image"
            :alt="data.name"
            :width="215"
            :height="230"
            class="cardPopular__img"
        />
        <p class="cardPopular__name">{{ data.name ? data.name : 'No name' }}</p>
    </router-link>
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

        @media (max-width: 768px) {
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

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
}
</style>
