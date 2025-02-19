<script setup lang="ts">
import { fetchGameById } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'

const { data } = useQuery({
    queryKey: ['getGameById'],
    queryFn: () => fetchGameById(891521)
})
</script>

<template>
    <div>
        <div class="res"></div>
        <div v-if="data">
            {{ data }}
            <img :src="data.img" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
