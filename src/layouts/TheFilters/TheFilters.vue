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

<style lang="scss" scoped>
.filters {
    display: flex;
    flex-direction: column;
    gap: 28px;

    border-radius: 4px;
    background-color: var(--color-dark-second);
    padding: 16px;

    &__block {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__name {
        font-size: 18px;
        font-weight: 700;
    }
}
</style>
