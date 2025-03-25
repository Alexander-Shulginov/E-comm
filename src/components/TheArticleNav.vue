<script setup lang="ts"></script>

<template>
    <nav class="articleNav">
        <ul class="articleNav__list">
            <li>
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Home' }">Articles</router-link>
            </li>
            <li>Current</li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.articleNav {
    &__list {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    li:last-child {
        opacity: 0.7;
    }
}
</style>
