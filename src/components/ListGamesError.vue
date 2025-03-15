<script setup lang="ts">
import IconErrorLogo from '@/components/icons/IconErrorLogo.vue'
</script>

<template>
    <div class="no-results">
        <IconErrorLogo :width="53" :height="64" />
        <pre>
███╗   ██╗ ██████╗     ██████╗ ███████╗███████╗██╗   ██╗██╗  ████████╗███████╗
████╗  ██║██╔═══██╗    ██╔══██╗██╔════╝██╔════╝██║   ██║██║  ╚══██╔══╝██╔════╝
██╔██╗ ██║██║   ██║    ██████╔╝█████╗  ███████╗██║   ██║██║     ██║   ███████╗
██║╚██╗██║██║   ██║    ██╔══██╗██╔══╝  ╚════██║██║   ██║██║     ██║   ╚════██║
██║ ╚████║╚██████╔╝    ██║  ██║███████╗███████║╚██████╔╝███████╗██║   ███████║
╚═╝  ╚═══╝ ╚═════╝     ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝   ╚══════╝
    </pre
        >
    </div>
</template>

<style lang="scss" scoped>
.no-results {
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    pre {
        font-size: 8px;
        text-align: center;
        user-select: none;
    }
}
</style>
