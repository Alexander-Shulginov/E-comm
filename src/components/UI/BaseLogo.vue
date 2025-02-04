<script setup lang="ts">
import IconLogo from '../icons/IconLogo.vue'
</script>

<template>
    <a href="/" class="logo">
        <img src="../../assets/img/logo/logo3.png" width="60" height="60" />
        <!-- <span class="logo__text">GameWorld</span> -->
        <IconLogo />
    </a>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 6px;

    img {
        width: 52px;
        height: 52px;
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
