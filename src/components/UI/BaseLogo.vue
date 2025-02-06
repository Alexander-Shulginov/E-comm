<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
    <a href="/" class="logo">
        <img src="@/assets/img/logo/logo.png" width="60" height="60" alt="Main logo" />
        <IconLogo />
    </a>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-right: 2px;

    img {
        width: 48px;
        height: 48px;
        object-fit: contain;

        @media (max-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }

    &__text {
        font-weight: 700;
        font-size: 28px;
        letter-spacing: -1px;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
}
</style>
