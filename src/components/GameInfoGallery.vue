<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

Fancybox.bind('[data-fancybox]', {
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['thumbs', 'close']
        }
    }
})

defineProps<{
    data: any
    screens: any
}>()
</script>

<template>
    <div class="gameInfo__gallery">
        <a v-for="screen in screens" data-fancybox="gallery" :href="screen.img">
            <img
                :key="screen.id"
                :width="screen.width"
                :height="screen.height"
                :src="screen.img"
                :alt="data?.name"
            />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.gameInfo__gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}
</style>
