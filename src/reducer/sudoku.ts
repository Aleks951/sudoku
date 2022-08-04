import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createGame } from '../logic'

export interface gameSudokuState {
    board: Array<Array<number>>,
    difficultyLevel: number,
    sizeBoard: number
}

const initialState = {
    board: [],
    difficultyLevel: 0,
    sizeBoard: 9
} as gameSudokuState

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState,
    reducers: {
        setState(state, action: PayloadAction<any>) {
            return {
                ...state,
                ...action.payload
            }
        },
        newGame(state, action: PayloadAction<number>) {
            state.board = createGame(action.payload)
        }
    },
})

export const { newGame, setState } = sudokuSlice.actions
export default sudokuSlice.reducer