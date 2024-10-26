<script setup lang="ts">
import { ref } from 'vue'
import FilterSelect from './components/FilterSelect.vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
    <q-layout view="HHH LpR lFf">
        <q-header reveal class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <!-- <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                    </q-avatar> -->
                    E-commerce
                </q-toolbar-title>
                <div class="row q-gutter-md">
                    <router-link to="/">Home</router-link>
                    <router-link to="/product">Product</router-link>
                    <router-link to="/cart">Cart</router-link>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
            <!-- drawer content -->
            <FilterSelect />
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer reveal elevated class="bg-grey-8 text-white"> </q-footer>
    </q-layout>
</template>

<style scoped lang="scss"></style>
