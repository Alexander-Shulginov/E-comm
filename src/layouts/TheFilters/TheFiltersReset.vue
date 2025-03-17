<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const resetQuery = () => {
    router.replace({ path: route.path })
}

const hasQueryParams = computed(() => Object.keys(route.query).length > 0);
</script>

<template>
    <button v-show="hasQueryParams" @click="resetQuery" class="filters-reset" type="button">
        Reset
    </button>
</template>

<style lang="scss" scoped>
.filters-reset {
    cursor: pointer;
    background-color: var(--color-accent);
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 6px;
    color: var(--color-light);

    transition: background-color 0.2s ease-in-out;

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--color-accent-hover);
        }
    }
}
</style>
