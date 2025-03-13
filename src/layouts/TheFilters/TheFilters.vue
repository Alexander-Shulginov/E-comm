<script setup lang="ts">
import { updateUrlQuery } from '@/utils/updateUrlQuery'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import TheFiltersByPlatforms from './TheFiltersByPlatforms.vue'

const router = useRouter()

const selectValue = ref('')

watch(
    () => selectValue.value,
    (n) => {
        updateUrlQuery(router, {
            ordering: n,
            page: 1
        })
    }
)

</script>

<template>
    <aside class="filters">
        <TheFiltersByPlatforms />
        <!-- <select v-model="selectValue" name="sort" id="22">
            <option value="-name">Name</option>
            <option value="released">Rel</option>
            <option value="-rating">Rating</option>
            <option value="-metacritic">Metacritic</option>
        </select> -->
    </aside>
</template>

<style lang="scss" scoped>
.filters {
    border-radius: 4px;
    background-color: var(--color-dark-second);
    padding: 16px;
}
</style>
