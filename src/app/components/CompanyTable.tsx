'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import CompanyRow from '@/app/components/CompanyRow';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export default function CompanyTable() {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });

  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="pb-5 text-sm font-light text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((company) => (
                        <CompanyRow
                        key={company.id}
                        id={company.id}
                        category={company.categoryTitle}
                        company={company.title}
                        status={company.status}
                        promotion={company.hasPromotions}
                        country={company.countryTitle}
                        joinedDate={company.joinedDate}
                      />
          ))}
        </tbody>
      </table>
    </div>
  );
}