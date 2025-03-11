<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'
import ListGamesTopCardsLayout from '@/components/ListGamesTopCardsLayout.vue'
const radioValue = defineModel()
</script>

<template>
    <BaseTitle :tag="'h3'">Games</BaseTitle>
    <ListGamesTopCardsLayout v-model="radioValue" />
</template>

<style lang="scss" scoped></style>
