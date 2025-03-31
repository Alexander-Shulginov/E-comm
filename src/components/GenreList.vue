<script setup lang="ts">
import { ref } from 'vue'
import { useSwiper } from '@/hooks/useSwiper'
import { genreList } from '@/types/genres'
import GenreListCard from '@/components/GenreListCard.vue'

const swiperGenre = ref<HTMLElement | null>(null)

useSwiper(swiperGenre, {
    // loop: true,
    spaceBetween: 16,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1.1
        },
        450: {
            slidesPerView: 2.2
        },
        768: {
            slidesPerView: 3.2
        },
        1024: {
            slidesPerView: 4.2
        },
        1280: {
            slidesPerView: 6
        }
    }
})
</script>

<template>
    <section class="genre">
        <div class="swiper genre__swiper" ref="swiperGenre">
            <div class="swiper-wrapper">
                <GenreListCard
                    v-for="genre in genreList"
                    :key="genre.genreName"
                    :genre-id="genre.genreId"
                    :genre-name="genre.genreName"
                    :genre-img="genre.genreImg"
                    :genre-slug="genre.genreSlug"
                    class="swiper-slide"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.genre {
    position: relative;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        margin-bottom: 35px;
    }

    &__swiper {
        padding: 5px;
    }
}
</style>
