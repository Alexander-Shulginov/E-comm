<script setup lang="ts">
import GamePromoCard from '@/components/PromoGameCard.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'
import { promoContent } from '@/data/promoContent'

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
                <GamePromoCard v-for="promo in promoContent" :key="promo.id" :data="promo" class="swiper-slide" />
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.promo {
    margin-bottom: 40px;

    &__swiper {
        padding-bottom: 40px;
    }
}
</style>
