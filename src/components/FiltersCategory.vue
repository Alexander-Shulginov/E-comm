<script setup lang="ts">
import { useFiltersStore } from '../store/filtersStore'
const filtersStore = useFiltersStore()

filtersStore.activeCategory = filtersStore.defaultCategoryValue
</script>

<template>
    <v-select
        class="v-col-5"
        v-model="filtersStore.activeCategory"
        label="Category"
        :items="filtersStore.getCategoryOptions"
        item-value="value"
        item-title="text"
    ></v-select>
</template>
