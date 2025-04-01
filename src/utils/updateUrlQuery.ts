import { Router } from 'vue-router'

export const updateUrlQuery = (router: Router, payload: Record<string, any>) => {
    const newQuery = {
        ...router.currentRoute.value.query,
        ...payload
    }

    Object.keys(newQuery).forEach((key) => {
        if (newQuery[key] == null || newQuery[key] === '') delete newQuery[key]
    })

    router.replace({ query: newQuery })
}

export const removeUrlQuery = (router: Router, key: string) => {
    const newQuery = { ...router.currentRoute.value.query }

    delete newQuery[key]

    router.replace({ query: newQuery })
}
