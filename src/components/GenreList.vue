<script setup lang="ts">
import { onMounted, readonly } from 'vue'
import GenreListCard from './GenreListCard.vue'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

import actionImg from '@/assets/img/genre/actions.jpg?format=webp'
import horrorImg from '@/assets/img/genre/horror.jpg?format=webp'
import racingImg from '@/assets/img/genre/racing.jpg?format=webp'
import rpgImg from '@/assets/img/genre/rpg.jpg?format=webp'
import adventureImg from '@/assets/img/genre/adventure.jpg?format=webp'
import casualImg from '@/assets/img/genre/casual.jpg?format=webp'
import simulationImg from '@/assets/img/genre/simulation.jpg?format=webp'

const genreList = readonly([
    {
        genreName: 'Action',
        genreImg: actionImg
    },
    {
        genreName: 'Horror',
        genreImg: horrorImg
    },
    {
        genreName: 'Racing',
        genreImg: racingImg
    },
    {
        genreName: 'Rpg',
        genreImg: rpgImg
    },
    {
        genreName: 'Adventure',
        genreImg: adventureImg
    },
    {
        genreName: 'Casual',
        genreImg: casualImg
    },
    {
        genreName: 'Simulation',
        genreImg: simulationImg
    }
])

const swiperGenreInit = () => {
    const swiper = new Swiper('.swiper-genre', {
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
            }
        },
        // navigation: {
        //     nextEl: '.swiper-button-next.swiper-el-next',
        //     prevEl: '.swiper-button-prev.swiper-el-prev'
        // },
        pagination: {
            el: '.swiper-pagination'
        }
    })
}

onMounted(() => {
    swiperGenreInit()
})
</script>

<template>
    <div class="genre">
        <div class="swiper swiper-genre">
            <div class="swiper-wrapper">
                <GenreListCard
                    v-for="genre in genreList"
                    :genre-name="genre.genreName"
                    :genre-img="genre.genreImg"
                    class="swiper-slide"
                />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style lang="scss" scoped>
.genre {
    position: relative;
    padding-bottom: 40px;
}
</style>
