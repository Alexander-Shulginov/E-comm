<script setup lang="ts">
import IconCardLayoutLines from '@/components/icons/cards-layouts/IconCardLayoutLines.vue'
import IconCardLayoutDots3x3 from '@/components/icons/cards-layouts/IconCardLayoutDots3x3.vue'
import { onMounted, watch } from 'vue'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const radioValue = defineModel()

const { setToLocalStorage, getLocalStorageItem } = useLocalStorage()

onMounted(() => {
    const savedLayout = getLocalStorageItem('layout')
    if (savedLayout) {
        radioValue.value = savedLayout
    } else {
        radioValue.value = 'layout-column'
        setToLocalStorage('layout', radioValue.value)
    }
})

watch(
    () => radioValue.value,
    (newValue) => {
        setToLocalStorage('layout', newValue)
    }
)
</script>

<template>
    <div class="cardsLayouts">
        <div class="cardsLayouts__wrap">
            <label class="cardsLayouts__label" for="layout-row">
                <input
                    type="radio"
                    name="cards-layout"
                    id="layout-row"
                    value="layout-row"
                    v-model="radioValue"
                    class="cardsLayouts__radio"
                />
                <IconCardLayoutLines class="cardsLayouts__icon" />
            </label>
        </div>
        <div class="cardsLayouts__wrap">
            <label class="cardsLayouts__label" for="layout-column">
                <input
                    type="radio"
                    name="cards-layout"
                    id="layout-column"
                    value="layout-column"
                    v-model="radioValue"
                    class="cardsLayouts__radio"
                />
                <IconCardLayoutDots3x3 class="cardsLayouts__icon" />
            </label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardsLayouts {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: auto;

    &__wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (any-hover: hover) {
            &:hover {
                .cardsLayouts__icon {
                    fill: var(--color-light);
                }
            }
        }
    }

    &__label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__radio {
        appearance: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background-color: transparent;
    }

    &__radio:checked ~ .cardsLayouts__icon {
        fill: var(--color-accent);
    }

    &__icon {
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: var(--color-light-second);
    }
}
</style>
