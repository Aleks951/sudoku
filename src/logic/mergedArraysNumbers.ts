// export default (arr1: Array<number>, arr2: Array<number>): Array<number> => {
//     const answer = [...arr1]
//     arr2.forEach(number => {
//         if (!arr1.includes(number)) answer.push(number)
//     })
//     return answer
// }

export default (arrays: Array<Array<number>>): Array<number> => {
    const answer = [...arrays[0]]
    for (let i = 1; i < arrays.length; ++i) {
        arrays[i].forEach(number => {
            if (!answer.includes(number)) answer.push(number)
        })
    }

    return answer
}