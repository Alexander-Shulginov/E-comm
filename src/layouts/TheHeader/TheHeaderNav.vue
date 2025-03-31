<template>
    <nav class="nav">
        <ul class="nav__items">
            <li>
                <RouterLink :to="{ name: 'Home' }" class="nav__item">Home</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Games', query: { page: 1 } }" class="nav__item"
                    >Games</RouterLink
                >
            </li>
            <li>
                <RouterLink :to="{ name: 'Genres' }" class="nav__item">Genres</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ name: 'Blog' }" class="nav__item">Blog</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;

    margin-left: auto;

    @media (max-width: 568px) {
    }

    &__items {
        display: flex;
        gap: 18px;

        @media (max-width: 568px) {
        }
    }

    &__item {
        @media (any-hover: hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }
    .router-link-active {
        border-bottom: 2px solid var(--color-accent);
    }
}
</style>
