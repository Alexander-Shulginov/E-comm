<script setup lang="ts">
defineProps<{
    links: {
        links: { text: string; url: string }[]
    }
}>()
</script>

<template>
    <ul class="footer__list">
        <li v-for="text in links.links">
            <a class="footer__link" href="#">{{ text.text }}</a>
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
    }
}
</style>
