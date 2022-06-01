// Случайно выбирает число из данного массива чисел
interface answer {
    randomNumber: number,
    index: number
}

export default (arr: Array<number>): answer => {
    let randomNumber = Math.round(Math.random() * 10)
    for (; randomNumber >= arr.length; randomNumber -= arr.length) { }
    return {
        randomNumber: arr[randomNumber],
        index: randomNumber
    }
}