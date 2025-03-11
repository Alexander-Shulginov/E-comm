<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseLink from '@/components/UI/BaseLink.vue'
</script>

<template>
    <div class="emptyWishList">
        <div class="emptyWishList__icon">
            <svg
                class="emptyWishList__svg"
                width="120px"
                height="120px"
                fill="none"
                viewBox="0 0 785 717"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M391.647 691.667C411.853 691.667 423.27 674.03 455.817 639.5C496.5 596.34 535.727 556.12 564.207 525.907C648.303 436.703 681.367 402.853 704.83 376.443C767.19 306.26 775.28 208.743 732.99 134.714C679.67 41.3863 600.157 25 557.403 25C514.647 25 484.07 41.3863 430.07 83.5677L392.63 118.613L356.21 83.5677C297.63 33.496 255.215 25 227.98 25C205.281 25 110.463 25.0143 49.362 134.714C4.77901 214.757 28.0766 313.357 84.876 376.443C95.0463 387.74 136.961 431.66 209.698 510.733C238.983 542.573 280.421 586.357 310.927 619.607C328.21 638.447 371.437 691.667 391.647 691.667Z"
                    stroke="#f5f5f5"
                    stroke-width="50"
                />
            </svg>
        </div>

        <BaseTitle :tag="'h1'">This wishlist is empty</BaseTitle>
        <p>
            So far, your wishlist is empty.<br />
            On the "Games" page, you can find plenty of interesting games.
        </p>
        <BaseLink :to="{ name: 'Home' }" :size="'large'" :text="'Home'" />
    </div>
</template>

<style lang="scss" scoped>
.emptyWishList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    p {
        text-align: center;
        margin-bottom: 12px;
    }

    h1 {
        @media (max-width: 768px) {
            font-size: 24px;
        }
    }

    svg path {
        stroke-dasharray: 3000;
        stroke-dashoffset: 3000;
        animation: dash 3s linear forwards;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
}
</style>
