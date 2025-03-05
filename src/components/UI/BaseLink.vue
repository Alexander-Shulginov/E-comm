<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router'

defineProps<{
    to: RouteLocationRaw
    text: string
    size: 'compact' | 'large'
}>()
</script>

<template>
    <router-link :to="to" :class="`base-link base-link--${size}`">{{ text }}</router-link>
</template>

<style lang="scss" scoped>
.base-link {
    display: inline-flex;
    align-items: center;

    border-radius: 35px;

    text-transform: capitalize;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: var(--color-light);

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    background-color: var(--color-accent);

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--color-accent-hover);
        }
    }

    &--compact {
        padding: 9px 14px;
        font-size: 13px;
    }

    &--large {
        min-height: 40px;
        padding: 5px 20px;
        font-size: 16px;
    }
}
</style>
