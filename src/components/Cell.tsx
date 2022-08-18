import React, { useState, useEffect } from "react"
import { InputNumber } from 'antd'
import { RootState } from '../reducer'
import { useSelector } from 'react-redux'

interface props {
    number: number,
    disabledCells: Array<number>
}

type typeInputValue = undefined | number

export default ({ number, disabledCells }: props) => {
    const [statusAnswer, setStatusAnswer] = useState(false)
    const [inputValue, setInputValue] = useState<typeInputValue>()
    const { hints, sizeBoard } = useSelector((state: RootState) => state.sudoku)

    useEffect(() => {
        setInputValue(undefined)
        setStatusAnswer(false)
    }, [disabledCells])

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
                    value={inputValue}
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
                        setInputValue(value)
                    }}
                />
            }
        </>
    )
}