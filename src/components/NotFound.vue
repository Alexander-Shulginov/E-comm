<script setup lang="ts">
import BaseBtn from './UI/buttons/BaseBtn.vue'
import { vGlitch } from 'vue-powerglitch'

const glitchOptions = {
    timing: { duration: 6000, easing: 'ease-in-out' },
    shake: { amplitudeX: 0.05, amplitudeY: 0.05 }
}
</script>

<template>
    <div class="notFound">
        <pre v-glitch="glitchOptions">
                     ██╗  ██╗ ██████╗ ██╗  ██╗                               
                     ██║  ██║██╔═████╗██║  ██║                               
                     ███████║██║██╔██║███████║                               
                     ╚════██║████╔╝██║╚════██║                               
                          ██║╚██████╔╝     ██║                               
                         ╚═╝ ╚═════╝      ╚═╝                               
                                                                            
███╗   ██╗ ██████╗ ████████╗    ███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ 
████╗  ██║██╔═══██╗╚══██╔══╝    ██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗
██╔██╗ ██║██║   ██║   ██║       █████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║
██║╚██╗██║██║   ██║   ██║       ██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║
██║ ╚████║╚██████╔╝   ██║       ██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝
╚═╝  ╚═══╝ ╚═════╝    ╚═╝       ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ 
    </pre
        >

        <BaseBtn :as="'a'" :variant="'accent'" href="/">Go To Home</BaseBtn>
    </div>
</template>

<style lang="scss" scoped>
.notFound {
    text-align: center;
    overflow: hidden;

    @media (max-width: 768px) {
        font-size: 5px;
    }
}
</style>
