<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '../services/productService'
import { Product } from '../types/productType'
import TheBreadcrumbs from '../components/TheBreadcrumbs.vue'

const route = useRoute()
const product = ref<Product | null>(null)
const productId = Number(route.params.id)
onMounted(async () => {
    product.value = await getProductById(productId)
})
</script>

<template>
    <div v-if="product" class="proudct-page">
        <TheBreadcrumbs :current-category="String(product?.category)" :product-name="product?.title" />
        <q-page class="q-pa-sm">
            <div class="row justify-center q-pa-md q-gutter-md">
                <q-img
                    class="col-xs-12 col-md-5"
                    style="max-height: 350px"
                    :src="product.image"
                    :fit="'contain'"
                    :ratio="3 / 4"
                    spinner-color="primary"
                    spinner-size="24px"
                />

                <div class="col-xs-12 col-md-6">
                    <div class="text-h3 lt-md:text-h6 q-mb-sm">{{ product.title }}</div>
                    <q-rating
                        class="q-mb-sm"
                        color="yellow-6"
                        size="1.2rem"
                        icon="star_border"
                        icon-selected="star"
                        readonly
                        :model-value="product.rating.rate"
                    ></q-rating>
                    <p class="text-body1 q-mb-lg">{{ product.description }}</p>
                    <div class="row justify-between q-mb-lg">
                        <div class="text-h5 text-weight-bold">
                            {{ product.price }}
                            $
                        </div>
                        <q-btn class="q-px-lg" color="primary"> Buy </q-btn>
                    </div>
                </div>
            </div>
        </q-page>
    </div>
</template>

<style scoped></style>
