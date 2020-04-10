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
        Header: 'Hoge',
        accessor: 'col1',
      },
      {
        Header: 'Foo',
        accessor: 'col2',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
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
