<script setup lang="ts">
import BaseGitHubLink from '../components/UI/BaseGitHubLink.vue'
import BaseLogo from '../components/UI/BaseLogo.vue'
import TheHeaderNav from './TheHeaderNav.vue'
</script>

<template>
    <header class="header">
        <BaseLogo />
        <TheHeaderNav />
        <BaseGitHubLink />
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--color-dark-second);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
