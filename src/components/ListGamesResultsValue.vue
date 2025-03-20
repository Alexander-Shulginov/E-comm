<script setup lang="ts">
defineProps<{
    results: number | undefined
}>()
</script>

<template>
    <div class="result-value" v-if="results">
        <p v-if="results > 0">
            <span>Results:</span>
            {{ results ? results : 0 }}
        </p>
    </div>
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
