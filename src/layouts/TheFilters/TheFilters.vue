<script setup lang="ts">
import TheFiltersSort from '@/layouts/TheFilters/TheFiltersSort.vue'
import TheFiltersByYears from '@/layouts/TheFilters/TheFiltersByYears.vue'
import TheFiltersByGenres from '@/layouts/TheFilters/TheFiltersByGenres.vue'
import TheFiltersByPlatforms from '@/layouts/TheFilters/TheFiltersByPlatforms.vue'
import { filtersState, toggleFilters } from '@/store/filtersStore'
import TheFiltersToggler from '@/layouts/TheFilters/TheFiltersToggler.vue'
</script>

<template>
    <aside class="filters" :class="{ 'filters--active': filtersState.isOpen === false }">
        <TheFiltersToggler @click="toggleFilters" class="filters__close-btn" />
        <div class="filters__content">
            <div class="filters__block">
                <TheFiltersSort />
            </div>
            <div class="filters__block">
                <p class="filters__name">Years</p>
                <TheFiltersByYears />
            </div>
            <div class="filters__block">
                <TheFiltersByPlatforms />
            </div>
            <div class="filters__block">
                <TheFiltersByGenres />
            </div>
        </div>
    </aside>
</template>

<style lang="scss">
.filters {
    border-radius: 4px;
    border-top-right-radius: 0;
    background-color: var(--color-dark-second);
    padding: 16px;
    transition: all 0.3s ease-in-out;
    width: 300px;
    position: relative;
    z-index: 3;

    @media (max-width: 1024px) {
        position: absolute;
        top: 0;
        // bottom: 0;
        left: -300px;
    }

    &--active {
        left: 0px;
    }

    &__close-btn {
        position: absolute;
        top: 0;
        left: 100%;
        display: none;

        @media (max-width: 1024px) {
            display: block;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        height: 190px;
        overflow-y: scroll;
        padding: 4px;
    }

    &__item--expanded {
        height: auto;
        overflow: hidden;
    }

    &__name {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
        display: block;
    }

    &__item {
        margin-bottom: 12px;
        --scrollbar-color-thumb: var(--color-accent);
        --scrollbar-color-track: var(--color-dark-base);
        --scrollbar-width: thin;
        --scrollbar-width-legacy: 5px;
    }

    &__toggle {
        cursor: pointer;
        width: 100%;
        z-index: 1;
        background-color: var(--color-dark-second);
        color: var(--color-light);
        border: 1px solid var(--color-light);
        padding: 8px 12px;
        border-radius: 4px;
    }

    @supports selector(::-webkit-scrollbar) {
        &__item::-webkit-scrollbar-thumb {
            background: var(--scrollbar-color-thumb);
            border-radius: 10px;
            cursor: pointer;
        }

        &__item::-webkit-scrollbar-track {
            background: var(--scrollbar-color-track);
            border-radius: 10px;
        }
        &__item::-webkit-scrollbar {
            max-width: var(--scrollbar-width-legacy);
            max-height: var(--scrollbar-width-legacy);
            border-radius: 10px;
        }
    }
}
</style>
