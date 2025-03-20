<script setup lang="ts">
import TheFiltersReset from '@/layouts/TheFilters/TheFiltersReset.vue'

defineProps<{
    results: number | undefined
}>()
</script>

<template>
    <div class="result-value">
        <span>Results:</span>
        {{ results ? results : 0 }}
    </div>
    <TheFiltersReset />
</template>

<style lang="scss" scoped>
.result-value {
    font-size: 16px;

    span {
        font-weight: 700;
        font-size: 18px;
    }
}
</style>
