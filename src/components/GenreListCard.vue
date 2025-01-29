<script setup lang="ts">
defineProps<{
    genreName: string
    genreImg: string
}>()
</script>

<template>
    <a class="genreCard" href="#">
        <h3 class="genreCard__title">{{ genreName }}</h3>
        <img class="genreCard__img" width="440" height="260" :src="genreImg" :alt="genreName" />
    </a>
</template>

<style lang="scss" scoped>
.genreCard {
    display: block;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    @media (any-hover: hover) {
        &:hover {
            .genreCard__img {
                transform: scale(1.05);
            }
        }
    }

    &::after {
        content: '';
        pointer-events: none;

        position: absolute;
        top: 0;
        right: -1px;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 9) 0%, rgba(0, 0, 0, 0) 50%);
        width: 100%;
    }

    &__title {
        position: absolute;
        bottom: 16px;
        left: 16px;

        z-index: 2;

        font-size: 24px;
        transition: color 0.3s ease-in-out;
    }

    &__img {
        object-fit: cover;
        width: 100%;
        transition: transform 0.8s ease-in-out;
    }
}
</style>
