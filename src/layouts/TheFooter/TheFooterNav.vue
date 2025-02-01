<script setup lang="ts">
import BaseTitle from '../../components/UI/BaseTitle.vue'
import TheFooterNavList from './TheFooterNavList.vue'

const footerNav = [
    {
        title: 'Useful Links',
        links: [
            { text: 'About Us', url: '/' },
            { text: 'Contact Us', url: '/' },
            { text: 'Blog', url: '/' },
            { text: 'FAQs', url: '/' }
        ]
    },
    {
        title: 'Games',
        links: [
            { text: 'PC', url: '/' },
            { text: 'PlayStation 5', url: '/' },
            { text: 'Xbox Series X|S', url: '/' },
            { text: 'Nintendo Switch', url: '/' }
        ]
    },
    {
        title: 'Social Links',
        links: [
            { text: 'Instagram', url: '/' },
            { text: 'Twitter', url: '/' },
            { text: 'YouTube', url: '/' }
        ]
    }
]
</script>

<template>
    <nav class="footer__nav">
        <div class="footer__column" v-for="link in footerNav">
            <BaseTitle :tag="'h4'" :is-bold="true" class="footer__subtitle">{{
                link.title
            }}</BaseTitle>
            <TheFooterNavList :links="link" />
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.footer {
    &__nav {
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 480px) {
            flex-direction: column;
            gap: 28px;
        }
    }

    &__subtitle {
        margin-bottom: 18px;
    }
}
</style>
