import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
    const classes = useStyles();
    const { data } = props


    return (
        <TableContainer component={Paper} style={{ opacity: "0.9" }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", fontSize: "28px" }}>Last Name</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "28px" }}>First Name</TableCell>
                        <TableCell align="center" style={{ fontWeight: "bold", fontSize: "28px" }}>Position</TableCell>
                        <TableCell align="center" style={{ fontWeight: "bold", fontSize: "28px" }}>Team</TableCell>
                        <TableCell align="center" style={{ fontWeight: "bold", fontSize: "28px" }}>Info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((player, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row" style={{ fontSize: "20px" }}>
                                {player.last_name}
                            </TableCell>
                            <TableCell style={{ fontSize: "20px" }}>{player.first_name}</TableCell>
                            <TableCell align="center" style={{ fontSize: "20px" }}>{player.position === "" ? 'N/A' : player.position}</TableCell>
                            <TableCell align="center" style={{ fontSize: "20px" }}>{player.team.abbreviation}</TableCell>
                            <TableCell align="center" style={{ fontSize: "20px" }}><Link to={`/player/${player.id}`}><button>More</button></Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

