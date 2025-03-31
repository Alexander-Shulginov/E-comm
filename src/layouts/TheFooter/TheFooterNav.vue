<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'
import TheFooterNavList from '@/layouts/TheFooter/TheFooterNavList.vue'

const footerNav = [
    {
        title: 'Useful Links',
        links: [
            {
                text: 'Games',
                url: { name: 'Games' }
            },
            {
                text: 'Genres',
                url: { name: 'Genres' }
            },
            {
                text: 'Blog',
                url: { name: 'Blog' }
            }
        ]
    },
    {
        title: 'Games',
        links: [
            {
                text: 'PC',
                url: {
                    name: 'Games',
                    query: { parent_platforms: 1 }
                }
            },
            {
                text: 'PlayStation',
                url: {
                    name: 'Games',
                    query: { parent_platforms: 2 }
                }
            },
            {
                text: 'Xbox',
                url: {
                    name: 'Games',
                    query: { parent_platforms: 3 }
                }
            },
            {
                text: 'Nintendo',
                url: {
                    name: 'Games',
                    query: { parent_platforms: 7 }
                }
            }
        ]
    },
    {
        title: 'Social Links',
        links: [
            {
                text: 'Instagram',
                url: { name: 'Home' }
            },
            {
                text: 'Twitter',
                url: { name: 'Home' }
            },
            {
                text: 'YouTube',
                url: { name: 'Home' }
            }
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
            flex-wrap: wrap;
            gap: 28px;
        }
    }

    &__subtitle {
        margin-bottom: 18px;
    }
}
</style>
