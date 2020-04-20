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
function descendingComparator(first, second, orderBy) {
  if (second[orderBy] < first[orderBy]) {
    return -1;
  }

  if (second[orderBy] > first[orderBy]) {
    return 1;
  }

  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (first, second) => descendingComparator(first, second, orderBy)
    : (first, second) => -descendingComparator(first, second, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((element, index) => [element, index]);

  stabilizedThis.sort((first, second) => {
    const order = comparator(first[0], second[0]);

    if (order !== 0) return order;
    return first[1] - second[1];
  });

  return stabilizedThis.map((element) => element[0]);
}

export default function SortableTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
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
