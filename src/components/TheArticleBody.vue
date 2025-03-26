<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { fetchArticleById } from '@/services/articlesService'
import BaseTitle from './base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'
import IconUser from './icons/IconUser.vue'

const route = useRoute()

const { data: article, isFetching } = useQuery({
    queryKey: ['FetchArticleById'],
    queryFn: () => fetchArticleById(Number(route.params.id))
})
</script>

<template>
    <article class="article" v-if="article">
        <div class="article__wrap">
            <BaseImg :src="article.img" :alt="article.title" :width="1460" :height="780" />
            <div class="article__info">
                <BaseTitle :tag="'h1'" class="article__title">{{ article.title }}</BaseTitle>
            </div>
        </div>

        <div class="article__block">
            <p class="article__author">Posted by <IconUser /> {{ article.author }}</p>

            <span class="article__date"
                >Date: {{ article.date }} {{ new Date().getFullYear() }}</span
            >
            <p class="article__type">{{ article.type }}</p>
        </div>
        <div
            class="article__text"
            v-for="text in article.article_details"
            v-html="text.content"
        ></div>
    </article>
</template>

<style lang="scss" scoped>
.article {
    max-width: 880px;
    margin: 0 auto;
    margin-bottom: 100px;

    &__wrap {
        position: relative;
        margin-bottom: 26px;
        border-radius: 12px;
        overflow: hidden;
        &::after {
            content: '';
            pointer-events: none;

            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 70%);
            width: 100%;
            transition: transform 0.8s ease-in-out;
        }
    }

    &__title {
        position: absolute;
        z-index: 2;
        left: 26px;
        bottom: 26px;

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    &__block {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: var(--color-dark-second);
        padding: 20px 12px;
        margin-bottom: 26px;
    }

    &__author {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }

    &__type {
        background-color: var(--color-accent);
        padding: 2px 10px;
        border-radius: 4px;
        font-size: 14px;
    }

    &__text {
        color: rgba(255, 255, 255, 0.9);
    }
}
</style>
