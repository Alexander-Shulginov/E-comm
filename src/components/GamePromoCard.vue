<script setup lang="ts">
import BaseBtn from './UI/BaseBtn.vue'
import BaseTitle from './UI/BaseTitle.vue'
</script>

<template>
    <div class="promoCard">
        <div class="promoCard__wrapper">
            <BaseTitle :tag="'h3'" :is-bold="true" :class="'11'">Title comp</BaseTitle>
            <p class="promoCard__descr">Descr</p>
            <BaseBtn as="a" href="#" variant="accent" target="_blank">Details</BaseBtn>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
