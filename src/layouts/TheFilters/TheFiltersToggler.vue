<script setup lang="ts">
import BaseBurger from '@/components/UI/BaseBurger.vue'
defineEmits<{
    click: boolean
}>()
</script>

<template>
    <div class="filtersToggle">
        <BaseBurger class="closeFilters" @click.stop="$emit('click')" />
    </div>
</template>

<style lang="scss" scoped>
.closeFilters {
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (any-hover: hover) {
        &:hover {
            svg {
                fill: var(--color-accent);
            }
        }
    }
}
</style>
