<script setup lang="ts">
import { removeUrlQuery, updateUrlQuery } from '@/utils/updateUrlQuery'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentYear = new Date().getFullYear()
const minYearToFilter = 1970

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

    if (target.value.length !== 4 || Number(target.value) < minYearToFilter) {
        target.value = target.value.replace(/\D/g, '').slice(0, 4)
        console.log('er')
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
                class="yearFilter__num"
                v-model="minYear"
                type="number"
                placeholder="1980"
                name="1"
                id="1"
            />
            <span class="yearFilter__tip">Min {{ minYearToFilter }}</span>
        </div>
        <div class="yearFilter__wrap">
            <input
                v-model="maxYear"
                class="yearFilter__num"
                :placeholder="String(currentYear)"
                type="number"
                name="2"
                id="2"
            />
            <span class="yearFilter__tip">Max {{ currentYear }}</span>
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
        // opacity: 0;
        // visibility: hidden;
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
