import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createGame } from '../logic'

export interface gameSudokuState {
    board: Array<Array<number>>
}

const initialState = { board: [] } as gameSudokuState

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState,
    reducers: {
        newGame(state) {
            state.board = createGame()
        }
        // increment(state) {
        //     state.value++
        // },
        // decrement(state) {
        //     state.value--
        // },
        // incrementByAmount(state, action: PayloadAction<number>) {
        //     state.value += action.payload
        // },
    },
})

export const { newGame } = sudokuSlice.actions
export default sudokuSlice.reducer