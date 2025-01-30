<script setup lang="ts">
import { ref } from 'vue'
import { useSwiper } from '../hooks/useSwiper'
import { Pagination } from 'swiper/modules'
import GenreListCard from './GenreListCard.vue'
import { genreList } from '../types/genres'

const swiperGenre = ref<HTMLElement | null>(null)

useSwiper(swiperGenre, {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1220: {
            slidesPerView: 5
        }
    },
    pagination: { el: '.swiper-pagination' },
})
</script>

<template>
    <div class="genre">
        <div class="swiper genre__swiper" ref="swiperGenre">
            <div class="swiper-wrapper">
                <GenreListCard
                    v-for="genre in genreList"
                    :genre-name="genre.genreName"
                    :genre-img="genre.genreImg"
                    class="swiper-slide"
                />
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.genre {
    position: relative;
    margin-bottom: 40px;

    &__swiper {
        padding-bottom: 40px;
    }
}
</style>
