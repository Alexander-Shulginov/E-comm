<script setup lang="ts">
import TheFiltersReset from '@/layouts/TheFilters/TheFiltersReset.vue'
import ListGamesResultsValue from './ListGamesResultsValue.vue'

defineProps<{
    results: number | undefined
}>()
</script>

<template>
    <ListGamesResultsValue :results="results" />
    <TheFiltersReset />
</template>
