import React, { useState } from 'react';
import { Button, Modal, Radio, Space, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd';

interface props {
    visibleModal: boolean,
    setVisibleModal: Function,
    createGame: Function,
    closable: boolean
}

const sizes = [2, 3, 4]

export default ({ visibleModal, setVisibleModal, createGame, closable }: props) => {
    const [level, setLevel] = useState(0)
    const onChangeLevel = (e: RadioChangeEvent) => {
        setLevel(e.target.value)
    }

    const [size, setSize] = useState(9)
    const onChangeSize = (e: RadioChangeEvent) => {
        setSize(e.target.value)
    }

    const create = () => {
        createGame(level, size)
        setVisibleModal(false)
    }

    const closeModal = () => {
        if (closable) setVisibleModal(false)
    }

    return (
        <Modal
            visible={visibleModal}
            closable={closable}
            onCancel={closeModal}
            footer={[
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button
                        style={{
                            width: '30vh'
                        }}
                        onClick={create}
                    >
                        Create
                    </Button>
                </div>
            ]}
        >
            <Typography.Title>Level</Typography.Title>
            <Radio.Group
                onChange={onChangeLevel}
                value={level}
            >
                <Space direction="vertical">
                    <Radio value={0}>Easy, 3-5 prefilled numbers</Radio>
                    <Radio value={1}>Medium, 3-4 prefilled numbers</Radio>
                    <Radio value={2}>Hard — 1-3 prefilled numbers</Radio>
                </Space>
            </Radio.Group>
            <Typography.Title>Size</Typography.Title>
            <Radio.Group
                onChange={onChangeSize}
                value={size}
            >
                <Space direction="vertical">
                    {sizes.map(size => <Radio key={size} value={size * size}>{`${size} * ${size}`}</Radio>)}
                </Space>
            </Radio.Group>
        </Modal>
    )
}