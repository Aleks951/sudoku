export default (number: number): number => {
    if (number === 0 || number === 3 || number === 6) {
        return 0
    } else if (number === 1 || number === 4 || number === 7) {
        return 1
    } else {
        return 2
    }
}