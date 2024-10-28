<script setup lang="ts">
defineProps<{
    currentCategory: string
    productName?: string
}>()
</script>

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-breadcrumbs>
            <q-breadcrumbs-el to="/" label="Home" />
            <q-breadcrumbs-el to="/category" label="Category" />
            <q-breadcrumbs-el :to="`/category/${currentCategory}`" :label="currentCategory" />
            <q-breadcrumbs-el :label="productName" />
        </q-breadcrumbs>
    </div>
</template>
