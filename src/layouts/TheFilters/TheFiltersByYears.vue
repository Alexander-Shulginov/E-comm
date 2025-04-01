<script setup lang="ts">
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentYear = new Date().getFullYear()
const minYearToFilter = 1970

let sendRequest = ref(false)
let isError = ref(false)

let minYear = ref(minYearToFilter)
let maxYear = ref(currentYear)

const validateInputValue = (e: Event) => {
    const target = e.target as HTMLInputElement
    target.value = target.value.replace(/\D/g, '')

    if (Number(target.value) < minYearToFilter || Number(target.value) > currentYear) {
        isError.value = true
    } else {
        isError.value = false
        sendRequest.value = true
    }
}

const handleBlurMinValue = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (
        Number(target.value.length) < 4 ||
        Number(target.value) < minYearToFilter ||
        Number(target.value) > currentYear
    ) {
        minYear.value = minYearToFilter
        target.value = String(minYearToFilter)
        isError.value = false
    }
}

const handleBlurMaxValue = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (
        Number(target.value.length) < 4 ||
        Number(target.value) < minYearToFilter ||
        Number(target.value) > currentYear
    ) {
        maxYear.value = currentYear
        target.value = String(currentYear)
        isError.value = false
    }
}

watch(
    () => route.query.dates,
    () => {
        if (route.query.dates === undefined) {
            minYear.value = minYearToFilter
            maxYear.value = currentYear
        }
    }
)

watch(
    () => sendRequest.value,
    (newValue) => {
        if (newValue) {
            updateUrlQuery(router, {
                dates: `${minYear.value}-01-01,${maxYear.value}-12-31`,
                page: 1
            })
            sendRequest.value = false
        }
    }
)

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
                @input="validateInputValue"
                @blur="handleBlurMinValue"
                class="yearFilter__num"
                v-model="minYear"
                type="text"
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
                @input="validateInputValue"
                @blur="handleBlurMaxValue"
                v-model="maxYear"
                class="yearFilter__num"
                :placeholder="String(currentYear)"
                maxlength="4"
                type="text"
                name="2"
                id="2"
            />
            <span class="yearFilter__tip" :class="{ 'yearFilter__tip--active': isError }"
                >Max {{ currentYear }}</span
            >
        </div>
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
        width: 100%;
        outline: 2px solid transparent;
        outline-offset: 3px;
        border-radius: 5px;
        transition: outline-color 0.2s ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                outline-color: var(--color-accent);
            }
        }
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
        width: 100%;

        color: var(--color-light);
        background-color: transparent;

        border: 1px solid var(--color-light);
        border-radius: 4px;
        text-align: center;

        padding: 8px 0;
        font-size: 16px;
    }
}
</style>
