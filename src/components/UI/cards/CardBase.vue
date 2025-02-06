<script setup lang="ts">
import { computed } from 'vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconPlatformPc from '@/components/icons/IconPlatformPc.vue'
import IconPlatformPlayStation from '@/components/icons/IconPlatformPlayStation.vue'
import IconPlatformXbox from '@/components/icons/IconPlatformXbox.vue'
import IconPlatformApple from '@/components/icons/IconPlatformApple.vue'
import IconPlatformLinux from '@/components/icons/IconPlatformLinux.vue'
import IconPlatformNintendo from '@/components/icons/IconPlatformNintendo.vue'
import IconPlatformAndroid from '@/components/icons/IconPlatformAndroid.vue'
import { formatNumber } from '@/utils/formatNumber'
// import { useImgLoading } from '@/hooks/useImgLoading'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import BaseImg from '@/components/UI/BaseImg.vue'

const props = defineProps<{
    name: string
    img: string
    loading: boolean
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

// const { loading } = useImgLoading(props.img)
</script>

<template>
    <div class="cardBase">
        <div class="cardBase__img-wrap">
            <BaseImg :src="img" :alt="name" :width="300" :height="400" class="cardBase__img" />
        </div>
        <BaseTitle :tag="'h4'" :is-bold="true" class="cardBase__name">
            {{ name ? name : 'No name' }}
        </BaseTitle>

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
                    {{ formatNumber(rating) }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardBase {
    overflow: hidden;
    width: 300px; //!

    &__img {
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
        svg:hover {
            fill: var(--color-accent);
        }
    }

    &__rating {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
    }
}
</style>
