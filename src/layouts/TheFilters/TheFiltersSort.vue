<script setup lang="ts">
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const selectValue = ref('')

const route = useRoute()

watch(
    () => selectValue.value,
    (n) => {
        updateUrlQuery(router, {
            ordering: n,
            // page: 1
        })
    }
)

watch(
    () => route.query.ordering,
    () => {
        if (!route.query.ordering) {
            selectValue.value = ''
        }
    }
)
</script>

<template>
    <label class="filters__name" for="sortSelect">Sort by</label>
    <div class="custom-select">
        <select v-model="selectValue" id="sortSelect" name="sort">
            <option value="" disabled>Choice value</option>
            <option value="-metacritic">Metacritic</option>
            <option value="-rating">Rating</option>
            <option value="name">Name A-Z</option>
            <option value="-name">Name Z-A</option>
        </select>
        <div class="select-arrow"></div>
    </div>
</template>

<style lang="scss" scoped>
.custom-select {
    position: relative;
}

.custom-select select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    background-color: var(--color-dark-second);
    border: 1px solid var(--color-light);
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    outline: none;
}

.custom-select::after {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 50%;
    right: 13px;
    transform: translate(0, -50%);
    width: 12px;
    height: 12px;
    background-color: #ffffff;
    clip-path: polygon(8% 17%, 0% 25%, 50% 84%, 100% 25%, 92% 17%, 50% 65%);
}
</style>
