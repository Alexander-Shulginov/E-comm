<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'
import someimg from '@/assets/img/main/atomic.webp'
</script>

<template>
    <router-link :to="{ name: 'Article' }" class="cardArticle">
        <BaseImg :src="someimg" :width="500" :height="600" :alt="'test'" class="cardArticle__img" />
        <div class="cardArticle__date">
            <span class="cardArticle__date-day">28</span>
            <span class="cardArticle__date-month">jun</span>
        </div>

        <div class="cardArticle__content">
            <span class="cardArticle__type">Article</span>
            <div class="cardArticle__name">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fuga!
            </div>
            <div class="cardArticle__author">Posted by Mr.Mario</div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.cardArticle {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    min-height: 300px;

    &::after {
        content: '';
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
        width: 100%;
        transition: transform 0.8s ease-in-out;
    }

    &__img {
        object-fit: cover;
        border-radius: 12px;
    }

    &__date {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: var(--color-dark-second);
        padding: 6px 16px;

        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 768px) {
            top: 16px;
            left: 16px;
        }
    }

    &__date-day {
        font-size: 24px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    &__date-month {
        text-transform: uppercase;
        font-size: 12px;
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
