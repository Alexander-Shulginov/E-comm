<script setup lang="ts">
import TheHeader from './layouts/TheHeader/TheHeader.vue'
import TheFooter from './layouts/TheFooter/TheFooter.vue'
</script>

<template>
    <TheHeader />
    <main class="container">
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
                <keep-alive :max="3">
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
            </transition>
        </router-view>
    </main>
    <TheFooter />
</template>
