<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue'
</script>

<template>
    <a href="#" target="_blank" class="git-link">
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
