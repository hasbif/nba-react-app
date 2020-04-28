import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
    const classes = useStyles();
    const { data } = props


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Position</TableCell>
                        <TableCell align="right">Team</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((player, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                {player.last_name}
                            </TableCell>
                            <TableCell align="right">{player.first_name}</TableCell>
                            <TableCell align="right">{player.position === "" ? 'N/A' : player.position}</TableCell>
                            <TableCell align="right">{player.team.abbreviation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

