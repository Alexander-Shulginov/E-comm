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
