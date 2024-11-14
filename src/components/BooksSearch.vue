<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const booksStore = useBooksStore()

const sendRequest = async () => {
    router.push({
        name: 'Home',
        query: { ...booksStore.queryParams }
    })
}

watch(
    () => route.query.q,
    () => {
        booksStore.queryParams.q = (route.query.q as string) || ''
        if (booksStore.queryParams) booksStore.fetchBooks()
    }
)

watch(
    () => booksStore.queryParams.q,
    (newValue) => {
        booksStore.queryParams.q = newValue
    }
)

onMounted(() => {
    booksStore.queryParams.q = (route.query.q as string) || ''
    if (booksStore.queryParams) booksStore.fetchBooks()
})
</script>

<template>
    <div class="mb-3 v-row align-center">
        <v-text-field
            class="v-col-10"
            name="user-search"
            ref="input-field"
            label="Search"
            clearable
            v-model="booksStore.queryParams.q"
        ></v-text-field>
        <v-btn @click="sendRequest" class="v-col-2" size="x-large" color="success">Search</v-btn>
    </div>
</template>
