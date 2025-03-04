<script setup lang="ts">
defineProps<{
    user_rating: {
        id: number
        title: string
        count: number
        percent: number
    }[]
}>()
</script>

<template>
    <div v-if="user_rating" class="userRating">
        <div class="userRating__block">
            <div v-for="rating in user_rating" :key="rating.id" class="userRating__item">
                <div class="userRating__wrap">
                    <div class="userRating__title">{{ rating.title }}</div>
                    <div class="userRating__percent">{{ rating.percent.toFixed() }}%</div>
                </div>
                <div :style="`--item-width: ${rating.percent}%`" class="userRating__value"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.userRating {
    &__block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    &__value {
        height: 10px;
        width: var(--item-width);
        border-radius: 8px;
    }

    &__title {
        text-align: left;
        text-transform: capitalize;
    }

    &__percent {
        font-size: 14px;
    }

    &__wrap {
        width: 150px;
        display: flex;
        gap: 6px;
        align-items: center;
        justify-content: space-between;
    }

    &__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
    }

    &__item:nth-child(1) .userRating__value {
        background-color: #4caf50;
    }

    &__item:nth-child(2) .userRating__value {
        background-color: #ffc107;
    }

    &__item:nth-child(3) .userRating__value {
        background-color: #2196f3;
    }

    &__item:nth-child(4) .userRating__value {
        background-color: #f44336;
    }
}
</style>
