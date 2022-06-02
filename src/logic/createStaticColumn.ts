// col - это число 0, 1, 2
// Функция возвращает массив чисел, которые не использованы

export default (row: number, arrays: Array<Array<number>>): Array<number> => {
    const answer: Array<number> = []
    arrays.forEach(arr => {
        let thisRow = row
        for (; thisRow <= row + 6; thisRow += 3) {
            answer.push(arr[thisRow])
        }
    })
    return answer
}