import { SET_FAVPLAYERS } from "./type"

export const setFavPlayers = (players) => {
    return {
        type: SET_FAVPLAYERS,
        payload: players
    }
}