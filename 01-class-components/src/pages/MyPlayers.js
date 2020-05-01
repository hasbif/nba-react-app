import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import SimpleTable from '../components/Table'


import { useSelector } from 'react-redux'
// import { setFavPlayers } from '../store/actions/favoriteActions'



function Page() {

    const { favPlayers } = useSelector(state => state.favoriteReducers)
    // const dispatch = useDispatch()

    return <>

        <Navbar className="bg-light justify-content-between" style={{ height: "5em" }}>
            <Link to={`/`} data-testid="backHomefromMP"><Button>Back</Button></Link>
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }} data-testid="myplayerTitle">My Players List</h1>

        </Navbar>

        {favPlayers.length > 0 ? <SimpleTable data={favPlayers}></SimpleTable> :

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "93vh", width: "100vw", backgroundColor: "rgb(255,255,255,0.7)" }}>
                <h2>No Players Added Yet</h2>
            </div>
        }


    </>


}


export default Page;