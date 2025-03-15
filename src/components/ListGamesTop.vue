<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'
import ListGamesTopCardsLayout from '@/components/ListGamesTopCardsLayout.vue'
const radioValue = defineModel()
defineProps<{
    results: number | undefined
}>()
</script>

<template>
    <BaseTitle :tag="'h4'">Results: {{ results ? results : 0 }}</BaseTitle>
    <ListGamesTopCardsLayout v-model="radioValue" />
</template>

<style lang="scss" scoped></style>
