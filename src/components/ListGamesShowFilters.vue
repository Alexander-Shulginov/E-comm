<script setup lang="ts">
import { filtersState, showFilters } from '@/store/filtersStore'
import IconCardLayoutLines from './icons/cards-layouts/IconCardLayoutLines.vue'
</script>

<template>
    <button
        v-show="filtersState.isOpen === false"
        @click="showFilters"
        class="showFilters"
        type="button"
    >
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
