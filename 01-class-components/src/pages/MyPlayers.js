import React, { useState } from 'react';
import useFetch from '../hooks/useFetch'
import spin from '../asset/Ripple-1s-304px.svg'
import { Link } from "react-router-dom";
import { Card, Navbar, Button } from 'react-bootstrap';
import SimpleTable from '../components/Table'


import { useSelector, useDispatch } from 'react-redux'
import { setFavPlayers } from '../store/actions/favoriteActions'



function Page() {

    const { favPlayers } = useSelector(state => state.favoriteReducers)
    const dispatch = useDispatch()
    function addPlayer() {
        // dispatch(setFavPlayers(player))
    }





    return <>


        <Navbar className="bg-light justify-content-between" style={{ height: "5em" }}>
            <Link to={`/`}><Button>Back</Button></Link>
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}>My Players List</h1>

        </Navbar>

        {favPlayers.length > 0 ? <SimpleTable data={favPlayers}></SimpleTable> :

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "93vh", width: "100vw", backgroundColor: "rgb(255,255,255,0.7)" }}>
                <h2>No Players Added Yet</h2>
            </div>
        }








    </>


}


export default Page;