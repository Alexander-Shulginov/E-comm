<script setup lang="ts"></script>

<template>
    <div class="yearFilter">
        <input class="yearFilter__num" type="number" placeholder="1980" name="1" id="1" />
        <input
            class="yearFilter__num"
            :placeholder="String(new Date().getFullYear())"
            type="number"
            name="2"
            id="2"
        />
        <button class="yearFilter__submit" type="button">
            <span class="yearFilter__icon"></span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.yearFilter {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    &__num {
        appearance: none;
        width: 85px;

        color: var(--color-light);
        background-color: transparent;
        flex-grow: 2;

        border: 1px solid var(--color-light);
        border-radius: 4px;
        text-align: center;

        padding: 8px 0;
        font-size: 16px;
    }

    &__submit {
        position: relative;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
        height: 100%;
        width: 36px;
        color: var(--color-light);
        background-color: var(--color-accent);
        padding: 8px 0;

        transition: background-color 0.3s ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                background-color: var(--color-accent-hover);
            }
        }
    }

    &__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%) rotate(-45deg);
        width: 13px;
        height: 6px;
        border-bottom: 2px solid var(--color-light);
        border-left: 2px solid var(--color-light);
    }
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
}
</style>
