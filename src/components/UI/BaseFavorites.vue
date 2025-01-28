<script setup lang="ts">
import IconFavorites from '../icons/IconFavorites.vue'
</script>

<template>
    <a href="#" class="favorites-link">
        <IconFavorites />
        <span>|</span>
    </a>
</template>

<style lang="scss" scoped>
.favorites-link {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 12px;
}
</style>
