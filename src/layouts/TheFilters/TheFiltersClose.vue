<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
defineEmits<{
    click: boolean
}>()

</script>

<template>
    <button @click="$emit('click')" class="closeFilters" type="button">
        <IconClose :width="26" :height="26" />
    </button>
</template>

<style lang="scss" scoped>
.closeFilters {
    cursor: pointer;
    display: block;
    margin-left: auto;
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
