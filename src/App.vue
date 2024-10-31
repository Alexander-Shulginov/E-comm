<script setup lang="ts">
import { onMounted, ref } from 'vue'

// onMounted(async () => {
//     const response = await fetch('http://localhost:3000/sneakers/')
//     sneakers.value = await response.json()
//     console.log(sneakers.value.length)
//     if (sneakers) {
// uniqueBrands.value = new Set(sneakers.value.map((sneaker) => sneaker.designer))
//     }
// })
// <div v-if="sneakers.length > 0">
//     <div v-for="sneaker in sneakers" :key="sneaker.id" class="sneaker-item">
//         <ol>
//             <li>
//                 {{ uniqueBrands }}
//             </li>
//         </ol>
//     </div>
// </div>

let themeIsDark = ref(false)

const toggleTheme = () => {
    themeIsDark.value = !themeIsDark.value
}
</script>

<template>
    <v-app :theme="themeIsDark ? 'dark' : 'light'">
        <v-app-bar class="px-3">
            <v-spacer></v-spacer>
            <v-btn @click="toggleTheme" color="info" text="Toggle Theme" slim></v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
                <h1>Main Content</h1>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>
