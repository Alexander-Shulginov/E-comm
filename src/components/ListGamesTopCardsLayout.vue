<script setup lang="ts">
import IconCardLayoutDots3 from './icons/cards-layouts/IconCardLayoutDots3.vue'
import IconCardLayoutDots4 from './icons/cards-layouts/IconCardLayoutDots4.vue'
import IconCardLayoutLines from './icons/cards-layouts/IconCardLayoutLines.vue'
</script>

<template>
    <div class="cardsLayouts">
        <button class="cardsLayouts__btn" type="button">
            <IconCardLayoutLines />
        </button>
        <button class="cardsLayouts__btn" type="button">
            <IconCardLayoutDots3 />
        </button>
        <button class="cardsLayouts__btn" type="button">
            <IconCardLayoutDots4 />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.cardsLayouts {
    display: flex;
    align-items: center;
    gap: 24px;

    &__btn {
        background-color: transparent;
    }
}
</style>
