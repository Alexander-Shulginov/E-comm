<script setup lang="ts">
import { type Component, computed } from 'vue'
import IconPlatformPlayStation from '@/components/icons/platforms/IconPlatformPlayStation.vue'
import IconPlatformXbox from '@/components/icons/platforms/IconPlatformXbox.vue'
import IconPlatformApple from '@/components/icons/platforms/IconPlatformApple.vue'
import IconPlatformLinux from '@/components/icons/platforms/IconPlatformLinux.vue'
import IconPlatformNintendo from '@/components/icons/platforms/IconPlatformNintendo.vue'
import IconPlatformAndroid from '@/components/icons/platforms/IconPlatformAndroid.vue'
import IconPlatformWindows from '@/components/icons/platforms/IconPlatformWindows.vue'

const props = defineProps<{
    platforms: {
        id: number
        name: string
    }[]
}>()

const platformIcons: Record<number, Component> = {
    1: IconPlatformWindows,
    2: IconPlatformPlayStation,
    3: IconPlatformXbox,
    5: IconPlatformApple,
    6: IconPlatformLinux,
    7: IconPlatformNintendo,
    8: IconPlatformAndroid
}

const filteredPlatforms = computed(() =>
    props.platforms
        .map(({ id, name }) => ({
            id,
            name: name.includes('Macintosh') ? 'Apple' : name.replace(/PC/g, 'Windows'),

            component: platformIcons[id]
        }))
        .filter((p) => p.component)
)
</script>

<template>
    <div class="platform" v-for="platform in filteredPlatforms" :key="platform.id">
        <template v-if="platform.component">
            <component :is="platform.component" class="platform__icon" />
        </template>
        <span class="platform__name">{{ platform.name }}</span>
    </div>
</template>

<style lang="scss" scoped>
.platform {
    display: flex;
    position: relative;

    @media (any-hover: hover) {
        &:hover {
            .platform__name {
                opacity: 1;
                visibility: visible;
            }

            .platform__icon {
                transform: scale(1.1);
            }
        }
    }

    &__icon {
        transition: transform 0.3s ease-in-out;
        @media (max-width: 768px) {
            width: 16px;
            height: 16px;
        }
    }

    &__name {
        position: absolute;
        bottom: -32px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;

        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.2s ease-in-out,
            visibility 0.2s ease-in-out;
        background-color: var(--color-accent);
        padding: 2px 6px;
        border-radius: 2px;

        &::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            width: 0px;
            height: 0px;
            border-style: solid;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent var(--color-accent) transparent;
            transform: rotate(0deg) translateX(-50%);
        }
    }

    &:first-child {
        .platform__name {
            left: 150%;
            &::after {
                left: 10px;
                border-width: 0 6px 6px 6px;
            }
        }
    }
}
</style>
