<script setup lang="ts">
import BaseText from '@/components/base/BaseText.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import { promoGame } from './PromoGame.vue';

defineProps<{
    data: promoGame
}>()
</script>

<template>
    <router-link :to="{ name: 'Game', params: { id: data.item_id } }" class="promoCard">
        <img class="promoCard__img" :src="data.img" alt="Promo img" />
        <div class="promoCard__wrapper">
            <BaseTitle :tag="'h3'" :is-bold="true" class="promoCard__title">{{
                data.title
            }}</BaseTitle>
            <BaseText class="promoCard__descr">
                {{ data.descr }}
            </BaseText>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.promoCard {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    min-height: 300px;

    &::after {
        content: '';
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 80%);
        width: 100%;
        transition: transform 0.8s ease-in-out;
    }

    &__img {
        object-fit: cover;
        object-position: top;
    }

    &__wrapper {
        position: absolute;
        z-index: 2;
        bottom: 6px;
        left: 28px;

        @media (max-width: 1024px) {
            bottom: 20px;
            left: 20px;
        }
    }

    &__title {
        margin-bottom: 4px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    &__descr {
        padding-right: 20%;
        margin-bottom: 20px;
        color: rgba(255, 255, 255, .9);

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        @media (max-width: 768px) {
            padding-right: 18px;
        }
    }
}
</style>
