<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'

defineProps<{
    data: {
        id: number
        name: string
        image: string
        rating: number
        platforms: {
            id: number
            name: string
        }[]
    }
}>()
</script>

<template>
    <router-link v-if="data" :to="{ name: 'Game', params: { id: data.id } }" class="gameSeriesCard">
        <div class="gameSeriesCard__img-wrap">
            <BaseImg
                :src="data.image"
                :alt="data.name"
                :width="280"
                :height="155"
                class="gameSeriesCard__img"
            />
        </div>
        <p class="gameSeriesCard__name">{{ data.name }}</p>
    </router-link>
</template>

<style lang="scss" scoped>
.gameSeriesCard {
    max-height: 250px;
    &:focus-visible {
        .gameSeriesCard__img {
            transform: scale(1.05);
        }
    }

    @media (any-hover: hover) {
        &:hover {
            .gameSeriesCard__img {
                transform: scale(1.05);
            }
        }
    }

    &__img-wrap {
        border-radius: 6px;
        margin-bottom: 10px;
        overflow: hidden;
        @media (max-width: 768px) {
            margin-bottom: 6px;
        }
    }

    &__img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
        transition: transform 0.6s ease-in-out;
    }

    &__name {
        font-weight: 700;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
}
</style>
