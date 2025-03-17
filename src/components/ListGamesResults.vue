<script setup lang="ts">

defineProps<{
    results: number | undefined
}>()
</script>

<template>
    <div class="result-value" :tag="'h4'">
        <span>Results:</span>
        {{ results ? results : 0 }}
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
