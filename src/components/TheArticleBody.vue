<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { fetchArticleById } from '@/services/articlesService'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseImg from '@/components/base/BaseImg.vue'
import IconUser from '@/components/icons/IconUser.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'

const route = useRoute()

const { data: article, isFetching } = useQuery({
    queryKey: ['FetchArticleById'],
    queryFn: () => fetchArticleById(Number(route.params.id))
})
</script>

<template>
    <div class="article-wrapper">
        <BaseLoader v-if="isFetching" />
        <article class="article" v-else-if="article">
            <div class="article__wrap">
                <BaseImg :src="article.img" :alt="article.title" :width="1460" :height="780" />
                <div class="article__info">
                    <BaseTitle :tag="'h1'" class="article__title">{{ article.title }}</BaseTitle>
                </div>
            </div>

            <div class="article__block">
                <p class="article__author">Posted by <IconUser /> {{ article.author }}</p>

                <span class="article__date"
                    >Published: {{ article.date }} {{ new Date().getFullYear() }}</span
                >
                <p class="article__type">{{ article.type }}</p>
            </div>
            <div
                class="article__text"
                v-for="text in article.article_details"
                v-html="text.content"
            ></div>
        </article>
    </div>
</template>

<style lang="scss">
.article-wrapper {
    position: relative;
    min-height: 120vh;
}
.article {
    max-width: 880px;
    margin: 0 auto;
    margin-bottom: 100px;

    @media (max-width: 1024px) {
        margin-bottom: 80px;
    }

    @media (max-width: 768px) {
        margin-bottom: 60px;
    }

    &__wrap {
        position: relative;
        margin-bottom: 26px;
        border-radius: 12px;
        overflow: hidden;

        @media (max-width: 768px){
            border-radius: 8px;
        }
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

        @media (max-width: 768px) {
            left: 14px;
            bottom: 14px;
        }
    }

    &__block {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: var(--color-dark-second);
        padding: 20px 12px;
        margin-bottom: 26px;

        @media (max-width: 768px) {
            flex-wrap: wrap;
            gap: 18px;
        }
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

        img {
            aspect-ratio: 16 / 9;
        }
    }
}
</style>
