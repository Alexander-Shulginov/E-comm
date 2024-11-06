<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
</script>

<template>
    <v-app :theme="'dark'">
        <TheHeader />

        <v-main>
            <v-container>
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>
