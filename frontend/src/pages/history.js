import React from 'react';
import { useTable } from "react-table";
import Layout from "../components/MyLayout";
import ContestHistoryTable from "../components/ContestHistoryTable";

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
      <ContestHistoryTable columns={columns} data={data} />
    </div>
  );
}
