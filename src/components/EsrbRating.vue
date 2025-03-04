<script setup lang="ts">
import { type Component } from 'vue'
import IconEsrbAdult from '@/components/icons/esrb/IconEsrbAdult.vue'
import IconEsrbEveryone from '@/components/icons/esrb/IconEsrbEveryone.vue'
import IconEsrbEveryone10 from '@/components/icons/esrb/IconEsrbEveryone10.vue'
import IconEsrbMature from '@/components/icons/esrb/IconEsrbMature.vue'
import IconEsrbPending from '@/components/icons/esrb/IconEsrbPending.vue'
import IconEsrbTeen from '@/components/icons/esrb/IconEsrbTeen.vue'

defineProps<{
    esrb?: {
        id: number
    }
}>()

const esrbRatingsIcons: Record<number, Component> = {
    1: IconEsrbEveryone,
    2: IconEsrbEveryone10,
    3: IconEsrbTeen,
    4: IconEsrbMature,
    5: IconEsrbAdult,
    6: IconEsrbPending
}
</script>

<template>
    <component v-if="esrb" :is="esrbRatingsIcons[esrb?.id]" />
</template>

<style lang="scss" scoped></style>
