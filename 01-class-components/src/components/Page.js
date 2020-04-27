import React, { Component } from 'react';
// import Teams from './Teams'
import SimpleTable from './Table'


class Page extends Component {
    constructor() {
        super()
        this.state = {
            players: [],
            search: null,
            searchPlayer: null,
        }
    }

    componentDidMount() {

        fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=50", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response, 'sdasaojisad')
                console.log(response.data, 'sdasaojiasddddddasdsad')
                this.setState({ players: response.data })
            })
            .catch(err => {
                console.log(err);
            });
        // fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "free-nba.p.rapidapi.com",
        //         "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
        //     }
        // })
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         // console.log(data);
        //         this.setState({ teams: data.data })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });


        // fetch("https://api-nba-v1.p.rapidapi.com/seasons/", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        //         "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
        //     }
        // })
        //     .then(response => {
        //         console.log(response);
        //         return response.json()
        //     })
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    searchPlayer = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        console.log(this.state.search)

        fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=" + this.state.search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response, 'playerssdasaojisad')
                console.log(response.data, 'playessdasaojiasddddddasdsad')
                this.setState({ searchPlayer: response.data })
            })
            .catch(err => {
                console.log(err);
            });



        // this.setState({
        //     search: null
        // })
    }

    clearSearch = () => {
        this.setState({
            searchPlayer: null
        })
        // this.setState({
        //     search: null
        // })
    }

    handleInput = (e) => {
        this.setState({
            search: e.target.value.trim().replace(/ /g, "%20")
        })
    }

    render() {
        return <div>
            <h1>NBA Player Info</h1>

            <form>
                <input id="searchForm" placeholder="Search team..." onChange={this.handleInput}></input>
                <button onClick={this.searchPlayer}>Search</button>
            </form>
            <button onClick={this.clearSearch}>Clear</button>
            {this.state.searchPlayer ? <SimpleTable data={this.state.searchPlayer}></SimpleTable> : <SimpleTable data={this.state.players}></SimpleTable>}

        </div>
    }
}


export default Page;