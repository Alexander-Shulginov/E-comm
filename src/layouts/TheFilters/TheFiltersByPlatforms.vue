<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { updateUrlQuery } from '@/utils/updateUrlQuery';
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue';

const router = useRouter()
const platformValue = ref([])

watch(
    () => platformValue.value,
    (n) => {
        updateUrlQuery(router, {
            platforms: n.join(','),
            page: 1
        })
    }
)
</script>

<template>
    <BaseCheckbox :id="'pc-1'" :text="'base checkbox'" :value="'some-value'" v-model="platformValue" />
    <label for="1"> <input id="1" v-model="platformValue" value="3" type="checkbox" />Pc </label>
    <br />
    <label for="2"> <input id="2" v-model="platformValue" value="6" type="checkbox" />Xbox </label>
    <br />
    <label for="3">
        <input id="3" v-model="platformValue" value="7" type="checkbox" />PlayStation
    </label>
</template>

<style lang="scss" scoped></style>
