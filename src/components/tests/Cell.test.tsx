import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import userEvent from '@testing-library/user-event'
import Cell from '../Cell';
import reducer from '../../reducer';
import { setState } from '../../reducer/sudoku';

describe('test component Cell', () => {
    let store: any

    beforeEach(() => {
        store = createStore(reducer)
    })

    test('render Cell active', () => {
        render(
            <Provider store={store}>
                <Cell number={5} disabledCells={[]} />
            </Provider>
        );
        const cellActive = screen.queryByTestId('active')
        expect(cellActive).toBeInTheDocument();
    })

    test('render Cell disabled', () => {
        render(
            <Provider store={store}>
                <Cell number={5} disabledCells={[5]} />
            </Provider>
        );
        const cellDisabled = screen.queryByTestId('disabled')
        expect(cellDisabled).toBeInTheDocument()
    })

    test('check status error if hints on', () => {
        const TestComponent = () => {
            const dispatch = useDispatch()
            dispatch(setState({ hints: true }))

            return (null)
        }

        render(
            <Provider store={store}>
                <TestComponent />
                <Cell number={5} disabledCells={[]} />
            </Provider>
        );
        const cell = screen.queryByTestId('active')
        userEvent.type(cell!, '6')
        expect(document.getElementsByClassName('ant-input-number-status-error').length).toBe(1)

        userEvent.type(cell!, '{backspace}5')
        expect(document.getElementsByClassName('ant-input-number-status-error').length).toBe(0)
    })

    test('check status error if hints off', () => {
        render(
            <Provider store={store}>
                <Cell number={5} disabledCells={[]} />
            </Provider>
        );
        const cell = screen.queryByTestId('active')
        userEvent.type(cell!, '6')
        expect(document.getElementsByClassName('ant-input-number-status-error').length).toBe(0)

        userEvent.type(cell!, '{backspace}5')
        expect(document.getElementsByClassName('ant-input-number-status-error').length).toBe(0)
    })
})