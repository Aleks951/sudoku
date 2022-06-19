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
                    className="cell"
                    value={number}
                    disabled
                />
                :
                <InputNumber
                    min={1}
                    max={9}
                    className="cell"
                    status={statusAnswer ? 'error' : ''}
                    onChange={value => {
                        setStatusAnswer(value !== number)
                    }}
                />
            }
        </>
    )
}