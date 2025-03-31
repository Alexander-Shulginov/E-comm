<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'
import { IBlogCard } from '@/types/interfaces/IBlogCard'

defineProps<{
    data: IBlogCard
}>()
</script>

<template>
    <router-link :to="{ name: 'Article', params: { id: data.id } }" class="cardArticle">
        <div class="cardArticle__img-wrap">
            <BaseImg
                :src="data.img"
                :width="500"
                :height="600"
                :alt="data.title"
                class="cardArticle__img"
            />
        </div>
        <div class="cardArticle__date">
            <div class="cardArticle__date-value">{{ data.date }}</div>
        </div>

        <div class="cardArticle__content">
            <span class="cardArticle__type">{{ data.type }}</span>
            <div class="cardArticle__name">
                {{ data.title }}
            </div>
            <div class="cardArticle__author">Posted by {{ data.author }}</div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.cardArticle {
    display: block;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--color-dark-base);
    border-radius: 12px;
    min-height: 300px;
    &:focus-visible {
        .cardArticle__img {
            transform: scale(1.05);
        }
    }

    @media (any-hover: hover) {
        &:hover {
            .cardArticle__img {
                transform: scale(1.05);
            }
        }
    }

    &::after {
        content: '';
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 70%);
        width: 100%;
        transition: transform 0.8s ease-in-out;
    }

    &__img-wrap {
        overflow: hidden;
        border-radius: 12px;
        height: 100%;
    }

    &__img {
        object-fit: cover;
        transition: transform 0.6s ease-in-out;
    }

    &__date {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: var(--color-dark-second);
        padding: 6px 16px;

        @media (max-width: 768px) {
            top: 16px;
            left: 16px;
        }
    }

    &__date-value {
        width: 33px;
        text-align: center;
        text-transform: uppercase;
        font-size: 12px;
    }

    &__date-value::first-line {
        font-size: 22px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    &__content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        width: 100%;
        padding: 0 12px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 6px;

        @media (max-width: 768px) {
            bottom: 16px;
        }
    }

    &__type {
        background-color: var(--color-accent);
        padding: 2px 12px;
        font-size: 14px;
        border-radius: 4px;
    }

    &__name {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    &__author {
        color: var(--color-light-second);
        font-size: 13px;
    }
}
</style>
