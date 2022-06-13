import React from "react"
import Cell from './Cell'

interface props {
    square: Array<number>
}

export default ({ square }: props) => {
    return (
        <div className='box'>
            {square.map((number) => (
                <Cell
                    number={number}
                />
            ))}
        </div>
    )
}