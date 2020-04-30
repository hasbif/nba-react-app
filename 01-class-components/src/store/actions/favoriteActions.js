import { SET_FAVPLAYERS } from "./type"

export const setFavPlayers = (players) => {
    return {
        type: SET_FAVPLAYERS,
        payload: players
    }
}


export const rmvFavPlayers = (players) => {
    return {
        type: "RMV_FAVPLAYERS",
        payload: players
    }
}