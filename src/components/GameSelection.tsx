import React, { useState } from 'react';
import { Button, Modal, Radio, Space, Switch } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { setState } from '../reducer/sudoku'
import { RootState } from '../reducer'
import { useSelector, useDispatch } from 'react-redux'
import MenuItem from './MenuItem'

interface props {
    visibleModal: boolean,
    setVisibleModal: Function,
    createGame: Function,
    closable: boolean
}

const sizes = [4, 9, 16]

export default ({ visibleModal, setVisibleModal, createGame, closable }: props) => {
    const dispatch = useDispatch()

    const [level, setLevel] = useState(0)
    const onChangeLevel = (e: RadioChangeEvent) => {
        setLevel(e.target.value)
    }

    const [size, setSize] = useState(9)
    const onChangeSize = (e: RadioChangeEvent) => {
        setSize(e.target.value)
    }

    const { hints } = useSelector((state: RootState) => state.sudoku)
    const onChangePod = (hints: boolean) => {
        dispatch(setState({ hints }))
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
                        Create new game
                    </Button>
                </div>
            ]}
        >
            <MenuItem
                title='Level'
                description='The choice of difficulty affects the number of open cells on the field'
            />
            <Radio.Group
                onChange={onChangeLevel}
                value={level}
            >
                <Space direction="vertical">
                    <Radio value={0}>Easy</Radio>
                    <Radio value={1}>Medium</Radio>
                    <Radio value={2}>Hard</Radio>
                </Space>
            </Radio.Group>
            <MenuItem
                title='Size'
                description='Playing field size'
            />
            <Radio.Group
                onChange={onChangeSize}
                value={size}
            >
                <Space direction="vertical">
                    {sizes.map(size => <Radio key={size} value={size}>{`${size} * ${size}`}</Radio>)}
                </Space>
            </Radio.Group>
            <MenuItem
                title='Hints'
                description='This switch can be activated at any time during the game. If it is enabled, then you will see hints (the borders of incorrectly filled cells will turn red)'
            />
            <Switch
                checked={hints}
                onChange={onChangePod}
            />
        </Modal>
    )
}