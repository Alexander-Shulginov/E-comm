<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchPlatforms } from '@/services/platformsService'

const route = useRoute()
const router = useRouter()
const platformValue = ref([])

const { data: platforms } = useQuery({
    queryKey: ['getPlatforms'],
    queryFn: () => fetchPlatforms()
})

watch(
    () => platformValue.value,
    (n) => {
        updateUrlQuery(router, {
            parent_platforms: n.join(','),
            page: 1
        })
    }
)

onMounted(() => {
    if (route.query.parent_platforms) {
        // @ts-ignore
        platformValue.value = route.query.parent_platforms.split(',')
    }
})
</script>

<template v-if="platforms">
    <BaseCheckbox
        v-for="platform in platforms?.results"
        :id="platform.slug"
        :text="platform.name"
        :value="platform.id"
        v-model="platformValue"
    />
</template>

<style lang="scss" scoped>
.filters__name {
    font-weight: 700;
    font-size: 18px;
}
</style>
