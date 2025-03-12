<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import { useSwiper } from '@/hooks/useSwiper'
import { Pagination } from 'swiper/modules'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

defineProps<{
    data: any
    screens: any
}>()

const swiperSimilar = ref<HTMLElement | null>(null)

const { initSwiper, destroySwiper } = useSwiper(swiperSimilar, {
    modules: [Pagination],
    loop: false,
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
    pagination: { el: '.swiper-pagination' }
})

Fancybox.bind('[data-fancybox]', {
    contentClick: false,
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['close']
        }
    }
})

onMounted(() => {
    nextTick(() => {
        initSwiper()
    })
})

onUnmounted(() => {
    destroySwiper()
})
</script>

<template>
    <div class="gameInfo__gallery">
        <div class="swiper" ref="swiperSimilar">
            <div class="swiper-wrapper">
                <a
                    v-for="screen in screens"
                    data-fancybox="gallery"
                    :href="screen.img"
                    class="swiper-slide"
                >
                    <img
                        class="gameInfo__gallery-img"
                        :key="screen.id"
                        :width="screen.width"
                        :height="screen.height"
                        :src="screen.img"
                        :alt="data?.name"
                    />
                </a>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gameInfo {
    &__gallery {
        margin-bottom: 40px;
    }

    &__gallery-img {
        border-radius: 6px;
        object-fit: cover;
        aspect-ratio: 16 / 9;
    }
    .swiper {
        padding-bottom: 40px;
    }

    a:focus-visible {
        outline: none;
    }
}
</style>
