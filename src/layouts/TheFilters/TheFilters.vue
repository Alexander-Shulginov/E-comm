<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const updateURL = (event: any) => {
    const isChecked = event.target.checked
    const query = { ...router.currentRoute.value.query }

    if (isChecked) {
        query['ordering'] = '-rating'
    } else {
        delete query['ordering']
    }

    router.push({ query })
}
</script>

<template>
    <aside class="filters">
        Filters layout
        <input type="checkbox" name="test" id="test1" value="-rating" @change="updateURL" />
    </aside>
</template>

<style lang="scss" scoped>
.filters {
    border-radius: 4px;
    background-color: var(--color-dark-second);
}
</style>
