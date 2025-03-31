<script setup lang="ts">
import { IGame } from '@/types/interfaces/IGames'
import CardBaseRating from '@/components/cards/CardBaseRating.vue'
import BaseImg from '../base/BaseImg.vue'
defineProps<{
    game: IGame
    to?: any
}>()
</script>

<template>
    <router-link :to="to" class="productCard">
        <div class="productCard__picture">
            <BaseImg
                :src="game.image"
                :alt="game.name"
                :width="250"
                :height="360"
                class="productCard__img"
            />
            <CardBaseRating
                :rating="game.rating"
                class="productCard__rating productCard__rating--column"
            />
        </div>
        <p class="productCard__name">
            {{ game.name }}
        </p>
        <CardBaseRating
            :rating="game.rating"
            class="productCard__rating productCard__rating--row"
        />
    </router-link>
</template>

<style lang="scss" scoped>
.productCard {
    @media (any-hover: hover) {
        &:hover {
            .productCard__img {
                transform: scale(1.05);
            }
        }
    }
    &__img {
        aspect-ratio: 3 / 4;
        object-fit: cover;
        transition: transform .6s  ease-in-out;
    }

    &__picture {
        border-radius: 6px;
        margin-bottom: 12px;
        position: relative;
        overflow: hidden;
        &::after {
            content: '';
            pointer-events: none;

            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%);
            width: 100%;
            transition: transform 0.8s ease-in-out;
        }
    }

    &__rating {
        position: absolute;
        bottom: 6px;
        right: 6px;
        z-index: 2;
    }

    &__rating--row {
        position: static;
        display: none;
    }

    &__name {
        font-weight: 700;

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
}
</style>
