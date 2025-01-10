'use client';

import Button from './components/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <Button onClick={() => router.push('/dashboard')}>Open dashboard</Button>
    </main>
  );
}
