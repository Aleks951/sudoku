import React from "react"
import Cell from './Cell'
import { shuffle } from '../../logic'

interface props {
    square: Array<number>
}

export default ({ square }: props) => {
    const disabledCells = shuffle(square).slice(0, 4)


    return (
        <div className="myGridWrap">
            {square.map((number, i) => (
                <Cell
                    key={number}
                    number={number}
                    disabledCells={disabledCells}
                />
            ))}
        </div>
    )
}