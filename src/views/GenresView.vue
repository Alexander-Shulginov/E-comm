<script setup lang="ts">
import AllGenresList from '@/components/AllGenresList.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import GamePromo from '@/components/GamePromo.vue'
</script>

<template>
    <section aria-label="all genres page">
        <BaseTitle :tag="'h1'" class="allGenres-title">All Genres</BaseTitle>
        <div class="allGenres">
            <AllGenresList class="allGenres__genre" />
        </div>
        <GamePromo />
    </section>
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
