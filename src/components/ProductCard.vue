<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getProductById, getProducts } from '../services/cardService';

    const products = ref();
    const product = ref();

    onMounted(async () => {
        products.value = await getProducts();
        product.value = await getProductById(1);
    });
</script>

<template>
    <div class="card" v-if="product">
        <img class="card__img" :src="product.data.image" alt="" width="125" />
        <!-- <p>{{ product.data.id }}</p> -->
        <p class="card__title">{{ product.data.title }}</p>
        <p class="card__descr">{{ product.data.description }}</p>
        <!-- <p>{{ product.data.category }}</p> -->
        <!-- <p>{{ product.data.rating.rate }}</p> -->
        <div class="card__wrap">
            <button class="card__buy">Buy</button>
            <p class="card__price">{{ product.data.price }} $</p>
        </div>
    </div>
    <div v-else>load</div>
</template>

<style scoped lang="scss">
    .card {
        max-width: 350px;
        border-radius: 12px;
        box-shadow: 1px 1px 10px var(--color-dark);

        padding: 12px;
        margin: 3rem;

        &__img {
            display: block;
            margin: 0 auto;

            margin-bottom: 18px;
        }

        &__title {
            font-size: 22px;
            line-height: 1.1;
            font-weight: 700;
            margin-bottom: 12px;
        }

        &__descr {
            margin-bottom: 12px;
        }

        &__wrap {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            text-align: center;
        }

        &__price {
            flex-grow: 2;
            font-size: 18px;
            padding: 8px;
            background-color: var(--color-second);
            border-radius: 6px;
            color: var(--color-light);
        }

        &__buy {
            cursor: pointer;
            flex-grow: 2;
            font-size: 18px;
            padding: 8px;
            background-color: var(--color-accent);
            border-radius: 6px;
            color: var(--color-light);
        }
    }
</style>
