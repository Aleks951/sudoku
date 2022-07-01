import createGame from '../createGame'

const rightAnswer = Array.from(Array(9), (param, index) => index + 1)

const mySort = (arr: Array<number>): Array<number> => arr.sort((a, b) => a - b)

const joinArrays = (arr: Array<any>): Array<any> => {
    return arr.reduce((acc, item) => {
        return acc = [...acc, ...item]
    }, [])
}

const getRows = (arr: Array<number>, length: number): Array<Array<number>> => {
    interface answerGetRows {
        rows: Array<Array<number>>,
        arr: Array<number>
    }

    const initialValue: answerGetRows = {
        rows: [],
        arr: []
    }
    const answer = arr.reduce((acc, item, index) => {
        if ((index + 1) % length === 0) {
            const sortedArr = mySort([...acc.arr, item])
            const rows = [...acc.rows, sortedArr]
            return {
                rows,
                arr: []
            }
        }

        const arr = [...acc.arr, item]
        return {
            ...acc,
            arr
        }
    }, initialValue)

    return answer.rows
}

const getColumns = (arr: Array<number>, length: number): Array<Array<number>> => {
    const getColumn = (arr: Array<number>, step: number, start: number, length: number): Array<number> => {
        const answer: Array<number> = []
        for (let i = 0; i < length; ++i) {
            const index = start + (i * step)
            answer.push(arr[index])
        }
        return answer
    }

    const answer: Array<Array<number>> = []

    // for (let i = 0; i < length; ++i) {
    //     answer.push(mySort(getColumn(arr, 9, i, length)))
    // }
    answer.push(getColumn(arr, 9, 0, length))

    return answer
}

test('Correct game', () => {
    const game = createGame()
    const allNumbers = joinArrays(game)

    // const squars = game.map(arr => mySort(arr))
    // const rows = getRows(allNumbers, 9)
    const columns = getColumns(allNumbers, 9)

    game.forEach((item, i) => console.log(`item ${i}`, item))
    console.log('allNumbers', allNumbers)
    console.log('columns', columns)
})