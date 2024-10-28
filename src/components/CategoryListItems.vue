<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCategory } from '../services/categoryService'
import { useRoute } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { Product } from '../types/productType'

const route = useRoute()
const categorieItems = ref<Product[] | null>(null)
const categorieName = route.params.name as string

onMounted(async () => {
    categorieItems.value = await getCategory(categorieName)
})
</script>

<template>

    <h1 class="text-h3 q-ma-lg">{{ categorieName }}</h1>
    <div class="grid-wrap">
        <ProductCard
            v-for="product in categorieItems"
            :id="product.id"
            :key="product.id"
            :image="product.image"
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :rating="product.rating.rate"
        />
    </div>
</template>

<style scoped>
h1::first-letter {
    text-transform: uppercase;
}
</style>
