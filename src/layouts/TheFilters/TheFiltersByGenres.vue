<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGenres } from '@/services/genresService'

const route = useRoute()
const router = useRouter()
const genresValue = ref([])
const isExpand = ref(false)

const { data: genres } = useQuery({
    queryKey: ['getGenres'],
    queryFn: () => fetchGenres()
})

watch(
    () => genresValue.value,
    (n) => {
        updateUrlQuery(router, {
            genres: n.join(','),
            page: 1
        })
    }
)

onMounted(() => {
    if (route.query.genres) {
        // @ts-ignore
        genresValue.value = route.query.genres.split(',')
    }
})
</script>

<template>
    <p class="filters__name">
        Genres
        <span v-show="genresValue.length > 0">({{ genresValue.length }})</span>
    </p>
    <ul class="filters__item" :class="{ 'filters__item--expanded': isExpand }">
        <li v-for="genre in genres" :key="genre.id">
            <BaseCheckbox
                :id="genre.slug"
                :text="genre.name"
                :value="genre.id"
                v-model="genresValue"
            />
        </li>
    </ul>
    <button @click="isExpand = !isExpand" class="filters__toggle" type="button">
        {{ isExpand ? 'Hide' : 'Show more' }}
    </button>
</template>
