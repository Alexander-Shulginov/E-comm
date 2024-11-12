<script setup lang="ts">
import { ref } from 'vue'

const orderValue = ref('')
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
</script>

<template>
    <select style="background-color: gray; margin-bottom: 25px" v-model="activeItem">
        <option style="background-color: black" :value="item" v-for="(item, key) in selectItems">
            {{ key }}
        </option>
    </select>
    <br />
    <select style="background-color: gray; margin-bottom: 25px" v-model="orderValue">
        <option value="newest">New</option>
        <option value="relevance">Old</option>
    </select>
</template>
