<script setup lang="ts">
import { ref } from 'vue'
import BaseTitle from '@/components/base/BaseTitle.vue'

const isCompact = ref<boolean>(true)

const toggleContent = () => {
    isCompact.value = !isCompact.value
}
</script>

<template>
    <section class="project-info">
        <div
            class="project-info__content"
            :class="isCompact ? 'project-info__content--compact' : false"
        >
            <BaseTitle :tag="'h3'">
                Discover the World of Games: New Releases, Hits, and Exclusives
            </BaseTitle>
            <p>
                The gaming industry is evolving rapidly, and we help you stay up to date with all
                the latest events. On our site, you'll find reviews of the most anticipated
                releases, rankings of popular games, and exclusive insights into game development.
            </p>
            <p>
                We keep track of global trends and highlight major changes shaping the industry. Be
                the first to learn about exciting announcements, upcoming releases, and
                groundbreaking technologies transforming gameplay.
            </p>
            <p>
                If you're looking for top games, fresh news, and in-depth analysis, you've come to
                the right place.
            </p>
            <br />
            <BaseTitle :tag="'h3'">
                Everything About Gaming: Genres, Platforms, and Trends
            </BaseTitle>
            <p>
                Every gamer has their own path—whether it's thrilling RPG adventures, intense
                shooters, or strategic puzzles.
            </p>
            <p>
                We help you navigate the vast world of gaming, offering recommendations and
                comparisons across different platforms.
            </p>
            <p>
                Want to know which game will become a hit or which ones to avoid? Our reviews and
                expert articles provide valuable insights to help you make the right choice. Stay
                informed about the latest industry developments, explore gaming history, analyze
                trends, and become part of the gaming community with us.
            </p>
        </div>
        <button @click="toggleContent" class="project-info__btn" type="button">
            {{ isCompact ? 'Show more' : 'Show less' }}
        </button>
    </section>
</template>

<style lang="scss" scoped>
.project-info {
    margin-bottom: 50px;
    position: relative;

    &__btn {
        cursor: pointer;
        position: absolute;
        bottom: -46px;
        left: 0;
        z-index: 2;
        background-color: transparent;
        color: var(--color-light);
        font-weight: 700;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.9);

        border-bottom: 2px solid var(--color-accent);

        @media (any-hover: hover) {
            &:hover {
                color: rgba(255, 255, 255);
            }
        }
    }

    &__content {
        overflow: hidden;
        position: relative;
        &::after {
            content: '';
            width: 100%;
            height: 80%;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            pointer-events: none;
        }

        h3 {
            margin-bottom: 14px;
        }

        p {
            color: rgba(255, 255, 255, 0.8);
        }

        p:not(:last-child) {
            margin-bottom: 6px;
        }
    }

    &__content--compact {
        height: 180px;
        &::after {
            background-image: linear-gradient(
                180deg,
                rgba(20, 20, 20, 0) 0%,
                rgba(20, 20, 20, 1) 100%
            );
        }
    }
}
</style>
