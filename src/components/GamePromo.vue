<script setup lang="ts">
import GamePromoCard from '@/components/GamePromoCard.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'

const swiperPromo = ref<HTMLElement | null>(null)
useSwiper(swiperPromo, {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
    pagination: {
        el: '.swiper-pagination'
    }
})
</script>

<template>
    <section class="promo">
        <div class="swiper promo__swiper" ref="swiperPromo">
            <div class="swiper-wrapper">
                <GamePromoCard class="swiper-slide" />
                <GamePromoCard class="swiper-slide" />
                <GamePromoCard class="swiper-slide" />
                <GamePromoCard class="swiper-slide" />
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.promo {
    margin-bottom: 86px;

    @media (max-width: 1024px){
        margin-bottom: 66px;
    }

    @media (max-width: 768px) {
        margin-bottom: 35px;
    }
    &__swiper {
        padding-bottom: 40px;
    }
}
</style>
