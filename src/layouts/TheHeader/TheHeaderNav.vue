<template>
    <nav class="nav">
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

    @media (max-width: 768px) {
        position: absolute;
        top: 105%;
        right: 0;
        z-index: 3;
        width: 100%;
        margin-right: unset;
    }

    &__items {
        display: flex;
        gap: 18px;

        @media (max-width: 768px) {
            width: 100%;
            flex-direction: column;
            align-items: center;
            background-color: var(--color-dark-second);
            padding: 16px;
        }
    }
}
</style>
