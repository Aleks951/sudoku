import { getRandomNumberFromArr, clearCopy, staiInArrayImportantNumbers } from './index'

interface data {
    rowFor1: Array<number>,
    rowFor2: Array<number>,
    rowFor3: Array<number>
}

const origin = new Array(9).fill(0).map((myNothing, i) => ++i)

export default ({ rowFor1, rowFor2, rowFor3 }: data): Array<number> => {
    const answer: Array<number> = []

    let i = 0

    for (; i <= 2; ++i) {
        const { randomNumber, index } = getRandomNumberFromArr(rowFor1)
        answer.push(randomNumber)
        rowFor1.splice(index, 1)
    }

    const step2: Array<number> = staiInArrayImportantNumbers({ middle: rowFor2, end: rowFor3, answer })

    for (; i <= 5; ++i) {
        const { randomNumber, index } = getRandomNumberFromArr(step2)
        answer.push(randomNumber)
        step2.splice(index, 1)
    }

    const step3 = clearCopy(answer)

    for (; i <= 8; ++i) {
        const { randomNumber, index } = getRandomNumberFromArr(step3)
        answer.push(randomNumber)
        step3.splice(index, 1)
    }
    return answer
}