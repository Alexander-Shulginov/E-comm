<script setup lang="ts">
import IconFavorites from '@/components/icons/IconFavorites.vue'
defineProps<{
    width: number
    height: number
}>()
</script>

<template>
    <button type="button" class="addFavorite">
        <IconFavorites :width="width" :height="height" />
    </button>
</template>

<style lang="scss" scoped>
.addFavorite {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
    background-color: var(--color-dark-second);

    @media (any-hover: hover) {
        &:hover {
            svg {
                animation: pulseAnimation 0.5s ease-in-out;
            }
        }
    }

    @keyframes pulseAnimation {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
}
</style>
