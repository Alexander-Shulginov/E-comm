<script setup lang="ts">
defineProps<{
    state: boolean
}>()
</script>

<template>
    <nav class="nav" :class="state ? 'nav--open' : false">
        <ul class="nav__items">
            <li>
                <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Games', query: { page: 1 } }">Games</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Genres' }">Genres</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Blog' }">Blog</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;
    gap: 12px;

    margin-left: auto;
    margin-right: 12px;

    @media (max-width: 568px) {
        position: absolute;
        top: 105%;
        right: 0;
        z-index: 11;
        width: 100%;
        margin-right: unset;
        visibility: hidden;
        opacity: 0;
        transform: translateY(-25px);
        transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    }

    &--open {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    &__items {
        display: flex;
        gap: 18px;

        @media (max-width: 568px) {
            width: 100%;
            flex-direction: column;
            align-items: center;
            background-color: var(--color-dark-second);
            padding: 16px;
        }
    }
}
</style>
