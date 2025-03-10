export const useLocalStorage = () => {
    const setToLocalStorage = (key: string, value: unknown) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const getLocalStorageItem = (key: string) => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
    }

    return {
        setToLocalStorage,
        getLocalStorageItem
    }
}
