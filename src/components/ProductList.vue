<script setup lang="ts">
    import ProductCard from './ProductCard.vue';
    import { onMounted } from 'vue';
    import { shopStore } from '../store/shopStore';
    const store = shopStore();

    onMounted(async () => {
        await store.loadProducts();
        await store.loadProductById(2);
    });
</script>

<template>
    <Button label="Test" />
    <div class="grid-wrap">
        <ProductCard v-for="product in store.products" :image="product.image" :id="product.id" :title="product.title" :description="product.description" :price="product.price" />
    </div>
</template>

<style scoped lang="scss">
    .grid-wrap {
        max-width: 1280px;
        padding: 0 16px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        padding: 26px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
</style>
