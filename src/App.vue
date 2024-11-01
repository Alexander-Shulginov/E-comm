<script setup lang="ts">
import { ref } from 'vue'
import { getBooks } from './services/booksService'

// onMounted(async () => {
//     const response = await getBooks()
//     if (response) {
//         console.log(response)
//         console.log(response.items[0].volumeInfo.title)
//         console.log(response.items[1].volumeInfo.title)
//         console.log(response.items[2].volumeInfo.title)
//     }
// })

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

interface VolumeInfo {
    title: string
    subtitle?: string
    authors?: string[]
    imageLinks: {
        thumbnail?: string
    }
    description?: string
}

interface Book {
    id: string
    volumeInfo: VolumeInfo
}

interface BooksResponse {
    items: Book[]
}

const books = ref<BooksResponse | null>(null)
const searchQuery = ref<string>('')

const getSearchResult = async () => {
    if (searchQuery.value === '' || /^\s*$/.test(searchQuery.value)) return
    books.value = await getBooks(searchQuery.value)
    console.log(books.value)
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
                <h1>Main Content</h1>
                <v-text-field
                    name="name"
                    label="Search"
                    v-model="searchQuery"
                    @keydown.enter="getSearchResult"
                ></v-text-field>

                <ul v-if="books">
                    <li v-for="book in books.items" :key="book.id" style="margin-bottom: 56px">
                        <p>{{ book.volumeInfo.title }}</p>
                        <p>{{ book.volumeInfo.subtitle }}</p>
                        <div v-if="book.volumeInfo.imageLinks">
                            <img :src="book.volumeInfo.imageLinks.thumbnail" alt="" />
                        </div>
                        <p>{{ book.volumeInfo.description }}</p>
                        <p v-for="author in book.volumeInfo.authors" :key="author">
                            <span>
                                {{ author }}
                            </span>
                        </p>
                        <!-- <p>{{ book.volumeInfo }}</p> -->
                    </li>
                </ul>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>
