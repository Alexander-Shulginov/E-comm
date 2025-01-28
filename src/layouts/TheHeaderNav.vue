<script setup lang="ts"></script>

<template>
    <nav class="nav">
        <ul class="nav__items">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#">Games</a>
            </li>
        </ul>
    </nav>
    <span>|</span>
</template>

<style lang="scss" scoped>
.nav {
    &__items {
        display: flex;
        gap: 12px;
    }
}
</style>
