import React from 'react';
import Header from '@/app/components/Header';
import Toolbar from '@/app/components/Toolbar';
import SearchInput from '@/app/components/SearchInput';
import AddCompanyBtn from '@/app/components/AddCompanyBtn';
import CompanyTable from '@/app/components/CompanyTable';
import CompanyRow from '@/app/components/CompanyRow';
import { Status } from '@/app/components/StatusLabel';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyBtn />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
