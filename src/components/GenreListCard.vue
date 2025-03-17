<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'

defineProps<{
    genreId: number
    genreName: string
    genreImg: string
    genreSlug: string
}>()
</script>

<template>
    <router-link :to="{ name: 'Games', query: { genres: genreId } }" class="genreCard">
        <BaseTitle :tag="'h3'" :is-bold="true" :class="'genreCard__title'">{{
            genreName
        }}</BaseTitle>
        <img class="genreCard__img" width="440" height="260" :src="genreImg" :alt="genreName" />
    </router-link>
</template>

<style lang="scss" scoped>
.genreCard {
    display: block;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    @media (any-hover: hover) {
        &:hover {
            .genreCard__img,
            &::after {
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

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%);
        width: 100%;
        transition: transform 0.8s ease-in-out;
    }

    &__title {
        position: absolute;
        bottom: 16px;
        left: 16px;

        z-index: 2;

        font-size: 24px;
        transition: color 0.3s ease-in-out;

        @media (max-width: 768px) {
            bottom: 12px;
            left: 12px;
        }
    }

    &__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.8s ease-in-out;
    }
}
</style>
