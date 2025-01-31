<script setup lang="ts">
import BaseLogo from '../components/UI/BaseLogo.vue'
import BaseText from '../components/UI/BaseText.vue'
import TheFooterNav from './TheFooterNav.vue'
</script>

<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__info">
                <BaseLogo />
                <BaseText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto
                    consequatur a laboriosam ipsam adipisci animi.
                </BaseText>
            </div>
            <TheFooterNav />
        </div>
        <div class="footer__bottom">
            <div class="footer__links">
                <a href="">GitHub</a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: var(--color-dark-second);
    &__inner {
        display: flex;
        gap: 80px;
        max-width: 1440px;
        margin: 0 auto;
        padding: 50px 15px;
    }

    &__info {
        width: 380px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;
    }

    &__bottom {
        padding: 16px 0;
        border-top: 1px solid var(--color-light);
    }

    &__links {
        max-width: 1440px;
        margin: 0 auto;
    }
}
</style>
