<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'

const booksStore = useBooksStore()
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
        ></v-text-field>
        <v-btn size="x-large" color="success" style="height: 47px">Search</v-btn>
    </div>
</template>
