<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import { useBooksStore } from '../store/booksStore'
import { focusState } from '../hooks/useFocus'

const booksStore = useBooksStore()

const searchQuery = ref<string>('')
const getSearchResult = async () => {
    if (searchQuery.value === '' || /^\s*$/.test(searchQuery.value)) return
    booksStore.fetchBooks(searchQuery.value)
    booksStore.lastQuery = searchQuery.value
}

const inputElem = useTemplateRef('input-field')
onMounted(() => {
    searchQuery.value = booksStore.lastQuery
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
            v-model="searchQuery"
            @keydown.enter="getSearchResult"
        ></v-text-field>
        <v-btn @click="getSearchResult" size="x-large" color="success" style="height: 47px"
            >Search</v-btn
        >
    </div>
</template>
