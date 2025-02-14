
<script setup lang="ts">
import { ref } from 'vue'

import errorPl from '@/assets/img/common/error-placeholder.png'
defineProps<{
    src: string
    alt?: string
}>()

const isLoading = ref(true)
const hasError = ref(false)

const onLoad = () => {
    isLoading.value = false
}

const onError = () => {
    hasError.value = true
    isLoading.value = false
}
</script>

<template>
    <img
        :src="hasError ? errorPl : src"
        :alt="alt"
        @load="onLoad"
        @error="onError"
        v-bind="$attrs"
    />
</template>

<style scoped>
.image-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255);
    border-left-color: #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@keyframes spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>