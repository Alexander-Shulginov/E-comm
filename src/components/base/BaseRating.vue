<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    rating: number
}>()


const ratingStyle = computed(() => ({
    '--percent': `${(props.rating / 5) * 100}%`
}))
</script>

<template>
    <div class="rating-base" :style="ratingStyle"></div>
</template>

<style lang="scss" scoped>
.rating-base {

    display: inline-block;
    font-size: 20px;
    line-height: 1;

    &::before {
        content: '★★★★★';
        letter-spacing: 3px;
        background: linear-gradient(90deg, #ed8a19 var(--percent), #ffffff37 var(--percent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>
