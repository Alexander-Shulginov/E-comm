import { ref, watchEffect } from 'vue'

export const useImgLoading = (src: string) => {
    const loading = ref(true)
    const error = ref(false)

    watchEffect(() => {
        if (!src) {
            loading.value = false
            error.value = true
            return
        }

        const img = new Image()
        loading.value = true
        error.value = false

        img.src = src
        img.onload = () => {
            loading.value = false
            error.value = false
        }
        img.onerror = () => {
            loading.value = false
            error.value = true
        }
    })

    return { loading, error }
}
