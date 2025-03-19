<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleBurger = () => {
    isOpen.value = !isOpen.value
}

const mediaQuery = window.matchMedia('(max-width: 1024px)')

const handleMediaChange = (e: any) => {
    isOpen.value = false
}

mediaQuery.addEventListener('change', handleMediaChange)
handleMediaChange(mediaQuery)
</script>

<template>
    <button @click="toggleBurger" class="burger" :class="{ 'burger--active': isOpen }">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<style lang="scss" scoped>
.burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
    transform: scale(0.7);

    span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: var(--color-light);
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
    }

    span:nth-of-type(1) {
        top: 0px;
        transform-origin: left center;
    }

    span:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        transform-origin: left center;
    }

    span:nth-of-type(3) {
        top: 100%;
        transform-origin: left center;
        transform: translateY(-100%);
    }

    &--active span:nth-of-type(1) {
        transform: rotate(45deg);
        top: 0px;
        left: 5px;
    }

    &--active span:nth-of-type(2) {
        width: 0%;
        opacity: 0;
    }

    &--active span:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 28px;
        left: 5px;
    }
}
</style>
