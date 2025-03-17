<script setup lang="ts">
import ListGamesTopCardsLayout from '@/components/ListGamesTopCardsLayout.vue'
import ListGamesResults from './ListGamesResults.vue'

defineProps<{
    results: number | undefined
}>()

const radioValue = defineModel()
</script>

<template>
    <ListGamesResults :results="results" />
    <ListGamesTopCardsLayout v-model="radioValue" />
</template>

<style lang="scss" scoped></style>
