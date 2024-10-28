<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAllCategory } from '../services/categoryService'

const categories = ref(null)

onMounted(async () => {
    categories.value = await getAllCategory()
})
</script>

<template>
    <ul v-if="categories" class="categories">
        <li class="categories__item" v-for="categorie in categories">
            <router-link :to="{ name: 'CategoryItems', params: { name: categorie } }">
                <span> {{ categorie }}</span>
            </router-link>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.categories {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 150px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    &__item {
        color: #fff;
        font-size: 26px;
        font-weight: 700;

        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        cursor: pointer;

        &:nth-child(1) {
            background-color: indigo;
        }
        &:nth-child(2) {
            background-color: orange;
        }
        &:nth-child(3) {
            background-color: skyblue;
        }
        &:nth-child(4) {
            background-color: green;
        }
    }
}
</style>
