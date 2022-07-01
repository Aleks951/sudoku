import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Cell from '../Cell';



it('render Cell active', () => {
    render(<Cell number={5} disabledCells={[]} />);
    const cellActive = screen.queryByTestId('active')
    expect(cellActive).toBeInTheDocument();
})

it('render Cell disabled', () => {
    render(<Cell number={5} disabledCells={[5]} />);
    const cellDisabled = screen.queryByTestId('disabled')
    expect(cellDisabled).toBeInTheDocument()
})

it('check status error', () => {
    render(<Cell number={5} disabledCells={[]} />);
    const cell = screen.queryByTestId('active')
    userEvent.type(cell!, '6')
    expect(document.getElementsByClassName('ant-input-number-status-error').length).toBe(1)

    userEvent.type(cell!, '{backspace}5')
    expect(document.getElementsByClassName('ant-input-number-status-error').length).toBe(0)
})