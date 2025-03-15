<script setup lang="ts">
import TheFiltersSort from '@/layouts/TheFilters/TheFiltersSort.vue'
import TheFiltersByYears from '@/layouts/TheFilters/TheFiltersByYears.vue'
import TheFiltersByGenres from '@/layouts/TheFilters/TheFiltersByGenres.vue'
import TheFiltersByPlatforms from '@/layouts/TheFilters/TheFiltersByPlatforms.vue'
</script>

<template>
    <aside class="filters">
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
    </aside>
</template>

<style lang="scss">
.filters {
    display: flex;
    flex-direction: column;
    gap: 28px;

    border-radius: 4px;
    background-color: var(--color-dark-second);
    padding: 16px;

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

    // @supports (scrollbar-width: auto) {
    //     &__item {
    //         scrollbar-color: var(--scrollbar-color-thumb) var(--scrollbar-color-track);
    //         scrollbar-width: var(--scrollbar-width);
    //     }
    // }

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
