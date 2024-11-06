<script setup lang="ts">
defineProps<{
    text: string
    variant: string
}>()
</script>

<template>
    <component :is="variant" class="base-title">
        <slot> {{ text }}</slot>
    </component>
</template>

<style lang="scss" scoped>
.base-title {
    margin-bottom: 26px;
    line-height: 1.3;

    @media (max-width: 768px) {
        margin-bottom: 18px;
    }
}
// h1.base-title { }

// h2.base-title { }
</style>
