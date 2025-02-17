<script setup lang="ts">
import WishListIsEmpty from '@/components/WishListIsEmpty.vue'
// import { vGlitch } from 'vue-powerglitch'
</script>

<template>
    <section class="wishList">
        <WishListIsEmpty />
    </section>
</template>

<style lang="scss" scoped>
.wishList {
    padding: 48px 0;
    @media (max-width: 768px) {
        padding-top: 24px;
    }
}
</style>
