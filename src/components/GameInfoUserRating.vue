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
                <div :style="`--item-height: ${rating.percent}%`"  class="userRating__percent"></div>
                <div class="userRating__title">{{ rating.title }}</div>
                <div class="userRating__count">{{ rating.percent.toFixed() }}%</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.userRating {
    &__block {
        display: flex;
        gap: 36px;
    }

    &__percent {
        width: 16px;
        height: var(--item-height);
    }

    &__item {
        height: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    &__item:nth-child(1) .userRating__percent {
        background-color: #4CAF50;
    }

    &__item:nth-child(2) .userRating__percent {
        background-color: #FFC107;
    }

    &__item:nth-child(3) .userRating__percent {
        background-color: #2196F3;
    }

    &__item:nth-child(4) .userRating__percent {
        background-color: #F44336;
    }
}
</style>
