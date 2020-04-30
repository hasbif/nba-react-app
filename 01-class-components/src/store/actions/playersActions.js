export const getPlayers = (url) => {
    return (dispatch, getState) => {
        return fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
            }
        }).then(res => {
            return res.json()

        })
            .then(data => {
                dispatch({
                    type: "GET_PLAYERS",
                    payload: data,
                })
            })



    }
}