<script setup lang="ts">
import TheHeader from './layouts/TheHeader/TheHeader.vue'
import TheFooter from './layouts/TheFooter/TheFooter.vue'
</script>

<template>
    <TheHeader />
    <main class="container">
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
                <component :is="Component" :key="route.fullPath" />
            </transition>
        </router-view>
    </main>
    <TheFooter />
</template>
