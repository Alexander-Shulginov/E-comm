<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { fetchArticleById } from '@/services/articlesService'
import BaseTitle from './base/BaseTitle.vue'
import BaseImg from './base/BaseImg.vue'

const route = useRoute()

const { data: article, isFetching } = useQuery({
    queryKey: ['FetchArticleById'],
    queryFn: () => fetchArticleById(Number(route.params.id))
})
</script>

<template>
    <article class="article" v-if="article">
        <BaseImg :src="article.img" :alt="article.title" :width="1460" :height="780" />
        <BaseTitle :tag="'h1'" class="article__title">{{ article.title }}</BaseTitle>
        <p class="article__author">{{ article.author }}</p>
        <span class="article__date">{{ article.date }}</span>
        <p class="article__type">{{ article.type }}</p>
        <div class="article__text" v-for="text in article.article_details" v-html="text.content"></div>

        <BaseImg
            v-for="img in article.article_images"
            :src="img.src"
            :alt="article.title"
            :width="1460"
            :height="780"
        />
    </article>
</template>

<style lang="scss" scoped></style>
