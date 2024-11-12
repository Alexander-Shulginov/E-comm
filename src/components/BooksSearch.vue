<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'

const booksStore = useBooksStore()
</script>

<template>
    <div class="mb-3 v-row align-center">
        <v-text-field
            class="v-col-10"
            name="user-search"
            ref="input-field"
            label="Search"
            clearable
            v-model="booksStore.searchQuery"
        ></v-text-field>
        <v-btn class="v-col-2" size="x-large" color="success">Search</v-btn>
    </div>
</template>
