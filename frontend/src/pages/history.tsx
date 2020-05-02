import React from 'react';
import ContestHistoryTable from "../components/histories/ContestHistoryTable";
import GenerateData from '../components/GenerateData';

export default function History() {
  // dummy data.
  // TODO: Enable to fetch API in backend.
  const data = React.useMemo(() => GenerateData(1000), []);

  return (
    <div>
      <ContestHistoryTable data={data} />
    </div>
  );
}
