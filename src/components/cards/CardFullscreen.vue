<script setup lang="ts">
import BaseBtn from '../UI/BaseBtn.vue'
interface GameData {
    img: string
    icon: string
    descr: string
    date: string
}
defineProps<{ data: GameData }>()
</script>

<template>
    <div class="cardFull" data-swiper-anim>
        <img class="cardFull__img" :src="data.img" alt="Game wallpaper" fetchpriority="high" />
        <div class="cardFull__wrap">
            <img
                class="cardFull__logo"
                :src="data.icon"
                width="280"
                height="140"
                alt="Game logo"
                data-swiper-anim
            />
            <p class="cardFull__descr" data-swiper-anim>
                {{ data.descr }}
            </p>
            <div class="cardFull__block" data-swiper-anim>
                <BaseBtn :as="'a'" :variant="'accent'">Details</BaseBtn>
                <span class="cardFull__date">Release: {{ data.date }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardFull {
    aspect-ratio: 16 / 9;

    border-radius: 12px;
    overflow: hidden;
    opacity: 0.3;
    transition:
        opacity 1.1s ease-in-out,
        visibility 1.1s ease-in-out;

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
        &::after {
            background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
        }
    }

    &__img {
        object-fit: cover;
        object-position: center top;
    }

    &__wrap {
        max-width: 400px;
        position: absolute;
        left: 36px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;

        @media (max-width: 1024px) {
            max-width: 350px;
            left: 24px;
            right: 24px;
        }

        @media (max-width: 768px) {
            left: 16px;
            right: 16px;
        }
    }

    &__logo {
        max-width: 280px;
        margin-bottom: 18px;
        visibility: hidden;
        opacity: 0;
        transition:
            opacity 1.1s ease-in-out,
            visibility 1.1s ease-in-out;

        @media (max-width: 768px) {
            max-width: 180px;
        }
    }

    &__descr {
        margin-bottom: 24px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 1.5s ease-in-out,
            visibility 1.5s ease-in-out;
    }

    &__block {
        display: flex;
        align-items: center;
        gap: 12px;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 2s ease-in-out,
            visibility 2s ease-in-out;
    }

    &__date {
        font-family: var(--font-second);
    }
}

.swiper-slide-active {
    [data-swiper-anim] {
        opacity: 1;
        visibility: visible;
    }
}

.swiper-slide-active[data-swiper-anim] {
    opacity: 1;
}
</style>
