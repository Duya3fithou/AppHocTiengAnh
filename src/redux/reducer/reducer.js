import {combineReducers} from 'redux';
import arrWordsReducer from './arrWordsReducer'
import filterStatusReducer from './filterStatusReducer'
const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
})
export default reducer;