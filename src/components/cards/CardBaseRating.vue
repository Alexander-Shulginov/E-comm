<script setup lang="ts">
import { formatNumber } from '@/utils/formatNumber'
import IconStar from '@/components/icons/IconStar.vue'

defineProps<{
    rating: number
}>()
</script>

<template>
    <div v-if="rating !== undefined" class="cardBase__rating">
        <IconStar :width="18" :height="18" />
        <span class="cardBase__value">
            {{ formatNumber(rating) }}
        </span>
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
