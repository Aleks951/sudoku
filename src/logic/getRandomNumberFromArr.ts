// Случайно выбирает число из данного массива чисел
interface answer {
    randomNumber: number,
    index: number
}

export default (arr: Array<number>): answer => {
    if (arr.length === 0) {
        throw Error(`Пустой массив!`)
    }

    if (arr.length === 1) {
        return {
            randomNumber: arr[0],
            index: 0
        }
    }

    let randomNumber = Math.round(Math.random() * 10)
    for (; randomNumber >= arr.length; randomNumber -= arr.length) { }
    return {
        randomNumber: arr[randomNumber],
        index: randomNumber
    }
}