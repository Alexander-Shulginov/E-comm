<script setup lang="ts">
import { ref } from 'vue'
import IconToTop from '../icons/IconToTop.vue'
const percent = ref(0)

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight

    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

    percent.value = scrollPercentage
})

const scrollToTop = () => {
    window.scrollTo({ top: 0 })
}
</script>

<template>
    <div class="goTop">
        <button
            @click="scrollToTop"
            class="goTop__btn"
            type="button"
            :style="`background: conic-gradient(#6d4eec 0% ${percent}%, #212121 0% 100%)`"
        ></button>
        <div class="goTop__wrap">
            <IconToTop :width="18" :height="20" class="goTop__icon" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.goTop {
    position: sticky;
    bottom: 1%;
    left: 100%;
    z-index: 10;
    display: inline-flex;

    @media (any-hover: hover) {
        &:hover {
            .goTop__icon {
                opacity: 0.8;
            }
        }
    }

    &__btn {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
    }

    &__wrap {
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-dark-second);
        width: 80%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    &__icon {
        transition: opacity 0.2s ease-in-out;
    }
}
</style>
