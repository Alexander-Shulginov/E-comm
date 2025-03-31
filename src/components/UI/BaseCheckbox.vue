<script setup lang="ts">
defineProps<{
    id: string
    text: string
    value: number
    isDisabled?: false
}>()

const platformsModel = defineModel()
</script>

<template>
    <div class="baseCheckbox">
        <div class="baseCheckbox__wrap">
            <input
                class="baseCheckbox__input"
                type="checkbox"
                v-model="platformsModel"
                :id="id"
                :value="value"
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
    gap: 8px;
    cursor: pointer;
    @media (any-hover: hover) {
        &:hover {
            .baseCheckbox__label {
                color: var(--color-accent);
            }
        }
    }

    &__wrap {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        position: relative;
    }

    &__input {
        width: 100%;
        height: 100%;
        appearance: none;
        border: 1px solid rgba(255, 255, 255, 0.85);
        border-radius: 3px;
        cursor: pointer;
    }

    &__input:checked {
        background-color: var(--color-accent);
    }

    &__input:checked ~ .baseCheckbox__icon {
        opacity: 1;
    }

    &__icon {
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 9px;
        overflow: hidden;
        opacity: 0;
        transform: translate(-50%, -60%) rotate(45deg) scale(1);
        border-right: 2px solid rgba(255, 255, 255, 0.85);
        border-bottom: 2px solid rgba(255, 255, 255, 0.85);
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    &__label {
        width: 100%;
        color: rgba(255, 255, 255, 0.85);
        cursor: pointer;

        transition: color 0.3s ease-in-out;
    }
}
</style>
