<script setup lang="ts">
import AllGenresList from './AllGenresList.vue'
import BaseTitle from './base/BaseTitle.vue'
import GamePromo from './GamePromo.vue'
</script>

<template>
    <BaseTitle :tag="'h1'" class="allGenres-title">All Genres</BaseTitle>
    <section class="allGenres">
        <AllGenresList class="allGenres__genre" />
    </section>
    <GamePromo />
</template>

<style lang="scss" scoped>
.allGenres {
    position: relative;
    min-height: 800px;
    &-title {
        margin-bottom: 36px;
        @media (max-width: 768px) {
            margin-bottom: 26px;
        }
    }

    &__genre {
        margin-bottom: 106px;

        @media (max-width: 768px) {
            margin-bottom: 60px;
        }
    }
}
</style>
