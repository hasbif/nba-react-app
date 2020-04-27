import React, { Component } from 'react';
import Teams from './Teams'


class Page extends Component {
    constructor() {
        super()
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                this.setState({ teams: data.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div>
            <h1>NBA Info</h1>
            <Teams data={this.state.teams} />
            hi from component
        </div>
    }
}


export default Page;