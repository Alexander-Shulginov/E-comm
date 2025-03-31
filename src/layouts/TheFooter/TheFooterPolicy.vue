<script setup lang="ts">
import BaseText from '@/components/base/BaseText.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="footer__policy">
        <BaseText :size="'small'" :color="'second'">Released under the MIT License.</BaseText>

        <BaseText :size="'small'" :color="'second'">
            Copyright ©
            {{ currentYear }}
            <a href="https://github.com/Alexander-Shulginov" target="_blank">Alexander Shulginov</a>
        </BaseText>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    &__policy {
        max-width: 1440px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
        opacity: 0.9;

        a {
            text-decoration: underline;
        }
    }
}
</style>
