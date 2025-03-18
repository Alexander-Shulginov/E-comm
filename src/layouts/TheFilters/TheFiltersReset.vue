<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

let hasQueryParams = computed(() => Object.keys(route.query).length > 1)

const resetQuery = () => {
    router.replace({ path: route.path })
}
</script>

<template>
    <button v-show="hasQueryParams" @click="resetQuery" class="filters-reset" type="button">
        <IconClose :width="13" :height="14" />
    </button>
</template>

<style lang="scss" scoped>
.filters-reset {
    margin-right: auto;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background-color: var(--color-dark-second);
    // padding: 8px 12px;
    border-radius: 50%;
    border: 2px solid var(--color-accent);
    color: var(--color-light);
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s ease-in-out;

    @media (any-hover: hover) {
        &:hover {
            background-color: var(--color-accent-hover);
        }
    }
}
</style>
