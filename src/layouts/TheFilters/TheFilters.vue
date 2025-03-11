<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const query = { ...router.currentRoute.value.query }

const urlParams = new URLSearchParams()

const platformValue = ref([])

const selectValue = ref('')

watch(
    () => selectValue.value,
    (n) => {
        urlParams.set('ordering', n)
        router.push({ query: Object.fromEntries(urlParams) })
    }
)
</script>

<template>
    <aside class="filters">
        Filters layout
        <input type="checkbox" name="test" id="test1" value="rating" />
        <br />
        <select v-model="selectValue" name="sort" id="22">
            <option value="-name">Name</option>
            <option value="released">Rel</option>
            <option value="-rating">Rating</option>
            <option value="-metacritic">Metacritic</option>
        </select>
        <br />
        <br />
        <label for="1">
            <input id="1" v-model="platformValue" value="pc" type="checkbox" />Pc
        </label>
        <br />
        <label for="2">
            <input id="2" v-model="platformValue" value="xbox" type="checkbox" />Xbox
        </label>
        <br />
        <label for="3">
            <input id="3" v-model="platformValue" value="playstation" type="checkbox" />PlayStation
        </label>
    </aside>
</template>

<style lang="scss" scoped>
.filters {
    border-radius: 4px;
    background-color: var(--color-dark-second);
}
</style>
