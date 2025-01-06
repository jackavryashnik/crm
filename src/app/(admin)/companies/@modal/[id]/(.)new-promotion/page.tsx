'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/PromotionFormModal';

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  if (!id || Array.isArray(id)) {
    return <div>Error: ID not found or invalid</div>;
  }

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
