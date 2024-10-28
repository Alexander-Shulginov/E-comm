import { apiService } from './api'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getAllUsers = async () => {
    try {
        const { data } = await apiService.get(`/users/`)
        return data
    } catch (error) {
        errorHandler(error)
    }
}

export const getUserById = async (id: number) => {
    try {
        const { data } = await apiService.get(`/users/${id}`)
        return data
    } catch (error) {
        errorHandler(error)
    }
}

export const createUser = async (payload) => {
    try {
        const { data } = await apiService.post(payload)
        return data
    } catch (error) {
        errorHandler(error)
    }
}
