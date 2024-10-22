<script setup lang="ts">
defineProps<{
    id: number
    price: number
    title: string
    image: string
    rating: number
    description: string
}>()
</script>

<template>
    <q-card rounded bordered>
        <q-img fit="contain" class="q-mt-md" height="220px" :src="image" />

        <q-card-section>
            <div style="line-height: 1.1" class="text-h6 text-weight-bold q-mb-sm title--clamp">
                {{ title }}
            </div>
            <div class="q-mb-sm descr--clamp">{{ description }}</div>
            <div class="row justify-between">
                <q-rating
                    color="yellow-6"
                    size="1.2rem"
                    icon="star_border"
                    icon-selected="star"
                    readonly
                    :model-value="rating"
                ></q-rating>
                <div class="text-body1 text-weight-bold">
                    {{ price }}
                    $
                </div>
            </div>
        </q-card-section>

        <q-card-actions style="">
            <q-btn class="fit" color="primary"> Buy </q-btn>
        </q-card-actions>
    </q-card>
</template>

<style scoped lang="scss">
.title--clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.descr--clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
