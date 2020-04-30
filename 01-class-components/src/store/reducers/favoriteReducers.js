import { SET_FAVPLAYERS } from '../actions/type'
const initialState = {
    favPlayers: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVPLAYERS:
            return { ...state, favPlayers: [...state.favPlayers, action.payload] }
        case "RMV_FAVPLAYERS":
            let newList = [...state.favPlayers]
            newList.splice(action.payload, 1)
            return { ...state, favPlayers: newList }
        default:
            return state
    }
}


// case SET_FAVPLAYERS:
//             return { ...state, favPlayers: action.payload }