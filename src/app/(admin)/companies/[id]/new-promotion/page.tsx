'use client';

import React from 'react';
import PromotionForm from '@/app/components/PromotionForm';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}
