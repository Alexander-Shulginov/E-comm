<script setup lang="ts">
import { computed } from 'vue'
import IconPlatformPc from '@/components/icons/IconPlatformPc.vue'
import IconPlatformPlayStation from '@/components/icons/IconPlatformPlayStation.vue'
import IconPlatformXbox from '@/components/icons/IconPlatformXbox.vue'
import IconPlatformApple from '@/components/icons/IconPlatformApple.vue'
import IconPlatformLinux from '@/components/icons/IconPlatformLinux.vue'
import IconPlatformNintendo from '@/components/icons/IconPlatformNintendo.vue'
import IconPlatformAndroid from '@/components/icons/IconPlatformAndroid.vue'

const platformIcons: Record<number, any> = {
    1: IconPlatformPc,
    2: IconPlatformPlayStation,
    3: IconPlatformXbox,
    5: IconPlatformApple,
    6: IconPlatformLinux,
    7: IconPlatformNintendo,
    8: IconPlatformAndroid
}

const props = defineProps<{
    platforms: {
        platform: {
            id: number
            name: string
        }
    }[]
}>()

const filteredPlatforms = computed(() =>
    props.platforms
        .map(({ platform }) => ({ id: platform.id, component: platformIcons[platform.id] }))
        .filter((p) => p.component)
)
</script>

<template>
    <div class="cardBase__platforms">
        <component
            v-for="platform in filteredPlatforms"
            :key="platform.id"
            :is="platform.component"
        />
    </div>
</template>

<style lang="scss" scoped>
.cardBase {
    &__platforms {
        display: flex;
        align-items: center;
        gap: 6px;
        svg:hover {
            fill: var(--color-accent);
        }

        @media (max-width: 768px) {
            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
}
</style>
