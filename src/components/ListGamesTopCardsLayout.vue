<script setup lang="ts">
import { ref } from 'vue'

import IconCardLayoutLines from '@/components/icons/cards-layouts/IconCardLayoutLines.vue'
import IconCardLayoutDots3x3 from '@/components/icons/cards-layouts/IconCardLayoutDots3x3.vue'
import IconCardLayoutDots4x4 from '@/components/icons/cards-layouts/IconCardLayoutDots4x4.vue'

const isActive = ref<boolean>(false)
</script>

<template>
    <div class="cardsLayouts">
        <button class="cardsLayouts__btn" type="button">
            <IconCardLayoutLines />
        </button>
        <button class="cardsLayouts__btn" type="button">
            <IconCardLayoutDots3x3 />
        </button>
        <button class="cardsLayouts__btn cardsLayouts__btn--active" type="button">
            <IconCardLayoutDots4x4 />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.cardsLayouts {
    display: flex;
    align-items: center;
    gap: 18px;

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: transparent;
        opacity: 0.8;
        svg {
            fill: var(--color-light-second);
        }

        @media (any-hover: hover) {
            &:hover {
                svg {
                    fill: var(--color-light);
                }
            }
        }
    }

    &__btn--active {
        opacity: 1;
        svg {
            fill: var(--color-accent);
        }
        @media (any-hover: hover) {
            &:hover {
                svg {
                    fill: var(--color-accent);
                }
            }
        }
    }
}
</style>
