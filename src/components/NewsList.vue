<script setup lang="ts">
import NewsItem from './NewsItem.vue'
import { appStore } from '../store/appStore'

const store = appStore()
</script>

<template>
    <NewsItem
        v-for="card in store.newStories"
        :title="card.title"
        :author-name="card.by"
        :publish-date="card.time"
        :rate="card.score"
        :url="card.url"
    />
</template>

<style lang="scss" scoped></style>
