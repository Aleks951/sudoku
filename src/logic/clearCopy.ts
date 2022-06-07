// Удаляет из оргинального массива числа, которые были задействованны

const arrayNumbers = new Array(9).fill(0).map((myNothing, i) => ++i)

export default (origin: Array<number>, copy?: Array<number>): Array<number> => {
    if (copy === undefined) {
        let answer = [...arrayNumbers]
        origin.forEach(numberFilter => {
            const index = answer.findIndex(number => number === numberFilter)
            if (index !== -1) {
                answer.splice(index, 1)
            }
        })
        return answer
    }

    let answer = [...origin]
    copy.forEach(numberFilter => {
        const index = answer.findIndex(number => number === numberFilter)
        if (index !== -1) {
            answer.splice(index, 1)
        }
    })
    return answer
}