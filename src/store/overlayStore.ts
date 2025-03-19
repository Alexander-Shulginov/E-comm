import { reactive } from 'vue'

export const overlayState = reactive({
    overlayIsOpen: false
})

export const useOverlay = () => {
    const showOverlay = () => {
        document.body.setAttribute('data-overlay', 'true')
        overlayState.overlayIsOpen = true
    }

    const hideOverlay = () => {
        document.body.removeAttribute('data-overlay')
        overlayState.overlayIsOpen = false
    }

    const toggleOverlay = () => {
        document.body.hasAttribute('data-overlay') ? hideOverlay() : showOverlay()
    }

    const mediaQuery = window.matchMedia('(max-width: 1024px)')

    const handleMediaChange = (e: any) => {
        hideOverlay()
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    handleMediaChange(mediaQuery)

    return { showOverlay, hideOverlay, toggleOverlay }
}
