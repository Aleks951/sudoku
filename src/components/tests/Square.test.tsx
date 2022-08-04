import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from '../Square';

const mockSquare = Array.from(Array(9), (param, index) => index + 1)

it('render Square', () => {
    render(<Square square={mockSquare} difficultyLevel={0} sizeBoard={9} gridTemplate={'auto auto auto'} />)
    const gridWrap = screen.queryByTestId('gridWrap')
    expect(gridWrap?.childElementCount).toBe(mockSquare.length)
})