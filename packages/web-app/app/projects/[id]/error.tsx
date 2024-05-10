'use client';

import { Button } from '@/app/_ui/components';
import { appSignal } from '@/app/app-signal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();
  useEffect(() => {
    const report = async () => {
      await appSignal.sendError(error);
    };
    report();
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-6">
      <h2 className="text-center">Something went wrong!</h2>
      <p className="text-center">If the problem persists, contact support.</p>
      <Button className="mt-6" onClick={() => router.push('/')}>
        Go back
      </Button>
    </main>
  );
}
