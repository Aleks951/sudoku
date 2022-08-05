import React from "react"
import { Typography, Tooltip } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

interface props {
    title: string,
    description: string
}

export default ({ title, description }: props) => {
    return (
        <div className="wrapper-for-menu-items">
            <Typography.Title>{title}</Typography.Title>
            <Tooltip placement="bottom" title={description}>
                <ExclamationCircleOutlined />
            </Tooltip>
        </div>
    )
}