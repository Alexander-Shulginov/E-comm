<script setup lang="ts">
import { useFormatDate } from '../hooks/useFormatDate'

defineProps<{
    id: number
    title: string
    img: string
    genre: string
    published: string
    descr: string
    release: string
}>()

const { formatDate } = useFormatDate()
</script>

<template>
    <v-card hover style="height: 200px;">
        <div class="d-flex flex-xs-column w-100">
            <!-- <v-img class="flex-grow-0 w-sm-25 w-xs-50" :src="img" :alt="title" /> -->
            <img :src="img" alt="" loading="lazy" height="200">
            <div class="d-flex flex-column w-100">
                <v-card-title>
                    {{ title }}
                </v-card-title>
                <v-card-subtitle class="text-wrap">
                    {{ descr }}
                </v-card-subtitle>
                <div class="d-flex flex-grow-2 mt-auto w-100">
                    <v-card-text>
                        {{ genre }}
                    </v-card-text>
                    <v-card-text class="text-no-wrap text-center">
                        {{ published }}
                    </v-card-text>
                    <v-card-text class="text-no-wrap text-end">
                        {{ formatDate(release) }}
                    </v-card-text>
                </div>
            </div>
        </div>
    </v-card>
</template>

<style lang="scss" scoped></style>
