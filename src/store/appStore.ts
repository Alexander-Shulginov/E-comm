import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getNewStories, getItem } from '../services/api'
import { IStories } from '../types/Stories'

export const appStore = defineStore('appStore', () => {
    let newStories = ref<IStories[] | undefined>(undefined)
    let isLoading = ref(false)
    let isError = ref(false)
    let errorMessage = ref('')

    async function fetchNewStories() {
        isLoading.value = true
        isError.value = false
        errorMessage.value = ''
        try {
            const storyIds = await getNewStories()
            const lastNews = storyIds.slice(-100)
            newStories.value = (await Promise.allSettled(lastNews.map((n: number) => getItem(n))))
                .filter((result) => result.status === 'fulfilled')
                .map((result: any) => result.value)
        } catch (e: any) {
            isError.value = true
            errorMessage.value = 'Some error'
        } finally {
            isLoading.value = false
        }
    }

    return {
        fetchNewStories,
        newStories,
        isError,
        isLoading,
        errorMessage
    }
})
