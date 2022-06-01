import { getRandomNumberFromArr, clearCopy, createStaticRow, createRandomArrForRow } from './index'

export default () => {
    // const game = new Array(9).fill(null)
    const origin = new Array(9).fill(0).map((myNothing, i) => ++i)
    const t4: Array<number> = []

    const start = [...origin]
    for (let i = 0; i < 9; ++i) {
        // середина
        const { randomNumber, index } = getRandomNumberFromArr(start)
        t4.push(randomNumber)
        start.splice(index, 1)
    }

    // Левый квадрат от середины
    const t3: Array<number> = createRandomArrForRow({
        rowFor02: clearCopy(origin, createStaticRow(0, [t4])),
        rowFor35: clearCopy(origin, createStaticRow(3, [t4])),
        rowFor68: clearCopy(origin, createStaticRow(6, [t4]))
    })

    // Правый квадрат от середины
    const t5: Array<number> = createRandomArrForRow({
        rowFor02: clearCopy(origin, createStaticRow(0, [t3, t4])),
        rowFor35: clearCopy(origin, createStaticRow(3, [t3, t4])),
        rowFor68: clearCopy(origin, createStaticRow(6, [t3, t4])),
    })

    console.log(t3)
    console.log(t4)
    console.log(t5)
    // console.log('0', createStaticRow(0, [origin]))
    // console.log('3', createStaticRow(3, [origin]))
    // console.log('6', createStaticRow(6, [origin]))
}