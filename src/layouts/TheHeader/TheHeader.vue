<script setup lang="ts">
import BaseGitHubLink from '@/components/base/BaseGitHubLink.vue'
import BaseLogo from '@/components/base/BaseLogo.vue'
import BaseBurger from '@/components/UI/BaseBurger.vue';
import TheHeaderNav from '@/layouts/TheHeader/TheHeaderNav.vue'
</script>

<template>
    <header class="header">
        <div class="header__inner">
            <BaseLogo />
            <TheHeaderNav />
            <BaseGitHubLink />
            <BaseBurger />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--color-dark-second);
    margin-bottom: 38px;

    @media (max-width: 768px) {
        margin-bottom: 18px;
    }

    &__inner {
        max-width: 1440px;
        margin: 0 auto;
        padding: 16px 15px;

        position: relative;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
