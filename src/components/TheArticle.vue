<script setup lang="ts">
import { supabase } from '@/supabase/init'
import TheArticleNav from './TheArticleNav.vue'
import { onMounted, ref } from 'vue'

interface promoGame {
    item_id: number
    title: string
    descr: string
    img: string
}

const promoItems = ref<promoGame[] | null>([])

async function getPromoContent() {
    const { data, error } = await supabase.from('Promo-content').select('*')
    promoItems.value = data
}
onMounted(() => {
    getPromoContent()
})
</script>

<template>
    <div>
        <TheArticleNav />
        <!-- <div v-if="articles" v-for="i in articles">
            <span>{{ i.title }}</span>
            <span>{{ i.descr }}</span>
            <span>{{ i.item_id }}</span>
            <img v-if="i.img" :src="i.img" alt="" />
        </div> -->
    </div>
</template>

<style lang="scss" scoped></style>
