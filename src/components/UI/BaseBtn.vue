<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
    as: 'a' | 'button'
    variant: 'accent' | 'base'
    href?: string
}

const props = defineProps<IProps>()

const classes = computed(() => [
    'btn-base',
    props.variant === 'accent' && 'btn-base--accent',
    props.variant === 'base' && 'btn-base--base'
])
</script>

<template>
    <component :class="classes" :is="as" :href v-bind="$attrs">
        <slot></slot>
    </component>
</template>

<style lang="scss" scoped>
.btn-base {
    display: inline-flex;
    align-items: center;

    min-height: 40px;

    padding: 5px 20px;
    border-radius: 35px;

    text-transform: capitalize;
    line-height: 1.2;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: var(--color-light);

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &--accent {
        background-color: var(--color-accent);

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-accent-hover);
            }
        }
    }

    &--base {
        min-height: 36px;
        padding: 5px 16px;
        font-size: 13px;
        background-color: var(--color-dark-second);

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-dark-second-hover);
            }
        }
    }
}
</style>
