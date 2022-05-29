import { combineReducers } from 'redux'

import notes, {CounterState} from './notes'

export default combineReducers({
    notes
})

export interface RootState {
    notes: CounterState
}