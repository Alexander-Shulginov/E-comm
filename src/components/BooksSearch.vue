<script setup lang="ts">
import { ref } from 'vue'
import { getBooks } from '../services/booksService'
import { useBooksStore } from '../store/booksStore'

const booksStore = useBooksStore()

const searchQuery = ref<string>('')

const getSearchResult = async () => {
    if (searchQuery.value === '' || /^\s*$/.test(searchQuery.value)) return
    booksStore.books = await getBooks(searchQuery.value)
    console.log(booksStore.books)
}
</script>

<template>
    <v-text-field
        name="name"
        label="Search"
        v-model="searchQuery"
        @keydown.enter="getSearchResult"
    ></v-text-field>
</template>

<style scoped></style>
