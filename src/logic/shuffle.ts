// Перемешивает массив (в качестве алгоритма используется математическая формула)

export default (arr: Array<number>): Array<number> => {
    const answer = [...arr]
    for (let i = answer.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [answer[i], answer[j]] = [answer[j], answer[i]]
    }
    return answer
}