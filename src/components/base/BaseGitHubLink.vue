<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue'
</script>

<template>
    <a href="https://github.com/Alexander-Shulginov/Games_World" target="_blank" class="git-link" aria-label="Github link">
        <IconGitHub />
    </a>
</template>

<style lang="scss" scoped>
.git-link {
    width: 22px;
    height: 22px;
    transition: opacity 0.2s ease-in-out;
    @media (any-hover: hover) {
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
