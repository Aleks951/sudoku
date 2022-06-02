import { getRandomNumberFromArr, clearCopy, staiInArrayImportantNumbers, mergedArraysNumbers } from './index'

interface data {
    rowFor1: Array<number>,
    rowFor2: Array<number>,
    rowFor3: Array<number>,
    colFor1: Array<number>,
    colFor2: Array<number>,
    colFor3: Array<number>
}

const origin = new Array(9).fill(0).map((myNothing, i) => ++i)

export default ({ rowFor1, rowFor2, rowFor3, colFor1, colFor2, colFor3 }: data): Array<number> => {
    const answer: Array<number> = []
    const rows = [rowFor1, rowFor2, rowFor3]
    const columns = [colFor1, colFor2, colFor3]

    let i = 0

    console.log('rowFor1', rowFor1)
    console.log('colFor1', colFor1)
    // console.log('mergedArraysNumbers', mergedArraysNumbers([rowFor1, colFor1]))
    // console.log('clearCopy', clearCopy(origin, mergedArraysNumbers([rowFor1, colFor1])))
    // console.log('test', staiInArrayImportantNumbers({ middle: rowFor1, end: colFor1, answer }))
    // const { randomNumber, index } = getRandomNumberFromArr(clearCopy(origin, [...rowFor1, ...colFor1]))
    // answer.push(randomNumber)


    columns.forEach(col => {
        const arrayNumbers = mergedArraysNumbers([rowFor1, col, answer])
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(origin, arrayNumbers))
        answer.push(randomNumber)
    })

    // rows.forEach(row => {
    //     columns.forEach(col => {
    //         const arrayNumbers = mergedArraysNumbers([row, col, answer])
    //         const { randomNumber, index } = getRandomNumberFromArr(clearCopy(origin, arrayNumbers))
    //         answer.push(randomNumber)
    //     })
    // })



    // const step2: Array<number> = staiInArrayImportantNumbers({ middle: rowFor2, end: rowFor3, answer })

    // for (; i <= 5; ++i) {
    //     const { randomNumber, index } = getRandomNumberFromArr(step2)
    //     answer.push(randomNumber)
    //     step2.splice(index, 1)
    // }

    // const step3 = clearCopy(origin, answer)

    // for (; i <= 8; ++i) {
    //     const { randomNumber, index } = getRandomNumberFromArr(step3)
    //     answer.push(randomNumber)
    //     step3.splice(index, 1)
    // }
    return answer
}