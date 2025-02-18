<script setup lang="ts">
import AllCategoryList from './AllCategoryList.vue'
import BaseTitle from './base/BaseTitle.vue'
import GamePromo from './GamePromo.vue'
</script>

<template>
    <section class="allCategory">
        <BaseTitle :tag="'h1'" class="allCategory__title">Categories</BaseTitle>
        <AllCategoryList class="allCategory__genres" />
        <GamePromo />
    </section>
</template>

<style lang="scss" scoped>
.allCategory {
    &__title {
        margin-bottom: 36px;
        @media (max-width: 768px) {
            margin-bottom: 26px;
        }
    }

    &__genres {
        margin-bottom: 106px;

        @media (max-width: 768px) {
            margin-bottom: 60px;
        }
    }
}
</style>
