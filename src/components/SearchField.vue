<script setup lang="ts">
import { ref, watch } from 'vue'
import { fetchGames } from '@/services/gamesService'
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import { useQuery } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import IconClose from '@/components/icons/IconClose.vue'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(route.query.search || '')
let timeout: any = null

useQuery({
    queryKey: ['searchGames', route.query],
    queryFn: () => fetchGames({ page_size: 20, page: 1, ...route.query }),
    staleTime: 1000 * 60 * 5
})

const clearInput = () => {
    searchQuery.value = ''
}

watch(
    () => searchQuery.value,
    (newValue) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            updateUrlQuery(router, { search: newValue })
        }, 500)
    }
)
</script>

<template>
    <div class="searchField">
        <input
            class="searchField__input"
            v-model="searchQuery"
            type="text"
            placeholder="Search games"
        />
        <span v-show="searchQuery" @click="clearInput" class="searchField__clear">
            <IconClose :width="24" :height="24" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.searchField {
    position: relative;

    &__input {
        background-color: var(--color-dark-second);
        padding: 16px 60px 16px 24px;
        border-radius: 26px;
        width: 100%;

        color: var(--color-light);
        font-size: 16px;
    }

    &__clear {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

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
