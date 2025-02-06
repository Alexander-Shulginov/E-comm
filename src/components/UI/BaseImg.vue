<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
    src: string
    alt: string
    width: number
    height: number
    lazy?: boolean
}>()

const isLoading = ref(true)
const isError = ref(false)

const onImageLoading = () => {
    isLoading.value = false
}

const onImageError = () => {
    isLoading.value = false
    isError.value = true
}
</script>

<template>
    <div class="base-image">
        <div v-if="isLoading">Loading...</div>

        <div v-else-if="isError">
            <img src="../../assets/img/common/error-placeholder.png" alt="" />
        </div>
        <img
            v-show="!isLoading && !isError"
            :src="src"
            :width="width"
            :height="height"
            :alt="alt"
            :loading="lazy ? 'lazy' : 'eager'"
            @load="onImageLoading"
            @error="onImageError"
        />
    </div>
</template>

<style lang="scss" scoped>
.base-image {
    img {
        aspect-ratio: inherit;
        // width: inherit;
        // height: inherit;
        object-fit: inherit;
    }
}
</style>
