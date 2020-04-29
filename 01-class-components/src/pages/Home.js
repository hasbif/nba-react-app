import React, { useState } from 'react';
import SimpleTable from '../components/Table'
import useFetch from '../hooks/useFetch'
import spin from '../asset/Ripple-1s-304px.svg'
import { Button, Navbar, Form, FormControl, Pagination } from 'react-bootstrap';
import { Link } from "react-router-dom"







function Page() {
    const [url, setURL] = useState("https://free-nba.p.rapidapi.com/players?page=1&per_page=100")
    const [playerList, error, loading] = useFetch(url)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)





    const clearSearch = () => {
        setSearch('')
        setURL("https://free-nba.p.rapidapi.com/players?page=1&per_page=100")
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const searchPlayer = (e) => {
        e.preventDefault()
        console.log(search, 'hihi')
        let searchUrl = search.trim().replace(/ /g, "%20")
        console.log(searchUrl)
        setURL("https://free-nba.p.rapidapi.com/players?page=0&per_page=100&search=" + searchUrl)
    }


    const nextPage = () => {
        let num = page + 1
        setPage(num)
        setURL(`https://free-nba.p.rapidapi.com/players?page=${num}&per_page=100`)
    }

    const backPage = () => {
        let num = page - 1
        setPage(num)
        setURL(`https://free-nba.p.rapidapi.com/players?page=${num}&per_page=100`)
    }


    if (error) {
        return <p>{JSON.stringify(error)}</p>
    }


    return <>
        <Navbar className="bg-light justify-content-between" style={{ height: "5em" }}>
            <Pagination style={{ margin: "auto 0px" }}>
                <Pagination.Prev onClick={backPage} disabled={(page > 1) ? false : true} />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Next onClick={nextPage} value="1" />
                <Link to={`/favourites`}><Button className=" ml-sm-2">MyPlayers</Button></Link>
            </Pagination>
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}>NBA Player Info</h1>
            <Form inline onSubmit={searchPlayer}>
                <FormControl type="text" id="searchForm" placeholder="Search team..." onChange={handleInput} value={search} className=" mr-sm-2" />
                <Button onClick={searchPlayer} className=" mr-sm-2">Search</Button>
                <Button onClick={clearSearch} variant="danger">X</Button>
            </Form>
        </Navbar>

        {loading ?
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
                <img src={spin} alt="loading" />
            </div> :
            (playerList.meta.total_count ? <SimpleTable data={playerList.data}></SimpleTable> :
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "93vh", width: "100vw", backgroundColor: "rgb(255,255,255,0.7)" }}>
                    <h2>Player Not Found</h2>
                </div>)
        }

    </>


}


export default Page;