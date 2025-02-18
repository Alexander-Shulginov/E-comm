<script setup lang="ts">
import IconFavorites from '@/components/icons/IconFavorites.vue'
</script>

<template>
    <RouterLink :to="{ name: 'WishList' }" class="favorites-link">
        <IconFavorites :width="22" :height="22" />
        <span>|</span>
    </RouterLink>
</template>

<style lang="scss" scoped>
.favorites-link {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 12px;
}
</style>
