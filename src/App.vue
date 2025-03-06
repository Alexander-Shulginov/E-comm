<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '@/layouts/TheHeader/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter/TheFooter.vue'

const route = useRoute()

const hasFilters = computed(
    () => route.matched.some((m) => m.components?.filters)
)

const classes = computed(() => ({
    container: true,
    'filters-wrapper': hasFilters.value
}))

</script>

<template>
    <TheHeader />
    <main :class="classes">
        <router-view name="filters"></router-view>
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
