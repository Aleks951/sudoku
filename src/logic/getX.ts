export default (number: number): number => {
    if (number <= 2) {
        return 0
    } else if (number <= 5) {
        return 1
    } else {
        return 2
    }
}