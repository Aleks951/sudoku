import createGame from '../createGame'

const mySort = (arr: Array<number>): Array<number> => arr.sort((a, b) => a - b)

const joinArrays = (arr: Array<any>): Array<any> => {
    return arr.reduce((acc, item) => {
        return acc = [...acc, ...item]
    }, [])
}

const getRow = (col: number, arrays: Array<Array<number>>, length: number = 3): Array<number> => {
    const answer: Array<number> = []
    arrays.forEach(arr => {
        let thisCol = col
        for (let i = 0; i < length; ++i) {
            answer.push(arr[thisCol])
            ++thisCol
        }
    })
    return answer
}

const getRows = (arr: Array<Array<number>>, length: number): Array<Array<number>> => {
    const answer: Array<Array<number>> = []

    for (let i = 0; i < arr.length; i += length) {
        const squars = arr.slice(i, i + length)
        for (let index = 0; index < squars.length * length; index += length) {
            answer.push(getRow(index, squars, Math.sqrt(arr.length)))
        }
    }

    return answer
}

const getColumn = (row: number, arrays: Array<Array<number>>, step: number = 3): Array<number> => {
    const answer: Array<number> = []
    arrays.forEach(arr => {
        let thisRow = row
        for (; thisRow <= row + (step * (step - 1)); thisRow += step) {
            answer.push(arr[thisRow])
        }
    })
    return answer
}

const getColumns = (arr: Array<Array<number>>, length: number): Array<Array<number>> => {
    const answer: Array<Array<number>> = []

    for (let i = 0; i < length; ++i) {
        const squars = []
        for (let index = i; index < length * length; index += length) {
            squars.push(arr[index])
        }

        for (let i = 0; i < length; ++i) {
            answer.push(getColumn(i, squars, Math.sqrt(arr.length)))
        }
    }

    return answer
}

test('Correct game', () => {
    const sizes = [4, 9, 16]

    sizes.forEach(size => {
        const game = createGame(size)
        const rightAnswer = Array.from(Array(size), (param, index) => ++index)

        const rows = getRows(game, Math.sqrt(size))
        const columns = getColumns(game, Math.sqrt(size))

        const all = joinArrays([game, rows, columns])

        all.forEach(arr => {
            expect(mySort(arr)).toEqual(rightAnswer)
        })
    })
})