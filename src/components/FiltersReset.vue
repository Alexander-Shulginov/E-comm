<script setup lang="ts">
import { useFiltersStore } from '../store/filtersStore'
const filtersStore = useFiltersStore()
</script>

<template>
    <v-btn @click="filtersStore.resetFilters" size="x-large" class="v-col-2" color="white"
        >Reset</v-btn
    >
</template>
