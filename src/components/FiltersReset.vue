<script setup lang="ts">
import { useFiltersStore } from '../store/filtersStore'
const filtersStore = useFiltersStore()

import { useRouter } from 'vue-router'

const router = useRouter()

const resetQueryParams = () => {
    router.replace({ query: {} })
}
</script>

<template>
    <v-btn
        @click="
            () => {
                filtersStore.resetFilters(), resetQueryParams()
            }
        "
        size="x-large"
        class="v-col-2"
        color="white"
        >Reset</v-btn
    >
</template>
