<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
import BaseBurger from '@/components/UI/BaseBurger.vue'
defineEmits<{
    click: boolean
}>()
</script>

<template>
    <div class="filtersToggle">
        <!-- <button @click="$emit('click')" class="closeFilters" type="button">
            <IconClose :width="26" :height="26" />
        </button> -->
        <BaseBurger class="closeFilters" @input.stop="$emit('click')" />
    </div>
</template>

<style lang="scss" scoped>
.closeFilters {
    cursor: pointer;
    margin-left: auto;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: var(--color-dark-second);
// 
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    @media (any-hover: hover) {
        &:hover {
            svg {
                fill: var(--color-accent);
            }
        }
    }
}
</style>
