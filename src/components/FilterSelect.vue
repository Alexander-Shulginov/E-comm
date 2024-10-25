<script setup lang="ts">
import { isRef, ref, watch } from 'vue'
import { shopStore } from '../store/shopStore'
import { Category, SortDirection } from '../types/productType'

const store = shopStore()

const i = 12;
const modelSort = ref(null)
const optionsSort: SortDirection[] = ['asc', 'desc']

console.log(isRef(i))

const modelCategory = ref(null)
const optionsCategory: Category[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
]

watch([modelSort, modelCategory], () => {
    if (modelSort.value !== null && !store.loading) {
        store.sortProduct(modelSort.value)
    }

    if (modelCategory.value !== null && !store.loading) {
        store.loadProductByCategory(modelCategory.value)
    }
})
</script>

<template>
    <div class="q-pa-md" style="max-width: 300px">
        <!-- <q-select
            outlined
            v-model="modelSort"
            :options="optionsSort"
            label="Sort by"
            style="background-color: #fff"
        /> -->

        <q-select
            outlined
            v-model="modelCategory"
            :options="optionsCategory"
            label="Category"
            style="background-color: #fff"
        />
    </div>
</template>

<style scoped></style>
