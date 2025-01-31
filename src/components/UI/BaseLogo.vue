<script setup lang="ts">
import IconLogo from '../icons/IconLogo.vue'
</script>

<template>
    <a href="/" class="logo">
        <IconLogo />
        <span class="logo__text">GameWorld</span>
    </a>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
        width: 42px;
        height: 42px;

        @media (max-width: 768px){
            width: 32px;
            height: 32px;
        }
    }

    &__text {
        font-weight: 700;
        font-size: 28px;
        letter-spacing: -1px;
        @media (max-width: 768px){
            font-size: 16px;
        }
    }
}
</style>
