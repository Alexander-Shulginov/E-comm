// Функция экспоненциального backoff с jitter для повторных запросов
export const exponentialBackoffWithJitter = async (
    attempt: number,
    baseDelay: number = 100,
    maxJitter: number = 100
) => {
    const backoff = Math.pow(2, attempt) * baseDelay
    const jitter = Math.random() * maxJitter
    const delay = backoff + jitter
    await wait(delay)
}

// Delay
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Проверка ошибки на статус 4xx
export const isClientError = (error: any): boolean => {
    return error.response && error.response.status >= 400 && error.response.status < 500
}
