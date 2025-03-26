<script setup lang="ts">
import BlogSectionTop from '@/components/BlogSectionTop.vue'
import CardArticle from '@/components/cards/CardArticle.vue'
import { fetchArticles } from '@/services/articlesService'
import { useQuery } from '@tanstack/vue-query'

const { data: articleCard } = useQuery({
    queryKey: ['fetchArticleCards'],
    queryFn: () => fetchArticles()
})
</script>

<template v-if="articleCard">
    <section class="blogSection">
        <div class="blogSection__top">
            <BlogSectionTop />
        </div>
        <div class="blogSection__wrap">
            <CardArticle v-for="card in articleCard" :key="card.id" :data="card" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.blogSection {
    margin-bottom: 80px;

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 38px;
    }

    &__wrap {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
