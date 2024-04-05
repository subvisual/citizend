'use client';

import { QueryClient } from '@tanstack/react-query';
import { TChildren } from '@/app/_types';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { deserialize, serialize } from 'wagmi';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 1_000 * 60 * 5,
      gcTime: 1_000 * 60 * 60 * 0.5,
    },
  },
});

export function PersistQueryWrapper({ children }: TChildren) {
  // Set up the persister.
  const persister = createAsyncStoragePersister({
    serialize,
    storage: window?.sessionStorage,
    deserialize,
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
