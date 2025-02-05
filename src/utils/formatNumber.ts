export const formatNumber = (num: number): number => {
    const rounded = Math.floor(num * 10) / 10
    return rounded % 1 === 0 ? Number(rounded.toFixed(0)) : rounded
}
