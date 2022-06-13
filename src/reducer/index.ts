import { combineReducers } from 'redux'

import notes, { CounterState } from './notes'
import sudoku, { gameSudokuState } from './sudoku'

export default combineReducers({
    notes,
    sudoku
})

export interface RootState {
    notes: CounterState,
    sudoku: gameSudokuState
}