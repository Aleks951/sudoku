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

interface optionsForF {
    middle: Array<number>,
    end: Array<number>,
    answer: Array<number>,
    direction1: Array<number>,
    direction2: Array<number>
}

const getRandomNumberForK = ({ middle, end, answer, direction1, direction2 }: optionsForF): number => {
    const importantNumbers: Array<number> = staiInArrayImportantNumbers({ middle: clearCopy(middle), end: clearCopy(end), answer, onlyImportantNumbers: true })
    const importantNumbersForCell = clearCopy(importantNumbers, direction1)

    if (importantNumbersForCell.length === 0) {
        const notImportantNumbersForCell = clearCopy(mergedArraysNumbers([direction1, direction2, answer]))
        const { randomNumber, index } = getRandomNumberFromArr(notImportantNumbersForCell)
        return randomNumber
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell)
        return randomNumber
    }
}

export default ({ rowFor1, rowFor2, rowFor3, colFor1, colFor2, colFor3 }: data): Array<number> => {
    const answer: Array<number> = []
    const rows = [rowFor1, rowFor2, rowFor3]
    const columns = [colFor1, colFor2, colFor3]

    let i = 0

    const importantNumbersForRow1 = staiInArrayImportantNumbers({ middle: clearCopy(rowFor1), end: clearCopy(mergedArraysNumbers([rowFor2, rowFor3])), answer, onlyImportantNumbers: true })
    const importantNumbersForRow2 = staiInArrayImportantNumbers({ middle: clearCopy(rowFor2), end: clearCopy(mergedArraysNumbers([rowFor1, rowFor3])), answer, onlyImportantNumbers: true })
    const importantNumbersForRow3 = staiInArrayImportantNumbers({ middle: clearCopy(rowFor3), end: clearCopy(mergedArraysNumbers([rowFor1, rowFor2])), answer, onlyImportantNumbers: true })

    console.log('importantNumbersForRow1', importantNumbersForRow1)
    console.log('importantNumbersForRow2', importantNumbersForRow2)
    console.log('importantNumbersForRow3', importantNumbersForRow3)

    const importantNumbersForCol1 = staiInArrayImportantNumbers({ middle: clearCopy(colFor1), end: clearCopy(mergedArraysNumbers([colFor2, colFor3])), answer, onlyImportantNumbers: true })
    const importantNumbersForCol2 = staiInArrayImportantNumbers({ middle: clearCopy(colFor2), end: clearCopy(mergedArraysNumbers([colFor1, colFor3])), answer, onlyImportantNumbers: true })
    const importantNumbersForCol3 = staiInArrayImportantNumbers({ middle: clearCopy(colFor3), end: clearCopy(mergedArraysNumbers([colFor1, colFor2])), answer, onlyImportantNumbers: true })

    console.log('importantNumbersForCol1', importantNumbersForCol1)
    console.log('importantNumbersForCol2', importantNumbersForCol2)
    console.log('importantNumbersForCol3', importantNumbersForCol3)

    // /////////////////////////////////////////////////////////////////////////////

    const importantNumbersForCell0 = clearCopy(mergedArraysNumbers([importantNumbersForRow1, importantNumbersForCol1]), mergedArraysNumbers([rowFor1, colFor1]))
    console.log('importantNumbersForCell0', importantNumbersForCell0)

    if (importantNumbersForCell0.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor1, colFor1])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell0)
        answer.push(randomNumber)
    }

    const importantNumbersForCell1 = clearCopy(mergedArraysNumbers([importantNumbersForRow1, importantNumbersForCol2]), mergedArraysNumbers([rowFor1, colFor2, answer]))
    console.log('importantNumbersForCell1', importantNumbersForCell1)

    if (importantNumbersForCell1.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor1, colFor2, answer])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell1)
        answer.push(randomNumber)
    }

    const importantNumbersForCell2 = clearCopy(mergedArraysNumbers([importantNumbersForRow1, importantNumbersForCol3]), mergedArraysNumbers([rowFor1, colFor3, answer]))
    console.log('importantNumbersForCell2', importantNumbersForCell2)

    if (importantNumbersForCell2.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor1, colFor3, answer])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell2)
        answer.push(randomNumber)
    }

    // /////////////////////////////////////////////////////////////////////////////

    const importantNumbersForCell3 = clearCopy(mergedArraysNumbers([importantNumbersForRow2, importantNumbersForCol1]), mergedArraysNumbers([rowFor2, colFor1, answer]))
    console.log('importantNumbersForCell3', importantNumbersForCell3)

    if (importantNumbersForCell3.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor2, colFor1])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell3)
        answer.push(randomNumber)
    }

    const importantNumbersForCell4 = clearCopy(mergedArraysNumbers([importantNumbersForRow2, importantNumbersForCol2]), mergedArraysNumbers([rowFor2, colFor2, answer]))
    console.log('importantNumbersForCell4', importantNumbersForCell4)

    if (importantNumbersForCell4.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor2, colFor2, answer])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell4)
        answer.push(randomNumber)
    }

    const importantNumbersForCell5 = clearCopy(mergedArraysNumbers([importantNumbersForRow2, importantNumbersForCol3]), mergedArraysNumbers([rowFor2, colFor3, answer]))
    console.log('importantNumbersForCell5', importantNumbersForCell5)

    if (importantNumbersForCell5.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor2, colFor3, answer])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell5)
        answer.push(randomNumber)
    }

    // /////////////////////////////////////////////////////////////////////////////

    const importantNumbersForCell6 = clearCopy(mergedArraysNumbers([importantNumbersForRow3, importantNumbersForCol1]), mergedArraysNumbers([rowFor3, colFor1, answer]))
    console.log('importantNumbersForCell6', importantNumbersForCell6)

    if (importantNumbersForCell6.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor3, colFor1])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell6)
        answer.push(randomNumber)
    }

    const importantNumbersForCell7 = clearCopy(mergedArraysNumbers([importantNumbersForRow3, importantNumbersForCol2]), mergedArraysNumbers([rowFor3, colFor2, answer]))
    console.log('importantNumbersForCell7', importantNumbersForCell7)

    if (importantNumbersForCell7.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor3, colFor2, answer])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell7)
        answer.push(randomNumber)
    }

    const importantNumbersForCell8 = clearCopy(mergedArraysNumbers([importantNumbersForRow3, importantNumbersForCol3]), mergedArraysNumbers([rowFor3, colFor3, answer]))
    console.log('importantNumbersForCell8', importantNumbersForCell8)

    if (importantNumbersForCell8.length === 0) {
        const { randomNumber, index } = getRandomNumberFromArr(clearCopy(mergedArraysNumbers([rowFor3, colFor3, answer])))
        answer.push(randomNumber)
    } else {
        const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell8)
        answer.push(randomNumber)
    }























































    return answer


    // const arrayNumbers = mergedArraysNumbers([rowFor1, colFor1])
    // const clearArrayNumbers = clearCopy(arrayNumbers)
    // const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    // answer.push(randomNumber)

    // //////////////////////////////////////////////////////////

    // answer.push(getRandomNumberForK({
    //     middle: colFor2,
    //     end: colFor3,
    //     answer,
    //     direction1: rowFor1,
    //     direction2: colFor2
    // }))

    // const importantNumbersForCol2: Array<number> = staiInArrayImportantNumbers({ middle: clearCopy(colFor2), end: clearCopy(colFor3), answer, onlyImportantNumbers: true })
    // const importantNumbersForCell1 = clearCopy(importantNumbersForCol2, rowFor1)

    // if (importantNumbersForCell1.length === 0) {
    //     const notimportantNumbersForCell1 = clearCopy(mergedArraysNumbers([rowFor1, colFor2, answer]))
    //     const { randomNumber, index } = getRandomNumberFromArr(notimportantNumbersForCell1)
    //     answer.push(randomNumber)
    // } else {
    //     const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell1)
    //     answer.push(randomNumber)
    // }

    // //////////////////////////////////////////////////////////

    // answer.push(getRandomNumberForK({
    //     middle: colFor3,
    //     end: colFor2,
    //     answer,
    //     direction1: rowFor1,
    //     direction2: colFor3
    // }))

    // const importantNumbersForCol3: Array<number> = staiInArrayImportantNumbers({ middle: clearCopy(colFor3), end: clearCopy(colFor2), answer, onlyImportantNumbers: true })
    // const importantNumbersForCell2 = clearCopy(importantNumbersForCol3, rowFor1)

    // if (importantNumbersForCell2.length === 0) {
    //     const notimportantNumbersForCell2 = clearCopy(mergedArraysNumbers([rowFor1, colFor3, answer]))
    //     const { randomNumber, index } = getRandomNumberFromArr(notimportantNumbersForCell2)
    //     answer.push(randomNumber)
    // } else {
    //     const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell2)
    //     answer.push(randomNumber)
    // }

    // //////////////////////////////////////////////////////////

    // const importantNumbersForRow2: Array<number> = staiInArrayImportantNumbers({ middle: clearCopy(rowFor2), end: clearCopy(rowFor3), answer, onlyImportantNumbers: true })
    // const importantNumbersForCell3 = clearCopy(importantNumbersForRow2, colFor1)

    // const importantNumbersForRow3: Array<number> = staiInArrayImportantNumbers({ middle: clearCopy(rowFor3), end: clearCopy(rowFor2), answer, onlyImportantNumbers: true })
    // const newImportantNumbersForCol3 = clearCopy(importantNumbersForCol3, answer)

    // if (importantNumbersForCell3.length === 0) {
    //     const importantNumbersForCell3 = clearCopy(mergedArraysNumbers([colFor1, rowFor2, answer]))
    //     const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell3)
    //     answer.push(randomNumber)
    // } else {
    //     const { randomNumber, index } = getRandomNumberFromArr(importantNumbersForCell3)
    //     answer.push(randomNumber)
    // }

    // //////////////////////////////////////////////////////////

    // Вроде работает, проверить
    // const newImportantNumbersForRow2 = clearCopy(importantNumbersForRow2, answer)
    // const newImportantNumbersForCol2 = clearCopy(importantNumbersForCol2, answer)

    // const importantNumbersForRow3: Array<number> = staiInArrayImportantNumbers({ middle: clearCopy(rowFor3), end: clearCopy(rowFor2), answer, onlyImportantNumbers: true })

    // console.log('newImportantNumbersForRow2', newImportantNumbersForRow2)
    // console.log('importantNumbersForRow3', importantNumbersForRow3)
    // console.log('newImportantNumbersForCol2', newImportantNumbersForCol2)
    // console.log('newImportantNumbersForCol3', newImportantNumbersForCol3)
















    // console.log('rowFor1', rowFor1)
    // console.log('colFor1', colFor1)
    // console.log('mergedArraysNumbers', mergedArraysNumbers([rowFor1, colFor1]))
    // console.log('clearCopy', clearCopy(mergedArraysNumbers([rowFor1, colFor1])))
    // console.log('test', staiInArrayImportantNumbers({ middle: rowFor1, end: colFor1, answer }))
    // const { randomNumber, index } = getRandomNumberFromArr(clearCopy([...rowFor1, ...colFor1]))
    // answer.push(randomNumber)





















    // columns.forEach(col => {
    //     const arrayNumbers = mergedArraysNumbers([rowFor1, col, answer])
    //     const clearArrayNumbers = clearCopy(arrayNumbers)
    //     const { randomNumber, index } = getRandomNumberFromArr(clearArrayNumbers)
    //     answer.push(randomNumber)
    // })

    // const importantNumbersForRow2: Array<number> = staiInArrayImportantNumbers({ middle: rowFor2, end: rowFor3, answer, onlyImportantNumbers: true })
    // const numbersForCells = columns.map(col => {
    //     const arrayNumbers = mergedArraysNumbers([rowFor2, col, answer])
    //     return clearCopy(arrayNumbers)
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
    //     const clearArrayNumbers = clearCopy(arrayNumbers)

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




    // const numbersForRow3 = clearCopy(answer)
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
    //         const { randomNumber, index } = getRandomNumberFromArr(clearCopy(arrayNumbers))
    //         answer.push(randomNumber)
    //     })
    // })



    // const step2: Array<number> = staiInArrayImportantNumbers({ middle: rowFor2, end: rowFor3, answer })

    // for (; i <= 5; ++i) {
    //     const { randomNumber, index } = getRandomNumberFromArr(step2)
    //     answer.push(randomNumber)
    //     step2.splice(index, 1)
    // }

    // const step3 = clearCopy(answer)

    // for (; i <= 8; ++i) {
    //     const { randomNumber, index } = getRandomNumberFromArr(step3)
    //     answer.push(randomNumber)
    //     step3.splice(index, 1)
    // }
    return answer
}