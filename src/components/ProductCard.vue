<script setup lang="ts">
    defineProps<{
        id: number;
        price: number;
        title: string;
        image: string;
        description: string;
    }>();
</script>

<template>
    <div class="card">
        <img class="card__img" :src="image" width="125" />
        <p class="card__title">{{ title }}</p>
        <p class="card__descr" :title="description">{{ description }}</p>
        <div class="card__wrap">
            <p class="card__price">{{ price }} $</p>
            <button class="card__buy">Buy</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: 1px 1px 10px var(--color-dark);
        display: flex;
        flex-direction: column;

        padding: 12px;

        &__img {
            display: block;
            margin: 0 auto;
            height: 250px;
            width: 100%;
            object-fit: contain;

            margin-bottom: 18px;
        }

        &__title {
            font-size: 22px;
            line-height: 1.1;
            font-weight: 700;
            margin-bottom: 12px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }

        &__descr {
            margin-bottom: 12px;

            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        &__wrap {
            display: flex;
            justify-content: space-between;
            margin-top: auto;
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
