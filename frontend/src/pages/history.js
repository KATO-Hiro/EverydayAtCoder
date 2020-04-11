import React from 'react';
// FIXME: "" → ''
import Layout from "../components/MyLayout";
import ContestHistoryTable from "../components/ContestHistoryTable";
import GenerateData from '../components/GenerateData';

const histroyPageContent = <h1>History</h1>;

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

  // dummy data.
  // TODO: Enable to fetch API in backend.
  const data = React.useMemo(() => GenerateData(100), []);

  return (
    <div>
      <Layout content={histroyPageContent} />
      <ContestHistoryTable columns={columns} data={data} />
    </div>
  );
}
