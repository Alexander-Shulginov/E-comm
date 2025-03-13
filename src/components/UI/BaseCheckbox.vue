<script setup lang="ts">
defineProps<{
    id: string
    text: string
    value: string
    isDisabled?: false
}>()
</script>

<template>
    <div class="baseCheckbox">
        <div class="baseCheckbox__wrap">
            <input
                @click="console.log('1')"
                class="baseCheckbox__input"
                :id="id"
                :value="value"
                type="checkbox"
                :disabled="isDisabled"
            />
            <div class="baseCheckbox__icon">+</div>
        </div>
        <label class="baseCheckbox__label" :for="id">{{ text }}</label>
    </div>
</template>

<style lang="scss" scoped>
.baseCheckbox {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    &__wrap {
        width: 18px;
        height: 18px;
        position: relative;
    }

    &__input {
        width: 100%;
        height: 100%;
        appearance: none;
        border: 1px solid rgba(255, 255, 255, 0.85);
        border-radius: 3px;
    }

    &__input:checked {
        background-color: var(--color-accent);
    }

    &__input:checked + .baseCheckbox__icon {
        visibility: visible;
        opacity: 1;
    }

    &__icon {
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // visibility: hidden;
        // opacity: 0;

        // &::after {
        //     content: "";

        // }
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 10px;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(0deg) scale(0);
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transition: all 0.3s ease;
    }

    &__label {
        color: rgba(255, 255, 255, 0.85);
    }
}
</style>
