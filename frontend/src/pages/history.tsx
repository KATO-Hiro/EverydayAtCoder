import React from 'react';
import withAuth from "../helpers/withAuth";
import ContestHistoryTable from "../components/histories/ContestHistoryTable";
import GenerateData from '../components/GenerateData';

function History() {
  // dummy data.
  // TODO: Enable to fetch API in backend.
  const data = React.useMemo(() => GenerateData(1000), []);

  return (
    <div>
      <ContestHistoryTable data={data} />
    </div>
  );
}

export default withAuth(History);
