<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useBooksStore } from '../store/booksStore'
import { watch } from 'vue'

const route = useRoute()
const router = useRouter()
const booksStore = useBooksStore()

const sendRequest = async () => {
    router.push({
        name: 'Home',
        query: { q: booksStore.searchQuery }
    })
}

watch(
    () => route.query.q,
    () => {
        booksStore.searchQuery = (route.query.q as string) || ''
        booksStore.fetchBooks()
    }
)
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
        <v-btn @click="sendRequest" class="v-col-2" size="x-large" color="success">Search</v-btn>
    </div>
</template>
