import React, { useState } from "react"
import { InputNumber } from 'antd';

interface props {
    number: number,
    disabledCells: Array<number>
}



export default ({ number, disabledCells }: props) => {
    const [statusAnswer, setStatusAnswer] = useState(false)

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
                    max={9}
                    className="cell"
                    status={statusAnswer ? 'error' : ''}
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