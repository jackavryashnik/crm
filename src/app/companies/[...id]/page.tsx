import React from 'react';
import Header from '../../components/Header';

export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
