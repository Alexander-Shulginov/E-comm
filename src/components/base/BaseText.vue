<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
    size?: 'large' | 'small'
    color?: 'second'
}

const props = defineProps<IProps>()

const classes = computed(() => [
    'base-text',
    props.size === 'large' && 'base-text--large',
    props.size === 'small' && 'base-text--small',
    props.color && 'base-text--second'
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

    &--small {
        font-size: 13px;
    }

    &--large {
        font-size: 18px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }

    &--second {
        color: var(--color-light-second);
    }
}
</style>
