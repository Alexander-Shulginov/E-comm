<script setup lang="ts">
defineProps<{
    links: {
        links: { text: string; url: {} }[]
    }
}>()
</script>

<template>
    <ul class="footer__list">
        <li v-for="link in links.links">
            <router-link :to="link.url" class="footer__link">{{ link.text }}</router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.footer {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__link {
        color: var(--color-light-second);
        @media (max-width: 480px) {
            font-size: 13px;
        }

        @media (any-hover:hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }
}
</style>
