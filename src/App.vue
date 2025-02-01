<script setup lang="ts">
import TheHeader from './layouts/TheHeader/TheHeader.vue'
import TheFooter from './layouts/TheFooter/TheFooter.vue';
</script>

<template>
    <TheHeader />
    <main class="container">
        <RouterView />
    </main>
    <TheFooter />
</template>

<style scoped lang="scss"></style>
