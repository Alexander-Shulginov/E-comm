<script setup lang="ts">
import TheFooterNav from './TheFooterNav.vue'
import TheFooterPolicy from './TheFooterPolicy.vue';
import TheFooterSlogan from './TheFooterSlogan.vue';
</script>

<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__slogan">
                <TheFooterSlogan />
            </div>
            <TheFooterNav />
        </div>
        <div class="footer__bottom">
            <TheFooterPolicy />
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

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 40px;
        }
    }

    &__slogan {
        width: 380px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &__bottom {
        padding: 16px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.8);
    }

}
</style>
