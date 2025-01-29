<script setup lang="ts">
defineProps<{
    width: number
    height: number
    isLeft?: boolean
}>()
</script>
<template>
    <svg
        :class="isLeft ? 'arrow-left' : false"
        :width="width"
        :height="height"
        viewBox="0 0 14 26"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.11034 0L0 1.11776L11.8034 13L0 24.8822L1.11034 26L13.469 13.5589L14 13L13.469 12.4411L1.11034 0Z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2px"
            stroke="#6d4eec"
        />
    </svg>
</template>

<style scoped lang="scss">
.arrow-left {
    transform: rotate(180deg);
}
</style>