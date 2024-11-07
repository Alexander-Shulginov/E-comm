import { AxiosError } from 'axios'
import { apiKey, apiService } from './api'
import { exponentialBackoffWithJitter, isClientError } from './helpers'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getBooksBySearch = async (searchQuery: string) => {
    let attempt = 0
    const maxRetries = 3

    while (attempt < maxRetries) {
        try {
            const { data } = await apiService.get('/volumes', {
                params: {
                    q: `${searchQuery}+intitle:${searchQuery}`,
                    key: apiKey,
                    maxResults: 20
                }
            })
            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                if (isClientError(error)) {
                    errorHandler(error)
                    break
                }
            }
            attempt++
            if (attempt === maxRetries) {
                errorHandler(error)
            } else {
                await exponentialBackoffWithJitter(attempt)
            }
        }
    }
}
// import { AxiosError } from 'axios'
// import { apiService, apiKey } from './api'
// import { exponentialBackoffWithJitter, isClientError } from './helpers'

// class ApiRequestWithRetries {
//     private maxRetries: number

//     constructor(maxRetries = 3) {
//         this.maxRetries = maxRetries
//     }

//     private async request<T>(
//         method: 'get' | 'post' | 'put' | 'delete',
//         url: string,
//         config: Record<string, any>
//     ): Promise<T> {
//         let attempt = 0
//         while (attempt < this.maxRetries) {
//             try {
//                 const { data } = await apiService[method](url, config)
//                 return data
//             } catch (error) {
//                 if (error instanceof AxiosError && isClientError(error)) {
//                     console.error(error)
//                     throw error
//                 }
//                 attempt++
//                 if (attempt === this.maxRetries) {
//                     console.error(error)
//                     throw new Error('Request failed after maximum retries.')
//                 }
//                 await exponentialBackoffWithJitter(attempt)
//             }
//         }
//         throw new Error('Request failed after maximum retries.')
//     }

//     public get<T>(url: string, params: Record<string, any> = {}): Promise<T> {
//         return this.request('get', url, { params: { ...params, key: apiKey } })
//     }

//     public post<T>(url: string, data: Record<string, any>): Promise<T> {
//         return this.request('post', url, { data: { ...data, key: apiKey } })
//     }

//     public put<T>(url: string, data: Record<string, any>): Promise<T> {
//         return this.request('put', url, { data: { ...data, key: apiKey } })
//     }

//     public delete<T>(url: string, params: Record<string, any> = {}): Promise<T> {
//         return this.request('delete', url, { params: { ...params, key: apiKey } })
//     }
// }

// export const apiRequest = new ApiRequestWithRetries()

// export const getBooksBySearch = async (searchQuery: string) => {
//     const params = { q: `${searchQuery}+intitle:${searchQuery}`, maxResults: 20 }
//     return await apiRequest.get('/volumes', params)
// }
