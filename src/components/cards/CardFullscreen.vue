<script setup lang="ts">
import BaseBtn from '../UI/buttons/BaseBtn.vue'

defineProps<{
    data: any
}>()
</script>

<template>
    <div class="cardFull">
        <img class="cardFull__img" :src="data.img" alt="Game wallpaper" fetchpriority="high" />
        <div class="cardFull__wrap">
            <div class="cardFull__logo">
                <component :is="data.icon"></component>
            </div>
            <p class="cardFull__descr">
                {{ data.descr }}
            </p>
            <div class="cardFull__block">
                <BaseBtn :as="'a'" :variant="'accent'">Details</BaseBtn>
                <span class="cardFull__date">Release date: {{ data.date }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardFull {
    aspect-ratio: 16 / 9;

    border-radius: 12px;
    overflow: hidden;

    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        pointer-events: none;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%);
    }

    @media (max-width: 768px) {
        aspect-ratio: 3 / 4;
        max-height: 660px;
    }

    &__img {
        object-fit: cover;
        object-position: center top;
    }

    &__wrap {
        max-width: 350px;
        position: absolute;
        left: 36px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;

        @media (max-width: 768px) {
            left: 16px;
            right: 16px;
        }
    }

    &__logo {
        margin-bottom: 18px;
        opacity: 0;
        transition: all 1.1s ease-in-out;
    }

    &__descr {
        margin-bottom: 24px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    &__block {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__date {
        font-family: var(--font-second);
    }
}

.swiper-slide-active {
    .cardFull__logo {
        opacity: 1;
    }
}
</style>
