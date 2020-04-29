import React, { useState } from 'react';
import SimpleTable from '../components/Table'
import useFetch from '../hooks/useFetch'
import spin from '../asset/Spin-1s-200px.svg'


function Page() {
    const [url, setURL] = useState("https://free-nba.p.rapidapi.com/players?page=1&per_page=100")
    const [playerList, error, loading] = useFetch(url)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    if (loading) {
        return <img src={spin} style={{ margin: "auto", alignSelf: "center" }} />
    }
    if (error) {
        return <p>{JSON.stringify(error)}</p>
    }

    const clearSearch = () => {
        setSearch('')
        setURL("https://free-nba.p.rapidapi.com/players?page=1&per_page=100")
    }

    const handleInput = (e) => {
        setSearch(e.target.value.trim().replace(/ /g, "%20"))
    }

    const searchPlayer = (e) => {
        e.preventDefault()
        console.log(search, 'hihi')
        setURL("https://free-nba.p.rapidapi.com/players?page=0&per_page=100&search=" + search)
    }

    const changePage = (e) => {
        let num = page + Number(e.target.value)
        setPage(num)
        console.log(page)
        console.log(num)
        console.log(url)
        setURL(`https://free-nba.p.rapidapi.com/players?page=${num}&per_page=100`)
    }


    return <>
        <h1 style={{ "textAlign": "center" }}>NBA Player Info</h1>

        <form>
            <input id="searchForm" placeholder="Search team..." onChange={handleInput} value={search} />
            <button onClick={searchPlayer}>Search</button>
        </form>
        <button onClick={clearSearch}>Clear</button>

        {(page > 1) ? <button onClick={changePage} value="-1"> {'<'} </button> : <button> {'<'} </button>}
        {page}
        <button onClick={changePage} value="1">{'>'}</button>



        <SimpleTable data={playerList.data}></SimpleTable>
    </>


}


export default Page;