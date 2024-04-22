'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-6">
      <h2 className="text-center">Something went wrong!</h2>
      <p className="text-center">If the problem persists, contact support.</p>
    </main>
  );
}
