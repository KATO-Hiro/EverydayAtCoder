import React from 'react';
import { useTable } from "react-table";
import Layout from "../components/MyLayout";

const histroyPageContent = <h1>History</h1>;

// TODO: Extract a component.
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  border: 'solid 1px gray'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (<td
                         {...cell.getCellProps()}
                         style={{
                           border: 'solid 1px gray',
                         }}
                       >
                         {cell.render('Cell')}
                       </td>);
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function History() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Contest Name',
        accessor: 'ContestName',
      },
      {
        Header: 'Performance',
        accessor: 'Performance',
      },
      {
        Header: 'Old Rating',
        accessor: 'OldRating',
      },
      {
        Header: 'New Rating',
        accessor: 'NewRating',
      },
      {
        Header: 'Diff',
        accessor: 'Diff',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        ContestName: 'AtCoder Beginner Contest 161',
        Performance: 2400,
        OldRating: 2347,
        NewRating: 2352,
        Diff: '+5',
      },
      {
        ContestName: 'AtCoder Beginner Contest 160',
        Performance: 2000,
        OldRating: 2457,
        NewRating: 2397,
        Diff: '-60',
      },
      {
        ContestName: 'AtCoder Grand Contest 043',
        Performance: 3102,
        OldRating: 2407,
        NewRating: 2457,
        Diff: '+50',
      },
    ],
    []
  );

  return (
    <div>
      <Layout content={histroyPageContent} />
      <Table columns={columns} data={data} />
    </div>
  );
}
