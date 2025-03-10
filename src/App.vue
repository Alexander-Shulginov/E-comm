<script setup lang="ts">
import TheHeader from '@/layouts/TheHeader/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter/TheFooter.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const hasFilters = computed(() => route.matched.some((m) => m.components?.filters))

const classes = computed(() => ({
    container: true,
    'filters-wrapper': hasFilters.value
}))
</script>

<template>
    <TheHeader />
    <main :class="classes">
        <router-view name="filters"></router-view>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </main>
    <TheFooter />
</template>
