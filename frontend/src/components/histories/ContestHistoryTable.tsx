import React from 'react';
import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableRow,
  TablePagination,
  Paper,
} from '@material-ui/core';

import SortableTableHead, {
  getComparator,
  stableSort,
} from './SortableTableHead';
import {
  StyledTableCell,
  StyledTableRow,
} from './StyledTable';
import {
  TablePaginationActions,
} from './TablePagination';
import RatingBackgroundColorsStyle from '../../utils/RatingBackgroundColorsStyle';

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    maxHeight: 640,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function ContestHistoryTable({
  data
}: {
  data: any
}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('Round');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer
        className={classes.container}
        component={Paper}
      >
        <Table
          className={classes.table}
          size="small"
          stickyHeader
          aria-label="contest history table"
        >
          {/* error TS2322: Type '{ children: never[]; className: string; order: string; orderBy: string; onRequestSort: (event: any, property: any) => void; }' is not assignable to type 'IntrinsicAttributes & Pick<{ props: { classes: any; order: any; orderBy: any; onRequestSort: any; }; }, "props"> & Pick<InferProps<{ classes: Validator<object>; onRequestSort: Validator<...>; order: Validator<...>; orderBy: Validator<...>; }>, "order" | ... 2 more ... | "onRequestSort">'.
  Property 'children' does not exist on type 'IntrinsicAttributes & Pick<{ props: { classes: any; order: any; orderBy: any; onRequestSort: any; }; }, "props"> & Pick<InferProps<{ classes: Validator<object>; onRequestSort: Validator<...>; order: Validator<...>; orderBy: Validator<...>; }>, "order" | ... 2 more ... | "onRequestSort">'. */}
          <SortableTableHead
            // className={classes}
            // order={order}
            // orderBy={orderBy}
            // onRequestSort={handleRequestSort}
          >
          </SortableTableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? stableSort(data, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
             ).map((row: any) => {
               return (
                 <StyledTableRow key={row.Round}>
                   <StyledTableCell
                     component="th"
                     scope="row"
                     align="center"
                   >
                     {row.Round}
                   </StyledTableCell>
                   <StyledTableCell
                     align="left"
                   >
                     {row.ContestName}
                   </StyledTableCell>
                   <StyledTableCell
                     align="center"
                     style={RatingBackgroundColorsStyle(row.Performance)}
                   >
                    {row.Performance}
                   </StyledTableCell>
                   <StyledTableCell
                     align="center"
                     style={RatingBackgroundColorsStyle(row.NewRating)}
                   >
                    {row.NewRating}
                   </StyledTableCell>
                   <StyledTableCell
                     align="center"
                   >
                     {row.Diff}
                   </StyledTableCell>
                 </StyledTableRow>
               );
            })}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 50, 100, { label: 'All', value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}
