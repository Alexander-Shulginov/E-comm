<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'

defineProps<{
    data: {
        id: number
        name: string
        img: string
        slug: string
    }
}>()
</script>

<template>
    <router-link :to="{ name: 'Games', query: { genres: data.id } }" class="cardGenres">
        <BaseImg
            class="cardGenres__img"
            :src="data.img"
            :alt="`Link to ${data.name}`"
            :width="340"
            :height="190"
        />
        <p class="cardGenres__name">{{ data.name }}</p>
    </router-link>
</template>

<style lang="scss" scoped>
.cardGenres {
    display: block;
    position: relative;

    border-radius: 10px;
    overflow: hidden;

    &:focus-visible {
        .cardGenres__img {
            transform: scale(1.05);
        }
    }

    @media (any-hover: hover) {
        &:hover {
            .cardGenres__img {
                transform: scale(1.05);
            }
        }
    }

    @media (max-width: 768px) {
        border-radius: 4px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.3);
    }

    &__img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        transition: transform 0.6s ease-in-out;
    }

    &__name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;

        text-align: center;
        line-height: 1.1;
        font-size: 34px;
        font-weight: 700;

        @media (max-width: 1024px) {
            font-size: 28px;
        }

        @media (max-width: 768px) {
            font-size: 22px;
        }

        @media (max-width: 460px) {
            font-size: 16px;
        }
    }
}
</style>
