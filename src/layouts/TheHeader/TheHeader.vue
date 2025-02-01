<script setup lang="ts">
import BaseFavorites from '../../components/UI/BaseFavorites.vue'
import BaseGitHubLink from '../../components/UI/BaseGitHubLink.vue'
import BaseLogo from '../../components/UI/BaseLogo.vue'
import TheHeaderNav from './TheHeaderNav.vue'
</script>

<template>
    <header class="header">
        <div class="header__inner">
            <BaseLogo />
            <TheHeaderNav />
            <BaseFavorites />
            <BaseGitHubLink />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--color-dark-second);
    margin-bottom: 68px;

    &__inner {
        max-width: 1440px;
        margin: 0 auto;
        padding: 20px 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
