'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/PromotionFormModal';

export interface PageProps {
  params: { id: string };
}

export default  function Page({ params }: PageProps) {
  const router = useRouter();
  const { id } = params;
  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
