<script setup lang="ts">
import { removeUrlQuery, updateUrlQuery } from '@/utils/updateUrlQuery'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentYear = new Date().getFullYear()
const minYearToFilter = 1970

let isError = ref(false)

let minYear = ref(minYearToFilter)
let maxYear = ref(currentYear)

const filterByYearsSubmit = () => {
    updateUrlQuery(router, {
        dates: `${minYear.value}-01-01,${maxYear.value}-12-31`
    })
}

const resetFiltersByYears = () => {
    minYear.value = minYearToFilter
    maxYear.value = currentYear
    removeUrlQuery(router, 'dates')
}

const validateMinValue = (e: Event) => {
    const target = e.target as HTMLInputElement

    target.value = target.value.replace(/\D/g, '')
    if (Number(target.value) < minYearToFilter) {
        isError.value = true
    } else if (maxYear.value < minYear.value) {
        isError.value = true
    } else if (Number(target.value) > currentYear) {
        minYear.value = currentYear
        target.value = String(currentYear)
        isError.value = false
    } else {
        isError.value = false
    }
}

const validateMaxValue = (e: Event) => {
    const target = e.target as HTMLInputElement

    target.value = target.value.replace(/\D/g, '')
    if (Number(target.value) < minYearToFilter) {
        isError.value = true
    } else if (maxYear.value < minYear.value) {
        isError.value = true
    } else if (Number(target.value) > currentYear) {
        maxYear.value = currentYear
        target.value = String(currentYear)
        isError.value = false
    } else {
        isError.value = false
    }
}

const handleBlurMinValue = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (Number(target.value.length) < 4) {
        minYear.value = minYearToFilter
        target.value = String(minYearToFilter)
        isError.value = false
    }
}

const handleBlurMaxValue = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (Number(target.value.length) < 4) {
        maxYear.value = currentYear
        target.value = String(currentYear)
        isError.value = false
    }
}

onMounted(() => {
    if (route.query.dates) {
        const years = (route.query.dates as string)
            .split(',')
            .map((date: string) => new Date(date).getFullYear())
        minYear.value = years[0]
        maxYear.value = years[1]
    }
})
</script>

<template>
    <div class="yearFilter">
        <div class="yearFilter__wrap">
            <input
                @input="validateMinValue"
                @blur="handleBlurMinValue"
                class="yearFilter__num"
                v-model="minYear"
                type="text"
                :min="String(minYearToFilter)"
                :max="String(currentYear)"
                :placeholder="String(minYearToFilter)"
                maxlength="4"
                name="1"
                id="1"
            />
            <span class="yearFilter__tip" :class="{ 'yearFilter__tip--active': isError }"
                >Min {{ minYearToFilter }}</span
            >
        </div>
        <div class="yearFilter__wrap">
            <input
                @input="validateMaxValue"
                @blur="handleBlurMaxValue"
                v-model="maxYear"
                class="yearFilter__num"
                :min="String(minYearToFilter)"
                :max="String(currentYear)"
                :placeholder="String(currentYear)"
                maxlength="4"
                type="number"
                name="2"
                id="2"
            />
            <span class="yearFilter__tip" :class="{ 'yearFilter__tip--active': isError }"
                >Max {{ currentYear }}</span
            >
        </div>
        <button @click="filterByYearsSubmit" class="yearFilter__submit" type="button">
            <span class="yearFilter__icon"></span>
        </button>
        <button @click="resetFiltersByYears" class="yearFilter__submit" type="button">
            <span class="yearFilter__reset">X</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.yearFilter {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin-bottom: 10px;

    &__wrap {
        position: relative;
    }

    &__tip {
        position: absolute;
        bottom: -32px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;

        width: 100%;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.2s ease-in-out,
            visibility 0.2s ease-in-out;
        background-color: var(--color-accent);
        padding: 2px 6px;
        border-radius: 2px;

        &::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            width: 0px;
            height: 0px;
            border-style: solid;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent var(--color-accent) transparent;
            transform: rotate(0deg) translateX(-50%);
        }
    }

    &__tip--active {
        visibility: visible;
        opacity: 1;
    }

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
        height: 36px;
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
