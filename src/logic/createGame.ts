import { getRandomNumberFromArr, clearCopy, createStaticRow, createStaticColumn, createRandomArrForRow, createRandomArrForColumn, createRandomArrForRowK } from './index'

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
        rowFor1: clearCopy(origin, createStaticRow(0, [t4])),
        rowFor2: clearCopy(origin, createStaticRow(3, [t4])),
        rowFor3: clearCopy(origin, createStaticRow(6, [t4]))
    })

    // Правый квадрат от середины
    const t5: Array<number> = createRandomArrForRow({
        rowFor1: clearCopy(origin, createStaticRow(0, [t3, t4])),
        rowFor2: clearCopy(origin, createStaticRow(3, [t3, t4])),
        rowFor3: clearCopy(origin, createStaticRow(6, [t3, t4]))
    })

    // Левый верхний квадрат
    const t0: Array<number> = createRandomArrForColumn({
        colFor1: clearCopy(origin, createStaticColumn(0, [t3])),
        colFor2: clearCopy(origin, createStaticColumn(1, [t3])),
        colFor3: clearCopy(origin, createStaticColumn(2, [t3]))
    })

    // Левый нижний квадрат
    const t6: Array<number> = createRandomArrForColumn({
        colFor1: clearCopy(origin, createStaticColumn(0, [t0, t3])),
        colFor2: clearCopy(origin, createStaticColumn(1, [t0, t3])),
        colFor3: clearCopy(origin, createStaticColumn(2, [t0, t3]))
    })

    // console.log(clearCopy(clearCopy(origin, createStaticRow(0, [t0])), createStaticColumn(0, [t4])))
    // console.log(clearCopy(clearCopy(origin, createStaticRow(3, [t0])), createStaticColumn(1, [t4])))
    // console.log(clearCopy(clearCopy(origin, createStaticRow(6, [t0])), createStaticColumn(2, [t4])))



    // const t1: Array<number> = createRandomArrForRowK({
    //     rowFor1: clearCopy(origin, createStaticRow(0, [t0])),
    //     rowFor2: clearCopy(origin, createStaticRow(3, [t0])),
    //     rowFor3: clearCopy(origin, createStaticRow(6, [t0])),
    //     colFor1: clearCopy(origin, createStaticColumn(0, [t4])),
    //     colFor2: clearCopy(origin, createStaticColumn(1, [t4])),
    //     colFor3: clearCopy(origin, createStaticColumn(2, [t4]))
    // })

    const t1: Array<number> = createRandomArrForRowK({
        rowFor1: createStaticRow(0, [t0]),
        rowFor2: createStaticRow(3, [t0]),
        rowFor3: createStaticRow(6, [t0]),
        colFor1: createStaticColumn(0, [t4]),
        colFor2: createStaticColumn(1, [t4]),
        colFor3: createStaticColumn(2, [t4])
    })



    console.log('t0', t0)
    console.log('t1', t1)
    // console.log('t2', t2)
    // console.log('t3', t3)
    console.log('t4', t4)
    // console.log('t5', t5)
    // console.log('t6', t6)
    // console.log('t7', t7)
    // console.log('t8', t8)


    // console.log('0', createStaticRow(0, [origin]))
    // console.log('3', createStaticRow(3, [origin]))
    // console.log('6', createStaticRow(6, [origin]))
}