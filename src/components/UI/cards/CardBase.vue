<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import IconStar from '../../icons/IconStar.vue'
import IconPlatformPc from '../../icons/IconPlatformPc.vue'
import IconPlatformPlayStation from '../../icons/IconPlatformPlayStation.vue'
import IconPlatformXbox from '../../icons/IconPlatformXbox.vue'
import IconPlatformApple from '../../icons/IconPlatformApple.vue'
import IconPlatformLinux from '../../icons/IconPlatformLinux.vue'
import IconPlatformNintendo from '../../icons/IconPlatformNintendo.vue'
import IconPlatformAndroid from '../../icons/IconPlatformAndroid.vue'

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
            name: string
        }
    }[]
}>()

const platformIcons: Record<number, any> = {
    1: IconPlatformPc,
    2: IconPlatformPlayStation,
    3: IconPlatformXbox,
    5: IconPlatformApple,
    6: IconPlatformLinux,
    7: IconPlatformNintendo,
    8: IconPlatformAndroid
}

const filteredPlatforms = computed(() =>
    props.platforms
        .map(({ platform }) => ({ id: platform.id, component: platformIcons[platform.id] }))
        .filter((p) => p.component)
)
</script>

<template>
    <div class="cardBase">
        <img class="cardBase__img" :src="img" :alt="name" />
        <p class="cardBase__name">{{ name ? name : 'No name' }}</p>

        <div class="cardBase__wrap">
            <div class="cardBase__platforms">
                <component
                    v-for="platform in filteredPlatforms"
                    :key="platform.id"
                    :is="platform.component"
                />
            </div>
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
        justify-content: space-between;
    }

    &__platforms {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    &__rating {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
    }
}
</style>
