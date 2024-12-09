<script setup lang="ts">
import { onMounted } from 'vue'
import TheHeader from './layouts/TheHeader.vue'
// import { getAllGames, getGameByCategory, getGameById, getGameByPlatform, getGameSortedBy } from './services/gamesService'
onMounted(async () => {
    // const data = await getGameById(1)
    // console.log(data)
})
</script>

<template>
    <v-app :theme="'dark'">
        <TheHeader />

        <v-main>
            <v-container>
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>
