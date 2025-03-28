<script setup lang="ts">
import BaseGitHubLink from '@/components/base/BaseGitHubLink.vue'
import BaseLogo from '@/components/base/BaseLogo.vue'
import BaseBurger from '@/components/UI/BaseBurger.vue'
import TheHeaderNav from '@/layouts/TheHeader/TheHeaderNav.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const menuIsOpen = ref(false)
const headerRef = ref<Node | null>(null)

const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value
}
const handleClickOutside = (event: Event) => {
    const target = event.target as Node
    if (menuIsOpen.value && !headerRef.value?.contains(target)) {
        menuIsOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <header ref="headerRef" class="header">
        <div class="header__inner">
            <BaseLogo />
            <TheHeaderNav :state="menuIsOpen" />
            <BaseGitHubLink class="header__gh" />
            <BaseBurger :state="menuIsOpen" @click="toggleMenu" class="header__burger" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--color-dark-second);
    margin-bottom: 38px;

    @media (max-width: 768px) {
        margin-bottom: 18px;
    }

    &__inner {
        max-width: 1440px;
        margin: 0 auto;
        padding: 16px 15px;

        position: relative;

        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            gap: 12px;
        }
    }

    &__burger {
        display: none;
        @media (max-width: 568px) {
            display: block;
        }
    }

    &__gh {
        @media (max-width: 568px) {
            margin-left: auto;
        }
    }
}
</style>
