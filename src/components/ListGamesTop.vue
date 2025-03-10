<script setup lang="ts">
import BaseTitle from './base/BaseTitle.vue'
import ListGamesTopCardsLayout from './ListGamesTopCardsLayout.vue'
const radioValue = defineModel()
</script>

<template>
    <BaseTitle :tag="'h3'">Games</BaseTitle>
    <ListGamesTopCardsLayout v-model="radioValue" />
</template>

<style lang="scss" scoped></style>
