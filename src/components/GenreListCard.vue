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

    &::after {
        content: '';
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
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
    }

    &__img {
        object-fit: cover;
        width: 100%;
    }
}
</style>
