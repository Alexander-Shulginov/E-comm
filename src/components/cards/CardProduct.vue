<script setup lang="ts">
import { IGame } from '@/types/interfaces/IGames'
import CardBaseRating from '@/components/cards/CardBaseRating.vue'
defineProps<{
    game: IGame
    to?: any
}>()
</script>

<template>
    <router-link :to="to" class="productCard">
        <div class="productCard__picture">
            <img
                :src="game.image"
                :alt="game.name"
                class="productCard__img"
                width="250"
                height="360"
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
    &__img {
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 6px;
    }

    &__picture {
        margin-bottom: 12px;
        position: relative;
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
