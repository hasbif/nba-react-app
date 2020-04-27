import React, { Component } from 'react';


class Teams extends Component {
    constructor() {
        super()
        this.state = {
            teams: []
        }
    }


    render() {
        return <div>

            hi from teamsss
            <br />
            {JSON.stringify(this.props.data)}



        </div>
    }
}

export default Teams