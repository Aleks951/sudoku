import React, { useEffect, useState } from "react";
import { Spin } from 'antd';

interface props {
    loading: boolean,
    children: React.ReactNode
}

export default ({ loading, children }: props) => {
    const [spinning, setSpinning] = useState(false)

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>
        if (loading) {
            setSpinning(true)
        } else {
            timeout = setTimeout(() => { setSpinning(false) }, 400)
        }

        return () => { clearTimeout(timeout) }
    }, [loading])

    return (
        <Spin spinning={spinning}>
            {children}
        </Spin>
    )
}