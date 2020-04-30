import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch'
import spin from '../asset/Ripple-1s-304px.svg'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { Card, Navbar, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { getPlayers } from "../store/actions/playersActions"



function Page() {

    //const [url, setURL] = useState(`https://free-nba.p.rapidapi.com/players/${playerId}`)
    //const [player, error, loading] = useFetch(url)


    const { players } = useSelector(state => state.playersReducers)
    const player = players
    let { playerId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlayers(`https://free-nba.p.rapidapi.com/players/${playerId}`))
    }, [dispatch, playerId])


    let loading
    if (player.length >= 0) {
        loading = true
    } else if (player.id !== Number(playerId)) {
        loading = true
    } else {
        loading = false
    }


    return <>


        <Navbar className="bg-light justify-content-between" style={{ height: "5em" }}>
            <Link to={`/`}><Button>Back</Button></Link>
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}>NBA Player Info</h1>

        </Navbar>

        {loading ?


            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
                <img src={spin} alt="loading" style={{ margin: "auto", alignSelf: "center" }} /></div>

            :

            <div style={{ width: "90vw", margin: "auto" }}>
                <br />
                <Card bg={"danger"} text={'white'} style={{ width: '100%', height: "40vh" }} >
                    <Card.Header><h4>Player Info</h4></Card.Header>
                    <Card.Body style={{ display: "flex", "justifyContent": "space-between" }}>
                        <div className="rightside" style={{ flex: 3, display: "flex", "alignItems": "center" }}>
                            <h1>{player.first_name} {player.last_name}</h1>

                        </div>

                        <div className="leftside" style={{ flex: 1, textAlign: "right" }}>
                            <h5> {`Position:\n${player.position === "" ? "N/A" : player.position}`}</h5>
                            <Card.Text>{`Height: ${player.height_feet ? `${player.height_feet}'${player.height_inches}"` : 'N/A'}`}</Card.Text>
                            <Card.Text>{`Weight: ${player.weight_pounds ? player.weight_pounds + ' lb' : 'N/A'}`}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card bg={"primary"} text={'white'} style={{ width: '100%', height: "40vh" }} >
                    <Card.Header><h4 style={{ textAlign: "right" }}>Team Info</h4></Card.Header>
                    <Card.Body style={{ display: "flex", "justifyContent": "space-between" }}>
                        <div className="rightside" style={{ flex: 1 }}>
                            <h5> {player.team.abbreviation} </h5>
                            <Card.Text>Location: {player.team.city}</Card.Text>
                            <Card.Text>Division: {player.team.division} Division</Card.Text>
                            <Card.Text>Conference: {player.team.conference}ern Conference</Card.Text>
                        </div>

                        <div className="leftside" style={{ flex: 3, display: "flex", "alignItems": "center", justifyContent: "flex-end" }}>
                            <h1>{player.team.full_name}</h1>
                        </div>
                    </Card.Body>
                </Card>

            </div>



        }


    </>


}


export default Page;