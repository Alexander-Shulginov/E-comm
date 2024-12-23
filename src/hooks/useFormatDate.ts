export const useFormatDate = () => {
    function formatDate(oldDate: string) {
        const date = new Date(oldDate)

        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        const newDate = `${day}-${month}-${year}`
        return newDate
    }

    return { formatDate }
}
