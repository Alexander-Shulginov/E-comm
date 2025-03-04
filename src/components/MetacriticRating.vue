<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    value: number
}>()

const classes = computed(() => {
    return [
        'metacritic-rating',
        props.value >= 40 && props.value < 69 ? 'metacritic-rating--normal' : false,
        props.value < 40 ? 'metacritic-rating--low' : false
    ]
})
</script>

<template>
    <div :class="classes">
        {{ value }}
    </div>
</template>

<style lang="scss" scoped>
.metacritic-rating {
    flex-shrink: 0;
    background-color: #00ce7a;
    border-radius: 6px;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;

    &--normal {
        background-color: #ffbd3f;
    }

    &--low {
        background-color: #ff6874;
    }
}
</style>
