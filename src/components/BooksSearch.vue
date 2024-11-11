<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { useBooksStore } from '../store/booksStore'
import { focusState } from '../hooks/useFocus'

const booksStore = useBooksStore()

const getSearchResult = async () => {
    if (booksStore.searchQuery === '' || /^\s*$/.test(booksStore.searchQuery)) return
    booksStore.fetchBooks(booksStore.searchQuery)
    booksStore.lastQuery = booksStore.searchQuery
}

const inputElem = useTemplateRef('input-field')
onMounted(() => {
    booksStore.searchQuery = booksStore.lastQuery
    focusState.setInputRef(inputElem.value)
})
</script>

<template>
    <div class="d-flex ga-3 mb-3">
        <v-text-field
            name="user-search"
            ref="input-field"
            label="Search"
            clearable
            density="comfortable"
            v-model="booksStore.searchQuery"
            @keydown.enter="getSearchResult"
        ></v-text-field>
        <v-btn @click="getSearchResult" size="x-large" color="success" style="height: 47px"
            >Search</v-btn
        >
    </div>
</template>
