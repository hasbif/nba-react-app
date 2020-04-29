import { SET_FAVPLAYERS } from '../actions/type'
const initialState = {
    favPlayers: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVPLAYERS:
            return { ...state, favPlayers: action.payload }
        default:
            return state
    }
}