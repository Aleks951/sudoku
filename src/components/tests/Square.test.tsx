import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import Square from '../Square';
import reducer from '../../reducer';

const mockSquare = Array.from(Array(9), (param, index) => index + 1)

describe('test component Cell', () => {
    let store: any

    beforeEach(() => {
        store = createStore(reducer)
    })

    test('render Square', () => {
        render(
            <Provider store={store}>
                <Square square={mockSquare} gridTemplate={'auto auto auto'} />
            </Provider>
        )
        const gridWrap = screen.queryByTestId('gridWrap')
        expect(gridWrap?.childElementCount).toBe(mockSquare.length)
    })
})