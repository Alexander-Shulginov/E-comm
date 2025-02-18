<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    isBold?: boolean
}

const props = defineProps<IProps>()

const classes = computed(() => ['title', props.isBold && 'title--bold'])
</script>

<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<style lang="scss" scoped>
.title {
    font-family: var(--font-second);
    font-weight: 600;

    &--bold {
        font-weight: 700;
    }
}

h1.title {
    font-size: 36px;

    @media (max-width: 768px) {
        font-size: 28px;
    }
}

h2.title {
    font-size: 28px;
}

h3.title {
    font-size: 24px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
}

h4.title {
    font-size: 18px;
}

h5.title {
    font-size: 16px;
}
</style>
