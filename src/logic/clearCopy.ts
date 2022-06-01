// Удаляет из оргинального массива числа, которые были задействованны

export default (origin: Array<number>, copy: Array<number>): Array<number> => {
    let answer = [...origin]
    copy.forEach(numberFilter => {
        const index = answer.findIndex(number => number === numberFilter)
        if (index !== -1) {
            answer.splice(index, 1)
        }
        // answer = answer.filter(number => number !== numberFilter)
    })
    return answer
}