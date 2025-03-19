<script setup lang="ts">
import TheHeader from '@/layouts/TheHeader/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter/TheFooter.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { overlayState } from './store/overlayStore'
const route = useRoute()

const hasFilters = computed(() => route.matched.some((m) => m.components?.filters))

const classes = computed(() => ({
    container: true,
    'filters-wrapper': hasFilters.value
}))

const isInert = computed(() => {
    return overlayState.overlayIsOpen === true
})
</script>

<template>
    <TheHeader :inert="isInert" />
    <main :class="classes">
        <router-view name="filters"></router-view>
        <router-view :inert="isInert" v-slot="{ Component, route }">
            <component :is="Component" :key="route.path"></component>
        </router-view>
    </main>
    <TheFooter :inert="isInert" />
</template>
