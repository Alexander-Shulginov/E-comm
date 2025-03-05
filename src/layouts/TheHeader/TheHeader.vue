<script setup lang="ts">
import BaseToggleColorTheme from '@/components/base/BaseToggleColorTheme.vue'
import BaseFavorites from '../../components/base/BaseFavorites.vue'
import BaseGitHubLink from '../../components/base/BaseGitHubLink.vue'
import BaseLogo from '../../components/base/BaseLogo.vue'
import TheHeaderNav from './TheHeaderNav.vue'
</script>

<template>
    <header class="header">
        <div class="header__inner">
            <BaseLogo />
            <TheHeaderNav />
            <!-- <BaseToggleColorTheme /> -->
            <BaseFavorites />
            <BaseGitHubLink />
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

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
