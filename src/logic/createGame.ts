import { getRandomNumberFromArr, clearCopy, createStaticRow, createStaticColumn } from './index'

const getX = (number: number): number => {
    if (number <= 2) {
        return 0
    } else if (number <= 5) {
        return 1
    } else {
        return 2
    }
}

const getY = (number: number): number => {
    if (number === 0 || number === 3 || number === 6) {
        return 0
    } else if (number === 1 || number === 4 || number === 7) {
        return 1
    } else {
        return 2
    }
}

const getRows = (arr: Array<number>): Array<Array<number>> => {
    return [createStaticRow(0, [arr]), createStaticRow(3, [arr]), createStaticRow(6, [arr])]
}

const getColumns = (arr: Array<number>): Array<Array<number>> => {
    return [createStaticRow(0, [arr]), createStaticRow(1, [arr]), createStaticRow(2, [arr])]
}

export default (): Array<Array<number>> => {
    const game: Array<Array<number>> = new Array(9).fill(0).map(() => new Array(9).fill(-1))

    // const arrayNumbers = new Array(9).fill(0).map((myNothing, i) => ++i)
    const arrayNumbers = [1, 2, 3, 4, 5, 6]

    arrayNumbers.map(number => {
        const x = new Array(9).fill(true)
        const y = new Array(9).fill(true)

        const blockCells: Array<Array<number>> = new Array(9).fill(0).map(() => new Array())
        for (let i = 0; i < 9; ++i) {
            game[i].forEach((number, index) => {
                if (number !== -1) blockCells[i].push(index)
            })
        }

        for (let i = 0; i < 9; ++i) {
            if (i <= 2) {
                const arrX: Array<number> = []
                if (x[0]) arrX.push(0)
                if (x[1]) arrX.push(1)
                if (x[2]) arrX.push(2)

                const arrY: Array<number> = []
                if (y[i * 3]) arrY.push(0)
                if (y[(i * 3) + 1]) arrY.push(1)
                if (y[(i * 3) + 2]) arrY.push(2)

                const blockCell: Array<number> = blockCells[i]

                const numberPositions: Array<number> = []
                arrX.forEach(xValue => {
                    arrY.forEach(yValue => {
                        numberPositions.push((xValue * 3) + yValue)
                    })
                })

                if (number === 6) {
                    console.log('numberPositions', numberPositions)
                }

                const numberPosition = getRandomNumberFromArr(clearCopy(numberPositions, blockCell))
                const numberX = getX(numberPosition)
                const numberY = getY(numberPosition)

                game[i][numberPosition] = number
                x[numberX] = false
                y[(i * 3) + numberY] = false
            } else if (i <= 5) {
                const arrX: Array<number> = []
                if (x[3]) arrX.push(0)
                if (x[4]) arrX.push(1)
                if (x[5]) arrX.push(2)

                const arrY: Array<number> = []
                if (y[(i - 3) * 3]) arrY.push(0)
                if (y[((i - 3) * 3) + 1]) arrY.push(1)
                if (y[((i - 3) * 3) + 2]) arrY.push(2)

                const blockCell: Array<number> = blockCells[i]

                const numberPositions: Array<number> = []
                arrX.forEach(xValue => {
                    arrY.forEach(yValue => {
                        numberPositions.push((xValue * 3) + yValue)
                    })
                })

                const numberPosition = getRandomNumberFromArr(clearCopy(numberPositions, blockCell))
                const numberX = getX(numberPosition)
                const numberY = getY(numberPosition)

                game[i][numberPosition] = number
                if (numberX === 0) x[3] = false
                if (numberX === 1) x[4] = false
                if (numberX === 2) x[5] = false
                y[((i - 3) * 3) + numberY] = false
            } else {
                const arrX: Array<number> = []
                if (x[6]) arrX.push(0)
                if (x[7]) arrX.push(1)
                if (x[8]) arrX.push(2)

                const arrY: Array<number> = []
                if (y[(i - 6) * 3]) arrY.push(0)
                if (y[((i - 6) * 3) + 1]) arrY.push(1)
                if (y[((i - 6) * 3) + 2]) arrY.push(2)

                const blockCell: Array<number> = blockCells[i]

                const numberPositions: Array<number> = []
                arrX.forEach(xValue => {
                    arrY.forEach(yValue => {
                        numberPositions.push((xValue * 3) + yValue)
                    })
                })

                const numberPosition = getRandomNumberFromArr(clearCopy(numberPositions, blockCell))
                const numberX = getX(numberPosition)
                const numberY = getY(numberPosition)

                game[i][numberPosition] = number
                if (numberX === 0) x[6] = false
                if (numberX === 1) x[7] = false
                if (numberX === 2) x[8] = false
                y[((i - 6) * 3) + numberY] = false
            }
        }
    })

    console.log('game', game)

    return game
}