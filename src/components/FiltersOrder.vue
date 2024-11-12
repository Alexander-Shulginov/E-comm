<script setup lang="ts">
import { useFiltersStore } from '../store/filtersStore'
const filtersStore = useFiltersStore()

filtersStore.activeOrder = filtersStore.defaultOrderValue
</script>

<template>
    <v-select
        class="v-col-5"
        v-model="filtersStore.activeOrder"
        label="Order"
        :items="filtersStore.getOrderOptions"
        item-value="value"
        item-title="text"
    ></v-select>
</template>
