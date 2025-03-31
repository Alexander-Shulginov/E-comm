<script setup lang="ts">
import BaseGitHubLink from '@/components/base/BaseGitHubLink.vue'
import BaseLogo from '@/components/base/BaseLogo.vue'
import TheHeaderNav from '@/layouts/TheHeader/TheHeaderNav.vue'
</script>

<template>
    <header ref="headerRef" class="header">
        <div class="header__inner">
            <BaseLogo />
            <TheHeaderNav class="header__nav" />
            <BaseGitHubLink class="header__gh" />
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

        gap: 18px;
        position: relative;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;

        @media (max-width: 768px) {
            gap: 18px;
        }

        @media (max-width: 568px) {
            gap: 8px;
        }
    }

    &__nav {
        grid-column: 3 / 4;
        grid-row: 1 / 2;

        @media (max-width: 568px) {
            grid-column: span 3;
            grid-row: 2 / 3;
            margin: 0 auto;
        }
    }

    &__gh {
        grid-column: 4 / 5;
        grid-row: 1 / 2;
        @media (max-width: 568px) {
            grid-column: 3 / 4;
            margin-left: auto;
        }
    }
}
</style>
