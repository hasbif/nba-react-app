import React, { useState } from 'react';
import useFetch from '../hooks/useFetch'
import spin from '../asset/Ripple-1s-304px.svg'
import { Link } from "react-router-dom";
import {
    useParams
} from 'react-router-dom'
import { Card, Navbar, Button } from 'react-bootstrap';



function Page() {
    let { playerId } = useParams()
    const [url, setURL] = useState(`https://free-nba.p.rapidapi.com/players/${playerId}`)
    const [player, error, loading] = useFetch(url)


    console.log(playerId)

    if (loading) {
        return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
            <img src={spin} alt="loading" style={{ margin: "auto", alignSelf: "center" }} />

        </div>
    }
    if (error) {
        return <p>{JSON.stringify(error)}</p>
    }

    console.log(player, 'pladsads')




    return <>


        <Navbar className="bg-light justify-content-between" style={{ height: "5em" }}>
            <Link to={`/`}><Button>Back</Button></Link>
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}>NBA Player Info</h1>

        </Navbar>


        <div style={{ width: "90vw", margin: "auto" }}>
            <br />
            <Card bg={"danger"} text={'white'} style={{ width: '100%', height: "40vh" }} >
                <Card.Header><h4>Player Info</h4></Card.Header>
                <Card.Body style={{ display: "flex", "justifyContent": "space-between" }}>
                    <div className="rightside" style={{ flex: 3, display: "flex", "alignItems": "center" }}>
                        {/* <Card.Title style={{ margin: "2rem 0px" }}> {player.first_name} {player.last_name} </Card.Title> */}
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




    </>


}


export default Page;