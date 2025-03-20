<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IListGames } from '@/types/interfaces/IGames'
import { removeUrlQuery, updateUrlQuery } from '@/utils/updateUrlQuery'

const props = defineProps<{
    isFetching: boolean
    games: IListGames | undefined
    refetch: Function
}>()

const route = useRoute()
const router = useRouter()

const page = computed(() => Number(route.query.page) || 1)

watch(
    () => route.query,
    () => props.refetch()
)

const increasePage = () => {
    if (props.games?.next) {
        updateUrlQuery(router, {
            page: page.value + 1
        })
    }
}

const decreasePage = () => {
    if (props.games?.prev) {
        updateUrlQuery(router, {
            page: page.value - 1
        })
    }
    if (page.value === 2) {
        removeUrlQuery(router, 'page')
    }
}
</script>

<template>
    <div v-if="games?.next && !isFetching" class="gamesNav">
        <button
            :disabled="games?.prev === null"
            @click="decreasePage"
            class="gamesNav__btn"
            type="button"
        >
            Prev
        </button>
        <button
            :disabled="games?.next === null"
            @click="increasePage"
            class="gamesNav__btn"
            type="button"
        >
            Next
        </button>
    </div>
</template>

<style lang="scss" scoped>
.gamesNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    &__btn {
        color: var(--color-light);
        flex-grow: 2;
        font-size: 16px;
        background-color: var(--color-dark-second);
        padding: 14px;
        border-radius: 6px;
        cursor: pointer;
    }

    &__btn:disabled {
        cursor: not-allowed;
        opacity: 0.8;
    }
}
</style>
