// Генератор судоку. В основе алгоритма лежит ось координат (x, y) написанный с помощью рекурсии

import { clearCopy, getX, getY, shuffle } from './index'

export default (): Array<Array<number>> => {
    let sudoku: Array<Array<number>> = new Array(9).fill(0).map(() => new Array(9).fill(-1))

    const createSquare = (index: number, number: number, incomingX: Array<boolean>, incomingY: Array<boolean>): boolean => {
        if (index === 9) return true
        const x = [...incomingX]
        const y = [...incomingY]

        const blockCells: Array<number> = []
        sudoku[index].forEach((number, i) => {
            if (number !== -1) blockCells.push(i)
        })

        const arrX: Array<number> = []
        const arrY: Array<number> = []

        if (index <= 2) {
            if (x[0]) arrX.push(0)
            if (x[1]) arrX.push(1)
            if (x[2]) arrX.push(2)

            if (y[index * 3]) arrY.push(0)
            if (y[(index * 3) + 1]) arrY.push(1)
            if (y[(index * 3) + 2]) arrY.push(2)
        } else if (index <= 5) {
            if (x[3]) arrX.push(0)
            if (x[4]) arrX.push(1)
            if (x[5]) arrX.push(2)

            if (y[(index - 3) * 3]) arrY.push(0)
            if (y[((index - 3) * 3) + 1]) arrY.push(1)
            if (y[((index - 3) * 3) + 2]) arrY.push(2)
        } else {
            if (x[6]) arrX.push(0)
            if (x[7]) arrX.push(1)
            if (x[8]) arrX.push(2)

            if (y[(index - 6) * 3]) arrY.push(0)
            if (y[((index - 6) * 3) + 1]) arrY.push(1)
            if (y[((index - 6) * 3) + 2]) arrY.push(2)
        }

        const numberPositions: Array<number> = []
        arrX.forEach(xValue => {
            arrY.forEach(yValue => {
                numberPositions.push((xValue * 3) + yValue)
            })
        })

        const clearArr = clearCopy(numberPositions, blockCells)
        if (clearArr.length === 0) return false

        const arrShuffle = shuffle(clearArr)
        for (let i = 0; i < arrShuffle.length; ++i) {
            const thisX = [...x]
            const thisY = [...y]

            const numberPosition = arrShuffle[i]
            const numberX = getX(numberPosition)
            const numberY = getY(numberPosition)

            if (index <= 2) {
                thisX[numberX] = false
                thisY[(index * 3) + numberY] = false
            } else if (index <= 5) {
                if (numberX === 0) thisX[3] = false
                if (numberX === 1) thisX[4] = false
                if (numberX === 2) thisX[5] = false
                thisY[((index - 3) * 3) + numberY] = false
            } else {
                if (numberX === 0) thisX[6] = false
                if (numberX === 1) thisX[7] = false
                if (numberX === 2) thisX[8] = false
                thisY[((index - 6) * 3) + numberY] = false
            }

            if (createSquare(index + 1, number, thisX, thisY)) {
                sudoku[index][numberPosition] = number
                return true
            }
        }

        return false
    }

    const arrayNumbers = new Array(9).fill(0).map((myNothing, i) => ++i)

    for (let i = 0; i < arrayNumbers.length; ++i) {
        const x = new Array(9).fill(true)
        const y = new Array(9).fill(true)

        if (!createSquare(0, arrayNumbers[i], x, y)) {
            sudoku = new Array(9).fill(0).map(() => new Array(9).fill(-1))
            i = -1
        }
    }

    return sudoku
}