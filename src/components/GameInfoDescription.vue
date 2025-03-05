<script setup lang="ts"></script>

<template>
    <div class="game-description">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.game-description {
    margin-bottom: 60px;

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
}
</style>
