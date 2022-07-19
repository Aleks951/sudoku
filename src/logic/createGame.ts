// Генератор судоку. В основе алгоритма лежит ось координат (x, y) написанный с помощью рекурсии

import { shuffle } from './index'

export default (fullSize: number = 9): Array<Array<number>> => {
    const size = Math.sqrt(fullSize)
    const sudoku: Array<Array<number>> = new Array(fullSize).fill(0).map(() => new Array(fullSize).fill(-1))

    const createSquare = (index: number = 0, number: number = 1, axisX: number = 0, axisY: number = 0): boolean => {
        if (index === fullSize) {
            index = 0
            number += 1
            axisX = 0
            axisY = 0
        }

        if (number > fullSize) return true


        const arrShuffle = shuffle(Array.from(Array(fullSize), (param, index) => index))

        for (let i = 0; i < arrShuffle.length; ++i) {
            if (sudoku[index][arrShuffle[i]] === -1) {
                const row = Math.floor(index / size)
                const col = (index - (size * row)) * size

                const rowNumberPosition = Math.floor(arrShuffle[i] / size)
                const colNumberPosition = (arrShuffle[i] - (size * rowNumberPosition)) + col

                const bitY = Math.pow(2, rowNumberPosition + size * row)
                const bitX = Math.pow(2, colNumberPosition + size * col)

                if ((axisY & bitY) === 0 && (axisX & bitX) === 0) {
                    sudoku[index][arrShuffle[i]] = number
                    if (createSquare(index + 1, number, axisX ^ bitX, axisY ^ bitY)) {
                        // Лазейка для сохранений
                        return true
                    } else {
                        sudoku[index][arrShuffle[i]] = -1
                    }
                }
            }
        }

        return false
    }

    createSquare()

    return sudoku
}