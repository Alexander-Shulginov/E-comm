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
        <span>|</span>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;
    gap: 12px;

    margin-left: auto;
    margin-right: 12px;

    &__items {
        display: flex;
        gap: 12px;
    }
}
</style>
