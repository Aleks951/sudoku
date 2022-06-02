import { clearCopy } from './index'

interface data {
    middle: Array<number>,
    end: Array<number>,
    answer: Array<number>
}

export default ({ middle, end, answer }: data): Array<number> => {
    const newNumbersForMiddle = clearCopy(middle, answer)
    if (newNumbersForMiddle.length !== 3) {
        const newNumbersForEnd = clearCopy(end, answer)
        let importantNumbers = clearCopy(newNumbersForMiddle, newNumbersForEnd)
        if (importantNumbers.length !== 3) {
            const notImportantNumbers = clearCopy(newNumbersForMiddle, importantNumbers)
            if (importantNumbers.length === 1) {
                importantNumbers.push(notImportantNumbers[0])
                importantNumbers.push(notImportantNumbers[1])
            } else {
                importantNumbers.push(notImportantNumbers[0])
            }
        }
        return importantNumbers
    }
    return newNumbersForMiddle
}