<script setup lang="ts">
import { computed } from 'vue'
import IconStar from '../../icons/IconStar.vue'

interface Platform {
    id: number
    name: string
    slug: string
}

interface Device {
    platform: Platform
}
const props = defineProps<{
    name: string
    img: string
    rating?: number
    platforms: {
        platform: {
            id: number
        }
    }[]
}>()

const isPc = (id: number) => computed(() => {
    return id === 5
})
</script>

<template>
    <div class="cardBase">
        <img class="cardBase__img" :src="img" :alt="name" />
        <p class="cardBase__name">{{ name ? name : 'No name' }}</p>

        <div class="cardBase__platforms" v-for="device in platforms">
            {{ device.platform.id }}
            <div v-if="isPc(device.platform.id)">
                pccc
            </div>
        </div>

        <div class="cardBase__wrap">
            <div v-if="rating" class="cardBase__rating">
                <IconStar :width="18" :height="18" />
                <span>
                    {{ rating }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardBase {
    overflow: hidden;

    &__img {
        width: 300px;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 8px;

        margin-bottom: 12px;
    }

    &__name {
        margin-bottom: 8px;

        font-weight: 700;
        font-size: 18px;

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    &__rating {
        display: flex;
        align-items: center;
        gap: 4px;
    }
}
</style>
