import { getRandomNumberFromArr, clearCopy, staiInArrayImportantNumbers } from './index'

interface data {
    colFor1: Array<number>,
    colFor2: Array<number>,
    colFor3: Array<number>
}

const origin = new Array(9).fill(0).map((myNothing, i) => ++i)

export default ({ colFor1, colFor2, colFor3 }: data): Array<number> => {
    const answer: Array<number> = []

    let i = 0

    for (; i <= 6; i += 3) {
        const { randomNumber, index } = getRandomNumberFromArr(colFor1)
        answer.push(randomNumber)
        colFor1.splice(index, 1)
    }

    i = 1

    const step2: Array<number> = staiInArrayImportantNumbers({ middle: colFor2, end: colFor3, answer })

    for (; i <= 7; i += 3) {
        const { randomNumber, index } = getRandomNumberFromArr(step2)
        answer.push(randomNumber)
        step2.splice(index, 1)
    }

    i = 2

    const step3 = clearCopy(answer)

    for (; i <= 8; i += 3) {
        const { randomNumber, index } = getRandomNumberFromArr(step3)
        answer.push(randomNumber)
        step3.splice(index, 1)
    }
    return answer
}