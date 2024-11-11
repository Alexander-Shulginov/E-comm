<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBooksStore } from '../store/booksStore'
import { focusState } from '../hooks/useFocus'

const bookStore = useBooksStore()
const selectItems = {
    All: '',
    Art: 'art',
    Biography: 'biography',
    Computers: 'computers',
    History: 'history',
    Meidcal: 'medical',
    Poetry: 'poetry'
}


const activeItem = ref<string>('')

watch(activeItem, (n) => {
    if (bookStore.lastQuery !== '') {
        bookStore.fetchBooks(bookStore.lastQuery, n)
    } else {
        focusState.focusInput()
        console.log('empty')
    }
})
</script>

<template>
    <select style="background-color: gray; margin-bottom: 25px;" v-model="activeItem">
        <option style="background-color: black" :value="item" v-for="(item, key) in selectItems">
            {{ key }}
        </option>
    </select>
</template>
