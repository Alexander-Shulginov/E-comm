<script setup lang="ts">
import IconCardLayoutLines from '@/components/icons/cards-layouts/IconCardLayoutLines.vue'
import IconCardLayoutDots3x3 from '@/components/icons/cards-layouts/IconCardLayoutDots3x3.vue'
import { onMounted } from 'vue'
import { useLocalStorage } from '@/hooks/useLocalStorage'
// import IconCardLayoutDots4x4 from '@/components/icons/cards-layouts/IconCardLayoutDots4x4.vue'

const radioValue = defineModel()

let initLayoutValue

const {setToLocalStorage, getLocalStorageItem} = useLocalStorage()
onMounted(() => {
    // setToLocalStorage('layout', 'columns')
    initLayoutValue = getLocalStorageItem('layout')
    console.log(initLayoutValue)
})

</script>

<template>
    <div class="cardsLayouts">
        <div class="cardsLayouts__wrap">
            <input type="radio" name="cards-layout" :value="'layout-row'" v-model="radioValue" class="cardsLayouts__radio" >
                <IconCardLayoutLines class="cardsLayouts__icon" />
            </input>
        </div>
        <div class="cardsLayouts__wrap">
            <input class="cardsLayouts__radio" type="radio" name="cards-layout" checked  v-model="radioValue" :value="null">
                <IconCardLayoutDots3x3 class="cardsLayouts__icon" />
            </input>
        </div>
        <!-- <div class="cardsLayouts__wrap">
            <input class="cardsLayouts__radio" type="radio" name="cards-layout">
                <IconCardLayoutDots4x4 class="cardsLayouts__icon" />
            </input>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.cardsLayouts {
    display: flex;
    align-items: center;
    gap: 14px;

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
        transform: translate(-50%,-50%);
        fill: var(--color-light-second);
    }
}
</style>
