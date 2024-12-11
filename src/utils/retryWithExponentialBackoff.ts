export async function retryWithExponentialBackoff<T>(
    fn: () => Promise<T>,
    retries: number = 3,
    initialDelay: number = 500
): Promise<T> {
    let attempt = 0
    let delay = initialDelay

    while (attempt < retries) {
        try {
            return await fn()
        } catch (error) {
            attempt++
            if (attempt >= retries) throw error

            const jitterValue = Math.random() * delay
            await new Promise((resolve) => setTimeout(resolve, delay + jitterValue))

            delay *= 2
        }
    }
    throw new Error('Max retries reached')
}
