const initialState = {
    players: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLAYERS":
            return { ...state, players: action.payload }
        default:
            return state
    }
}