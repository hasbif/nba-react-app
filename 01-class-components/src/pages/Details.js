import React, { useState } from 'react';
import useFetch from '../hooks/useFetch'
import spin from '../asset/Spin-1s-200px.svg'
import { Link } from "react-router-dom";
import {
    useParams
} from 'react-router-dom'



function Page() {
    let { id } = useParams()
    const [url, setURL] = useState(`https://free-nba.p.rapidapi.com/players/${id}`)
    const [player, error, loading] = useFetch(url)


    console.log(id)

    if (loading) {
        return <img src={spin} alt="loading" style={{ margin: "auto", alignSelf: "center" }} />
    }
    if (error) {
        return <p>{JSON.stringify(error)}</p>
    }

    console.log(player, 'pladsads')




    return <>
        <h1 style={{ "textAlign": "center" }}>Details</h1>

        <Link to={`/`}><button>Back</button></Link>

        <div className="maincard">
            <h1>{player.first_name} {player.last_name}</h1>

            <h3>Position: {player.position === "" ? "N/A" : player.position}</h3>
            <h4> Height: {player.height_feet ? `${player.height_feet}'${player.height_inches}` : 'N/A'}</h4>
            <h4> Weight: {player.weight_pounds ? player.weight_pounds + ' lb' : 'N/A'}</h4>
            <h3>Team: {player.team.full_name}</h3>
            <h5>{player.team.abbreviation}</h5>
            <h4>Location: {player.team.city} </h4>
            <h4>Division: {player.team.division} Division</h4>
            <h4>Conference: {player.team.conference}ern Conference</h4>


        </div>


        <p> {JSON.stringify(player)}</p>


    </>


}


export default Page;