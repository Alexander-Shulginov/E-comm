<script setup lang="ts">
defineProps<{
    id: number
    title: string
    img: string
    genre: string
    platform: string
    descr: string
}>()
</script>

<template>
    <v-card hover>
        <v-img :src="img" :alt="title" />
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-subtitle>
            {{ descr }}
        </v-card-subtitle>
        <v-card-actions>
            <v-card-text>
                {{ genre }}
            </v-card-text>
            <v-card-text>
                {{ platform }}
            </v-card-text>
        </v-card-actions>
    </v-card>
</template>

<style lang="scss" scoped></style>
