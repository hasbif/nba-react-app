import { createStore, combineReducers } from 'redux'
import favoriteReducers from "./reducers/favoriteReducers"

const reducer = combineReducers({
    favoriteReducers
})

const store = createStore(reducer)

export default store