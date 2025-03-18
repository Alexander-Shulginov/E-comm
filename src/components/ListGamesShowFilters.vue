<script setup lang="ts">
import { filtersState } from '@/store/filtersState'
import IconCardLayoutLines from './icons/cards-layouts/IconCardLayoutLines.vue'

const showFilters = () => {
    filtersState.isOpen = true
}
</script>

<template>
    <button @click="showFilters" class="showFilters" type="button">
        <IconCardLayoutLines />
        Show filters
    </button>
</template>

<style lang="scss" scoped>
.showFilters {
    color: var(--color-light);
    font-weight: 700;
    font-size: 16px;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 6px;
}
</style>
