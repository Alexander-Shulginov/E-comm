<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'
import FiltersCategory from './FiltersCategory.vue'
import FiltersOrder from './FiltersOrder.vue'
import FiltersReset from './FiltersReset.vue'

const bookStore = useBooksStore()

const resetFilters = () => {
    // bookStore.selectedOrder = defaultOrder.value
    // bookStore.selectedCategory = defaultCategory.value
}
</script>

<template>
    <div class="v-row align-center">
        <FiltersCategory />
        <FiltersOrder />
        <FiltersReset />
    </div>
</template>

<style>
.v-input__details {
    display: none !important;
}
</style>
