<script setup lang="ts"></script>

<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 24px;
    padding: 2px 0;
    display: flex;
    animation: l5-0 3s infinite steps(6);
    background:
        linear-gradient(var(--color-dark-second) 0 0) 0 0/0% 100% no-repeat,
        radial-gradient(circle 3px, var(--color-accent) 90%, var(--color-dark-second)) 0 0/20% 100%
            var(--color-dark-second);
    overflow: hidden;

    &::before {
        content: '';
        width: 20px;
        transform: translate(-100%);
        border-radius: 50%;
        background: var(--color-accent);
        animation:
            l5-1 0.25s 0.153s infinite steps(5) alternate,
            l5-2 3s infinite linear;
    }
}

@keyframes l5-1 {
    0% {
        clip-path: polygon(50% 50%, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 100%);
    }
    100% {
        clip-path: polygon(50% 50%, 100% 65%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 35%);
    }
}
@keyframes l5-2 {
    100% {
        transform: translate(90px);
    }
}
@keyframes l5-0 {
    100% {
        background-size:
            120% 100%,
            20% 100%;
    }
}
</style>
