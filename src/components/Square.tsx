import React, { useMemo } from "react"
import Cell from './Cell'
import { shuffle } from '../logic'

interface props {
    square: Array<number>,
    difficultyLevel: number,
    sizeBoard: number,
    gridTemplate: string
}

const difficultyLevels = [[3, 4, 5], [3, 4], [1, 2, 3]]

export default ({ square, difficultyLevel, sizeBoard, gridTemplate }: props) => {
    const disabledCells = useMemo(() => shuffle(square).slice(0, shuffle(difficultyLevels[difficultyLevel])[0]), [square, difficultyLevel])

    return (
        <div className="myGridWrap" data-testid='gridWrap' style={{gridTemplateColumns : gridTemplate, gridTemplateRows: gridTemplate}}>
            {square.map(number => (
                <Cell
                    key={number}
                    number={number}
                    disabledCells={disabledCells}
                />
            ))}
        </div>
    )
}