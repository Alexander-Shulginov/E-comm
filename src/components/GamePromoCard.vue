<script setup lang="ts">
import BaseBtn from '@/components/UI/buttons/BaseBtn.vue'
import BaseText from '@/components/UI/BaseText.vue'
import BaseTitle from '@/components/UI/BaseTitle.vue'
</script>

<template>
    <div class="promoCard">
        <img class="promoCard__img" src="../assets/img/promo/promo-1.webp" alt="Promo img" />
        <div class="promoCard__wrapper">
            <BaseTitle :tag="'h3'" :is-bold="true" class="promoCard__title"
                >Title comp</BaseTitle
            >
            <BaseText class="promoCard__descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident id veniam
                incidunt commodi ullam aliquid ex. Voluptates id debitis repellat, doloremque
                dolorum repellendus omnis ab.
            </BaseText>
            <BaseBtn as="a" href="#" variant="accent">Details</BaseBtn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.promoCard {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    min-height: 300px;

    &::after {
        content: '';
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 80%);
        width: 100%;
        transition: transform 0.8s ease-in-out;
    }

    &__img {
        object-fit: cover;
    }

    &__wrapper {
        position: absolute;
        z-index: 2;
        bottom: 28px;
        left: 28px;

        @media (max-width: 1024px) {
            bottom: 20px;
            left: 20px;
        }
    }

    &__title {
        margin-bottom: 4px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    &__descr {
        padding-right: 20%;
        margin-bottom: 20px;

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        @media (max-width: 768px) {
            padding-right: 18px;
        }
    }
}
</style>
