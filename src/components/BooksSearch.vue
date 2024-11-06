<script setup lang="ts">
import { ref } from 'vue'
import { useBooksStore } from '../store/booksStore'

const booksStore = useBooksStore()

const searchQuery = ref<string>('')

const getSearchResult = async () => {
    if (searchQuery.value === '' || /^\s*$/.test(searchQuery.value)) return
    booksStore.getBooksBySearch(searchQuery.value)
}
</script>

<template>
    <div class="d-flex ga-3">
        <v-text-field
            name="user-search"
            label="Search"
            clearable
            v-model="searchQuery"
            @keydown.enter="getSearchResult"
        ></v-text-field>
        <v-btn @click="getSearchResult" size="x-large" color="success">Search</v-btn>
    </div>
</template>

<style scoped></style>
