import { getRandomNumberFromArr, clearCopy } from './index'

interface props {
    rowFor02: Array<number>,
    rowFor35: Array<number>,
    rowFor68: Array<number>
}
const origin = new Array(9).fill(0).map((myNothing, i) => ++i)

export default ({ rowFor02, rowFor35, rowFor68 }: props): Array<number> => {
    const answer: Array<number> = []

    let i = 0

    for (; i <= 2; ++i) {
        const { randomNumber, index } = getRandomNumberFromArr(rowFor02)
        answer.push(randomNumber)
        rowFor02.splice(index, 1)
    }

    let step2: Array<number> = []
    const newNumbersForRowFor35 = clearCopy(rowFor35, answer)
    if (newNumbersForRowFor35.length !== 3) {
        const newNumbersForRowFor68 = clearCopy(rowFor68, answer)
        let importantNumbers = clearCopy(newNumbersForRowFor35, newNumbersForRowFor68)
        if (importantNumbers.length !== 3) {
            const notImportantNumbers = clearCopy(newNumbersForRowFor35, importantNumbers)
            if (importantNumbers.length === 1) {
                importantNumbers.push(notImportantNumbers[0])
                importantNumbers.push(notImportantNumbers[1])
            } else {
                importantNumbers.push(notImportantNumbers[0])
            }
        }
        step2 = importantNumbers
    } else {
        step2 = newNumbersForRowFor35
    }

    for (; i <= 5; ++i) {
        const { randomNumber, index } = getRandomNumberFromArr(step2)
        answer.push(randomNumber)
        step2.splice(index, 1)
    }

    const step3 = clearCopy(origin, answer)

    for (; i <= 8; ++i) {
        const { randomNumber, index } = getRandomNumberFromArr(step3)
        answer.push(randomNumber)
        step3.splice(index, 1)
    }
    return answer
}