<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue'
</script>

<template>
    <div class="pagination">
        <button class="pagination__arrow pagination__arrow--left" type="button">
            <IconArrow :width="12" :height="12" :is-left="true" />
        </button>
        <div class="pagination__wrap">
            <div class="pagination__left">
                <button class="pagination__num pagination__num--active" type="button">1</button>
                <button class="pagination__num" type="button">2</button>
                <button class="pagination__num" type="button">3</button>
            </div>
            <!-- <span class="pagination__mid">...</span> -->
            <div class="pagination__right">
                ...
                <button class="pagination__num" type="button">10</button>
                <button class="pagination__num" type="button">11</button>
            </div>
        </div>
        <button class="pagination__arrow pagination__arrow--right" type="button">
            <IconArrow :width="12" :height="12" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &__num,
    &__arrow {
        font-size: 16px;
        color: var(--color-light);
        padding: 8px 12px;
        font-family: var(--font-second);
        border-radius: 3px;
        cursor: pointer;

        transition: background-color 0.2s ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-dark-second);
            }
        }
    }

    &__num--active {
        background-color: var(--color-accent);
        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-accent);
            }
        }
    }

    &__wrap {
        display: flex;
        align-items: center;
        gap: 2px;
    }

    &__arrow {
        //!
        font-size: 16px;
        color: var(--color-light);
        padding: 8px;
    }
}
</style>
