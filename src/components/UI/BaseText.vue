<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    type?: 'large'
}

const props = defineProps<IProps>()

const classes = computed(() => [
    'base-text',
    props.type && 'base-text--large'
])
</script>

<template>
    <p :class="classes">
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>
.base-text {
    color: var(--color-light);
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    &--large {
        font-size: 18px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
}
</style>
