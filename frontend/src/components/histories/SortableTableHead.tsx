import React from 'react';
import PropTypes from 'prop-types';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';

import {
  headCells
} from './SortableTableHeadCells';

// See:
// https://material-ui.com/components/tables/#sorting-amp-selecting
function descendingComparator(first: any, second: any, orderBy: any) {
  if (second[orderBy] < first[orderBy]) {
    return -1;
  }

  if (second[orderBy] > first[orderBy]) {
    return 1;
  }

  return 0;
}

export function getComparator(order: any, orderBy: any) {
  return order === 'desc'
    ? (first: any, second: any) => descendingComparator(first, second, orderBy)
    : (first: any, second: any) => -descendingComparator(first, second, orderBy);
}

export function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((element: any, index: any) => [element, index]);

  stabilizedThis.sort((first: any, second: any) => {
    const order = comparator(first[0], second[0]);

    if (order !== 0) return order;
    return first[1] - second[1];
  });

  return stabilizedThis.map((element: any) => element[0]);
}

export default function SortableTableHead(props: any) {

  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'default' }
            sortDirection={orderBy === headCell.id ? order : false }
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

SortableTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};
