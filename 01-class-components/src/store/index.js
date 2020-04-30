import { createStore, combineReducers, applyMiddleware } from 'redux'
import favoriteReducers from "./reducers/favoriteReducers"
import playersReducers from "./reducers/playersReducers"
import thunk from 'redux-thunk'

const reducer = combineReducers({
    favoriteReducers, playersReducers
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store