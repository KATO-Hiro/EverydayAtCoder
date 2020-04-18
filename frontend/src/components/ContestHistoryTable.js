import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ContestHistoryTable({ data }) {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Contest&nbsp;Name</TableCell>
              <TableCell align="right">Estimated&nbsp;Performance</TableCell>
              <TableCell align="right">New&nbsp;Rating</TableCell>
              <TableCell align="right">Diff</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                >
                  {row.ContestName}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {row.Performance}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {row.NewRating}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {row.Diff}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
