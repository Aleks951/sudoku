// col - это число 0, 3, 6
// Функция возвращает массив чисел, которые не использованы

export default (col: number, arrays: Array<Array<number>>): Array<number> => {
    const answer: Array<number> = []
    arrays.forEach(arr => {
        let thisCol = col
        for (let i = 0; i < 3; ++i) {
            answer.push(arr[thisCol])
            ++thisCol
        }
    })
    return answer
}