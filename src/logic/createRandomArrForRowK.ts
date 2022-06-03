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

    const arrayNumbers = mergedArraysNumbers([rowFor1, colFor1])
    const clearArrayNumbers = clearCopy(origin, arrayNumbers)
    const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    answer.push(randomNumber)

    const importantNumbersForCol2: Array<number> = staiInArrayImportantNumbers({ middle: colFor2, end: colFor3, answer, onlyImportantNumbers: true })
    const importantNumbersForCell2 = clearCopy(importantNumbersForCol2, rowFor1)
    console.log('importantNumbersForCell2', importantNumbersForCell2)
    if (importantNumbersForCell2.length === 0) {
        console.log('rowFor1', rowFor1)
    }


















    // console.log('rowFor1', rowFor1)
    // console.log('colFor1', colFor1)
    // console.log('mergedArraysNumbers', mergedArraysNumbers([rowFor1, colFor1]))
    // console.log('clearCopy', clearCopy(origin, mergedArraysNumbers([rowFor1, colFor1])))
    // console.log('test', staiInArrayImportantNumbers({ middle: rowFor1, end: colFor1, answer }))
    // const { randomNumber, index } = getRandomNumberFromArr(clearCopy(origin, [...rowFor1, ...colFor1]))
    // answer.push(randomNumber)





















    // columns.forEach(col => {
    //     const arrayNumbers = mergedArraysNumbers([rowFor1, col, answer])
    //     const clearArrayNumbers = clearCopy(origin, arrayNumbers)
    //     const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    //     answer.push(randomNumber)
    // })

    // const importantNumbersForRow2: Array<number> = staiInArrayImportantNumbers({ middle: rowFor2, end: rowFor3, answer, onlyImportantNumbers: true })
    // const numbersForCells = columns.map(col => {
    //     const arrayNumbers = mergedArraysNumbers([rowFor2, col, answer])
    //     return clearCopy(origin, arrayNumbers)
    // })
    // const importantNumberForCell12 = staiInArrayImportantNumbers({ middle: numbersForCells[0], end: numbersForCells[1], answer, onlyImportantNumbers: true })
    // const importantNumberForCell13 = staiInArrayImportantNumbers({ middle: importantNumberForCell12.length === 0 ? numbersForCells[0] : importantNumberForCell12, end: numbersForCells[2], answer, onlyImportantNumbers: true })

    // if (importantNumberForCell13.length === 0) {
    //     if (importantNumbersForRow2.length !== 0) {
    //         let critch: boolean = true

    //         for (let i = 0; i < importantNumbersForRow2.length; ++i) {
    //             const index = importantNumberForCell12.findIndex(number => importantNumbersForRow2[i] === number)
    //             if (index !== -1) {
    //                 answer.push(importantNumbersForRow2[i])
    //                 importantNumbersForRow2.splice(i, 1)
    //                 critch = false
    //                 break
    //             }
    //         }

    //         if (critch) {
    //             const { randomNumber, index } = getRandomNumberFromArr(importantNumberForCell12)
    //             answer.push(randomNumber)
    //         }
    //     }
    // } else {

    //     let critch: boolean = true

    //     for (let i = 0; i < importantNumbersForRow2.length; ++i) {
    //         const index = importantNumberForCell13.findIndex(number => importantNumbersForRow2[i] === number)
    //         if (index !== -1) {
    //             answer.push(importantNumbersForRow2[i])
    //             importantNumbersForRow2.splice(i, 1)
    //             critch = false
    //             break
    //         }
    //     }

    //     if (critch) {
    //         const { randomNumber, index } = getRandomNumberFromArr(importantNumberForCell13)
    //         answer.push(randomNumber)
    //     }
    // }

    // console.log('numbersForCells', numbersForCells)























    // columns.forEach(col => {
    //     const arrayNumbers = mergedArraysNumbers([rowFor2, col, answer])
    //     const clearArrayNumbers = clearCopy(origin, arrayNumbers)

    //     if (importantNumbersForRow2.length !== 0) {
    //         let critch: boolean = true

    //         for (let i = 0; i < importantNumbersForRow2.length; ++i) {
    //             const index = clearArrayNumbers.findIndex(number => importantNumbersForRow2[i] === number)
    //             if (index !== -1) {
    //                 answer.push(importantNumbersForRow2[i])
    //                 importantNumbersForRow2.splice(i, 1)
    //                 clearArrayNumbers.splice(index, 1)
    //                 critch = false
    //                 break
    //             }
    //         }

    //         if (critch) {
    //             const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    //             answer.push(randomNumber)
    //         }
    //     } else {
    //         const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    //         answer.push(randomNumber)
    //     }


    // })




    // const numbersForRow3 = clearCopy(origin, answer)
    // console.log('numbersForRow3', numbersForRow3)

    // columns.forEach(col => {
    //     const arrayNumbers = mergedArraysNumbers([col, answer])
    //     const clearArrayNumbers = clearCopy(numbersForRow3, col)
    //     console.log('clearArrayNumbers', clearArrayNumbers)
    //     const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    //     answer.push(randomNumber)
    // })

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