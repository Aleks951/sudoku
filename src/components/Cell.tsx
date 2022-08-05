import React, { useState } from "react"
import { InputNumber } from 'antd'
import { RootState } from '../reducer'
import { useSelector } from 'react-redux'

interface props {
    number: number,
    disabledCells: Array<number>
}

export default ({ number, disabledCells }: props) => {
    const [statusAnswer, setStatusAnswer] = useState(false)
    const { hints, sizeBoard } = useSelector((state: RootState) => state.sudoku)

    return (
        <>
            {disabledCells.includes(number)
                ?
                <InputNumber
                    data-testid='disabled'
                    className="cell"
                    value={number}
                    disabled
                />
                :
                <InputNumber
                    data-testid='active'
                    min={1}
                    max={sizeBoard}
                    className="cell"
                    status={statusAnswer && hints ? 'error' : ''}
                    onChange={value => {
                        if (value === null) {
                            setStatusAnswer(false)
                        } else {
                            setStatusAnswer(value !== number)
                        }
                    }}
                />
            }
        </>
    )
}