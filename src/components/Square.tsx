import React, { useMemo } from "react"
import Cell from './Cell'
import { shuffle } from '../logic'
import { RootState } from '../reducer'
import { useSelector } from 'react-redux'

interface props {
    square: Array<number>,
    gridTemplate: string
}

const difficultyLevels = {
    4: [[1, 2], [1, 2], [1]],
    9: [[3, 4, 5], [3, 4], [1, 2, 3]],
    16: [[8, 10, 12], [5, 7], [2, 3, 5]]
}

export default ({ square, gridTemplate }: props) => {
    const { difficultyLevel, sizeBoard } = useSelector((state: RootState) => state.sudoku)

    const disabledCells = useMemo(() => shuffle(square).slice(0, shuffle(difficultyLevels[sizeBoard][difficultyLevel])[0]), [square, difficultyLevel])

    return (
        <div className="myGridWrap" data-testid='gridWrap' style={{ gridTemplateColumns: gridTemplate, gridTemplateRows: gridTemplate }}>
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