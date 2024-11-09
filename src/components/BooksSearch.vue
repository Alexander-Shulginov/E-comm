<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBooksStore } from '../store/booksStore'

const booksStore = useBooksStore()

const searchQuery = ref<string>('')

const getSearchResult = async () => {
    if (searchQuery.value === '' || /^\s*$/.test(searchQuery.value)) return
    booksStore.getBooksBySearch(searchQuery.value)
    booksStore.searchQuery = searchQuery.value
}

onMounted(() => {
    searchQuery.value = booksStore.searchQuery
})
</script>

<template>
    <div class="d-flex ga-3 mb-16">
        <v-text-field
            name="user-search"
            label="Search"
            clearable
            density="comfortable"
            v-model="searchQuery"
            @keydown.enter="getSearchResult"
        ></v-text-field>
        <v-btn @click="getSearchResult" size="x-large" color="success" style="height: 47px"
            >Search</v-btn
        >
    </div>
</template>

<style scoped></style>
