import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

export const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    responseType: 'json'
})

export const getItem = async <T>(id: number): Promise<T> => {
    const { data } = await api.get(`item/${id}.json`)
    return data
}

export const getStoryById = async (id: number) => {
    return getItem(id)
}

export const getCommentById = async (id: number) => {
    return getItem(id)
}

export const getNewStories = async () => {
    const { data } = await api.get(`/newstories.json`)
    return data
}
