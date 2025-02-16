<script setup lang="ts">
import { ref } from 'vue'
import IconArrow from '../icons/IconArrow.vue'
import IconToTop from '../icons/IconToTop.vue'

const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
)

const windowHeight = window.innerHeight
let res = ref<number>(0)

window.addEventListener('scroll', (event) => {
    const scrollPercentage = (window.scrollY / (documentHeight - windowHeight)) * 100

    res.value = Number(scrollPercentage.toFixed())
})
</script>

<template>
    <div class="goTop" :style="`background: conic-gradient(#6d4eec 0% ${res}%, #212121 0% 100%)`">
        <div class="goTop__wrap">
            <IconToTop :width="24" :height="24" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.goTop {
    width: 56px;
    height: 56px;
    position: fixed;
    bottom: 10%;
    right: 26px;
    z-index: 10;
    border-radius: 50%;

    background-color: gray;
    cursor: pointer;

    &__wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color-dark-second);
        width: 80%;
        height: 80%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
