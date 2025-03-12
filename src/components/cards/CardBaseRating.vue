<script setup lang="ts">
import { formatNumber } from '@/utils/formatNumber'
import IconStar from '@/components/icons/IconStar.vue'

defineProps<{
    rating: number
}>()
</script>

<template>
    <div v-if="rating > 0" class="cardBase__rating">
        <span class="cardBase__value">
            {{ formatNumber(rating) }}
        </span>
        <IconStar :width="16" :height="16" />
    </div>
</template>

<style lang="scss" scoped>
.cardBase {
    &__rating {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: auto;
    }
}
</style>
