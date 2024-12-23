import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTable from '@/app/components/SummaryTable';
import DashboardCard from '@/app/components/DashboardCard';
import SummaryTableCell from '@/app/components/SummaryTableCell';

export default async function Page() {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
