<script setup lang="ts">
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import TheFiltersByPlatforms from './TheFiltersByPlatforms.vue'
import TheFiltersByGenres from './TheFiltersByGenres.vue'
import TheFiltersByYears from './TheFiltersByYears.vue'

const router = useRouter()

const selectValue = ref('')

watch(
    () => selectValue.value,
    (n) => {
        updateUrlQuery(router, {
            ordering: n,
            page: 1
        })
    }
)
</script>

<template>
    <aside class="filters">
        <div class="filters__block">
            <p class="filters__name">Years</p>
            <TheFiltersByYears />
        </div>
        <div class="filters__block">
            <p class="filters__name">Platforms</p>
            <TheFiltersByPlatforms />
        </div>
        <div class="filters__block">
            <p class="filters__name">Genres</p>
            <TheFiltersByGenres />
        </div>
        <!-- <select v-model="selectValue" name="sort" id="22">
            <option value="-name">Name</option>
            <option value="released">Rel</option>
            <option value="-rating">Rating</option>
            <option value="-metacritic">Metacritic</option>
        </select> -->
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
