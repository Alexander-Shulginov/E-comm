<script setup lang="ts">
import BaseText from '@/components/base/BaseText.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import { IPromoGames } from '@/types/interfaces/IPromoGames'
import BaseImg from './base/BaseImg.vue'

defineProps<{
    data: IPromoGames
}>()
</script>

<template>
    <router-link :to="{ name: 'Game', params: { id: data.id } }" class="promoCard">
        <div class="promoCard__img-wrap">
            <BaseImg
                :src="data.img"
                :alt="data.title"
                :width="700"
                :height="390"
                class="promoCard__img"
            />
        </div>
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

    &:focus-visible {
        .promoCard__img {
            transform: scale(1.05);
        }
    }

    @media (any-hover: hover) {
        &:hover {
            .promoCard__img {
                transform: scale(1.05);
            }
        }
    }

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

    &__img-wrap {
        height: 100%;
        overflow: hidden;
    }

    &__img {
        object-fit: cover;
        object-position: top;
        transition: transform 0.6s ease-in-out;
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

        @media (max-width: 768px){
            bottom: 6px;
            left: 12px;
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
        color: rgba(255, 255, 255, 0.9);

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
