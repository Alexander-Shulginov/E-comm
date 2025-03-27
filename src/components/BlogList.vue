<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchArticles } from '@/services/articlesService'
import BaseLoader from '@/components/base/BaseLoader.vue'
import CardArticle from './cards/CardArticle.vue'
import BaseTitle from './base/BaseTitle.vue'

const { data: articles, isFetching } = useQuery({
    queryKey: ['FetchArticles'],
    queryFn: () => fetchArticles()
})
</script>

<template>
    <div class="blog">
        <BaseTitle :tag="'h1'">Welcome to Our Blog!</BaseTitle>
        <p class="blog__text">
            Here, you'll find interesting and insightful articles on a variety of topics. We share
            new ideas, research, and practical tips to inspire fresh discoveries and solutions.
            Enjoy reading, learn something new, and stay with us!
        </p>
        <div v-if="articles" class="blog__content">
            <BaseLoader v-if="isFetching" />
            <CardArticle v-else v-for="article in articles" :key="article.id" :data="article" />
        </div>
    </div>
</template>

<style lang="scss">
.blog {
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 60px;
    &__text {
        color: var(--color-light-second);
        max-width: 780px;

        margin-bottom: 28px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    .cardArticle {
        @media (max-width: 768px) {
            height: 300px;
        }
        &::after {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
        }
        &__content {
            top: 50%;
            bottom: unset;
            transform: translate(-50%, -50%);
        }

        &__type {
            font-size: 18px;
            @media (max-width: 768px) {
                font-size: 14px;
            }
        }

        &__name {
            font-size: 36px;

            @media (max-width: 768px) {
                font-size: 22px;
            }
        }

        &__author {
            font-size: 20px;
            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
}
</style>
