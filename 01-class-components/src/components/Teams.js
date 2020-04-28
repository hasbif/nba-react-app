// Not used

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
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>ABV</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Confrence</th>
                    </tr>
                </thead>


                {/* {JSON.stringify(this.props.data)} */}
                <tbody>
                    {this.props.data.map((team, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{team.abbreviation}</td>
                                <td>{team.name}</td>
                                <td>{team.city}</td>
                                <td>{team.conference}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>



        </div>
    }
}

export default Teams