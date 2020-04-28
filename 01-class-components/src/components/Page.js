import React, { useState } from 'react';
import SimpleTable from './Table'
import useFetch from './hooks/useFetch'
import spin from '../asset/Spin-1s-200px.svg'


// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));
// class Page extends Component {
//     constructor() {
//         super()
//         this.state = {
//             players: [],
//             search: "",
//             searchPlayer: null,
//         }
//     }

//     componentDidMount() {

//         fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=50", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "free-nba.p.rapidapi.com",
//                 "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
//             }
//         })
//             .then(response => {
//                 return response.json()
//             })
//             .then(response => {
//                 console.log(response, 'sdasaojisad')
//                 console.log(response.data, 'sdasaojiasddddddasdsad')
//                 this.setState({ players: response.data })
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     searchPlayer = (e) => {
//         e.preventDefault()
//         console.log(e.target.value)
//         console.log(this.state.search)

//         fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=" + this.state.search, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "free-nba.p.rapidapi.com",
//                 "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
//             }
//         })
//             .then(response => {
//                 return response.json()
//             })
//             .then(response => {
//                 console.log(response, 'playerssdasaojisad')
//                 console.log(response.data, 'playessdasaojiasddddddasdsad')
//                 this.setState({ searchPlayer: response.data })
//             })
//             .catch(err => {
//                 console.log(err);
//             });

//     }

//     clearSearch = () => {
//         console.log('masuk')
//         this.setState({
//             search: ""
//         })
//     }

//     handleInput = (e) => {
//         this.setState({
//             search: e.target.value.trim().replace(/ /g, "%20")
//         })
//     }

//     render() {
//         return <div>
//             <h1>NBA Player Info</h1>

//             <form>
//                 <input id="searchForm" placeholder="Search team..." onChange={this.handleInput} value={this.state.search} />
//                 <button onClick={this.searchPlayer}>Search</button>
//             </form>
//             <button onClick={this.clearSearch}>Clear</button>
//             {this.state.searchPlayer === "" ? <SimpleTable data={this.state.searchPlayer}></SimpleTable> : <SimpleTable data={this.state.players}></SimpleTable>}

//         </div>
//     }
// }

function Page() {
    const [url, setURL] = useState("https://free-nba.p.rapidapi.com/players?page=0&per_page=150")
    const [playerList, error, loading] = useFetch(url)
    const [search, setSearch] = useState('')

    if (loading) {
        return <img src={spin} style={{ margin: "auto", alignSelf: "center" }} />
    }
    if (error) {
        return <p>{JSON.stringify(error)}</p>
    }

    const clearSearch = () => {
        setSearch('')
        setURL("https://free-nba.p.rapidapi.com/players?page=0&per_page=150")
    }

    const handleInput = (e) => {
        setSearch(e.target.value.trim().replace(/ /g, "%20"))
    }

    const searchPlayer = (e) => {
        e.preventDefault()
        console.log(search, 'hihi')
        setURL("https://free-nba.p.rapidapi.com/players?page=0&per_page=150&search=" + search)
    }

    return <>
        <h1 style={{ "textAlign": "center" }}>NBA Player Info</h1>

        <form>
            <input id="searchForm" placeholder="Search team..." onChange={handleInput} value={search} />
            <button onClick={searchPlayer}>Search</button>
        </form>
        <button onClick={clearSearch}>Clear</button>

        {/* {this.state.searchPlayer === "" ? <SimpleTable data={this.state.searchPlayer}></SimpleTable> : <SimpleTable data={this.state.players}></SimpleTable>} */}

        <SimpleTable data={playerList}></SimpleTable>
    </>


}


export default Page;