import React from "react"

interface props {
    number: number
}

export default ({ number }: props) => {
    return (
        <div className='number'>
            {number}
        </div>
    )
}