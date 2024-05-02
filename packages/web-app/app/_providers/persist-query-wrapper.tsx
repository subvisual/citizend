'use client';

import { QueryClient } from '@tanstack/react-query';
import { TChildren } from '@/app/_types';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { deserialize, serialize } from 'wagmi';

const oneHour = 1_000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: oneHour,
      gcTime: oneHour,
    },
  },
});

export function PersistQueryWrapper({ children }: TChildren) {
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
