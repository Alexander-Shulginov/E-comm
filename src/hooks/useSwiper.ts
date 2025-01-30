import { ref, onMounted, onUnmounted, nextTick, Ref } from 'vue'
import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types'

export function useSwiper(swiperContainer: Ref<HTMLElement | null>, options: SwiperOptions = {}) {
    const swiperInstance = ref<Swiper | null>(null)

    const initSwiper = () => {
        if (!swiperContainer.value || swiperInstance.value) return

        swiperInstance.value = new Swiper(swiperContainer.value, options)
    }

    onMounted(() => nextTick(initSwiper))

    onUnmounted(() => {
        swiperInstance.value?.destroy(true, true)
        swiperInstance.value = null
    })

    return { swiperInstance }
}
